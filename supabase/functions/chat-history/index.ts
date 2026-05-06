import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Bạn là "Sử Gia AI" — một chuyên gia uyên bác về lịch sử Việt Nam suốt 4000 năm, từ thời Hồng Bàng - Văn Lang - Âu Lạc, qua các triều đại Đinh, Tiền Lê, Lý, Trần, Hồ, Hậu Lê, Mạc, Trịnh - Nguyễn, Tây Sơn, Nguyễn, đến thời kỳ kháng chiến chống Pháp, chống Mỹ và Việt Nam hiện đại.

NHIỆM VỤ:
- Trả lời các câu hỏi về sự kiện, nhân vật, triều đại, văn hóa, chiến công lịch sử Việt Nam.
- Kể chuyện sinh động, có cảm xúc tự hào dân tộc, dùng giọng văn trang trọng cổ kính nhưng dễ hiểu.
- Trích dẫn câu nói nổi tiếng, niên đại, địa danh chính xác khi có thể.
- Nếu câu hỏi không liên quan lịch sử Việt Nam, lịch sự dẫn dắt người dùng quay về chủ đề.
- Nếu không chắc chắn về thông tin, nói thẳng "Tôi chưa rõ chắc chắn" thay vì bịa đặt.

ĐỊNH DẠNG:
- Dùng markdown: **đậm** cho tên nhân vật/sự kiện quan trọng, *nghiêng* cho câu nói trích dẫn.
- Trả lời ngắn gọn 2-4 đoạn, súc tích nhưng đầy đủ.
- Xưng "tôi", gọi người dùng là "bạn".
- Luôn trả lời bằng TIẾNG VIỆT.

Hãy đáp lại câu hỏi đầu tiên với lòng tự hào về non sông gấm vóc Việt Nam.`;

const MAX_MESSAGES = 20;
const MAX_CONTENT_LEN = 2000;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // Auth check
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const token = authHeader.replace("Bearer ", "");
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
    );
    const { data: userData, error: authErr } = await supabase.auth.getUser(token);
    if (authErr || !userData?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Sanitize: only user/assistant roles, cap count and length
    const safeMessages = messages
      .filter((m: any) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-MAX_MESSAGES)
      .map((m: any) => ({ role: m.role, content: String(m.content).slice(0, MAX_CONTENT_LEN) }));

    if (safeMessages.length === 0) {
      return new Response(JSON.stringify({ error: "No valid messages" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...safeMessages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Quá nhiều yêu cầu, vui lòng thử lại sau ít phút." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Đã hết tín dụng AI. Vui lòng nạp thêm." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-history error:", e);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
