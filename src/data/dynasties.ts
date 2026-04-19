export interface DynastyEvent {
  year: string;
  text: string;
}
export interface Dynasty {
  id: string;
  name: string;
  period: string;
  capital: string;
  founder: string;
  summary: string;
  events: DynastyEvent[];
}

export const dynasties: Dynasty[] = [
  {
    id: "hong-bang",
    name: "Hồng Bàng — Văn Lang",
    period: "2879 TCN – 258 TCN",
    capital: "Phong Châu",
    founder: "Kinh Dương Vương / các Vua Hùng",
    summary: "Thời đại huyền sử mở đầu dân tộc Việt với nhà nước Văn Lang của 18 đời Vua Hùng.",
    events: [
      { year: "~2879 TCN", text: "Kinh Dương Vương lập nên họ Hồng Bàng." },
      { year: "~2524 TCN", text: "Lạc Long Quân và Âu Cơ — truyền thuyết bọc trăm trứng." },
      { year: "~700 TCN", text: "Văn Lang chia làm 15 bộ, văn hóa Đông Sơn rực rỡ với trống đồng." },
      { year: "258 TCN", text: "Thục Phán đánh bại Hùng Vương thứ 18, kết thúc Văn Lang." },
    ],
  },
  {
    id: "au-lac",
    name: "Âu Lạc — Nhà Thục",
    period: "257 TCN – 207 TCN",
    capital: "Cổ Loa",
    founder: "An Dương Vương (Thục Phán)",
    summary: "Hợp nhất Lạc Việt và Âu Việt thành Âu Lạc. Xây thành Cổ Loa cùng truyền thuyết nỏ thần.",
    events: [
      { year: "257 TCN", text: "An Dương Vương lập nước Âu Lạc, dời đô về Cổ Loa." },
      { year: "~250 TCN", text: "Xây thành Cổ Loa — kinh đô kiên cố nhất Đông Nam Á cổ đại." },
      { year: "207 TCN", text: "Triệu Đà chiếm Âu Lạc qua câu chuyện Mỵ Châu — Trọng Thủy." },
    ],
  },
  {
    id: "bac-thuoc",
    name: "Thời kỳ Bắc thuộc",
    period: "207 TCN – 938 SCN",
    capital: "—",
    founder: "—",
    summary: "Hơn 1000 năm dưới ách đô hộ phương Bắc, xen kẽ các cuộc khởi nghĩa anh hùng.",
    events: [
      { year: "40", text: "Khởi nghĩa Hai Bà Trưng — giành lại độc lập 3 năm." },
      { year: "248", text: "Khởi nghĩa Bà Triệu chống quân Đông Ngô." },
      { year: "542", text: "Lý Bí khởi nghĩa, lập nước Vạn Xuân (544)." },
      { year: "722", text: "Mai Thúc Loan xưng Mai Hắc Đế." },
      { year: "905", text: "Khúc Thừa Dụ giành quyền tự chủ." },
      { year: "938", text: "Ngô Quyền đại thắng Bạch Đằng — chấm dứt Bắc thuộc." },
    ],
  },
  {
    id: "ngo",
    name: "Nhà Ngô",
    period: "939 – 965",
    capital: "Cổ Loa",
    founder: "Ngô Quyền",
    summary: "Mở ra kỷ nguyên độc lập tự chủ. Sau khi Ngô Quyền mất, đất nước rơi vào loạn 12 sứ quân.",
    events: [
      { year: "939", text: "Ngô Quyền xưng vương, đóng đô Cổ Loa." },
      { year: "944", text: "Ngô Quyền mất, Dương Tam Kha cướp ngôi." },
      { year: "965", text: "Loạn 12 sứ quân nổ ra khắp đất nước." },
    ],
  },
  {
    id: "dinh",
    name: "Nhà Đinh",
    period: "968 – 980",
    capital: "Hoa Lư",
    founder: "Đinh Tiên Hoàng (Đinh Bộ Lĩnh)",
    summary: "Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, lập Đại Cồ Việt — quốc gia phong kiến trung ương đầu tiên.",
    events: [
      { year: "968", text: "Đinh Bộ Lĩnh lên ngôi, đặt quốc hiệu Đại Cồ Việt." },
      { year: "970", text: "Đặt niên hiệu Thái Bình, cải cách hành chính." },
      { year: "979", text: "Đinh Tiên Hoàng và Đinh Liễn bị Đỗ Thích sát hại." },
    ],
  },
  {
    id: "tien-le",
    name: "Tiền Lê",
    period: "980 – 1009",
    capital: "Hoa Lư",
    founder: "Lê Đại Hành (Lê Hoàn)",
    summary: "Lê Hoàn lên ngôi, đại phá quân Tống năm 981, củng cố nền độc lập non trẻ.",
    events: [
      { year: "980", text: "Lê Hoàn lên ngôi trước họa xâm lăng nhà Tống." },
      { year: "981", text: "Đại phá quân Tống tại Bạch Đằng và Chi Lăng." },
      { year: "1005", text: "Lê Đại Hành mất, Lê Long Đĩnh nối ngôi (Lê Ngọa Triều)." },
    ],
  },
  {
    id: "ly",
    name: "Nhà Lý",
    period: "1009 – 1225",
    capital: "Thăng Long",
    founder: "Lý Thái Tổ (Lý Công Uẩn)",
    summary: "Mở ra thời kỳ văn hiến rực rỡ. Dời đô về Thăng Long, dựng Văn Miếu, xây dựng nền pháp luật.",
    events: [
      { year: "1010", text: "Lý Công Uẩn dời đô từ Hoa Lư về Thăng Long, viết Chiếu dời đô." },
      { year: "1054", text: "Lý Thánh Tông đổi quốc hiệu thành Đại Việt." },
      { year: "1070", text: "Xây Văn Miếu thờ Khổng Tử." },
      { year: "1075", text: "Mở khoa thi đầu tiên; Lý Thường Kiệt đánh sang đất Tống." },
      { year: "1077", text: "Đại thắng quân Tống trên sông Như Nguyệt." },
      { year: "1225", text: "Lý Chiêu Hoàng nhường ngôi cho chồng là Trần Cảnh." },
    ],
  },
  {
    id: "tran",
    name: "Nhà Trần",
    period: "1225 – 1400",
    capital: "Thăng Long",
    founder: "Trần Thái Tông (Trần Cảnh)",
    summary: "Ba lần đại phá quân Nguyên Mông — đỉnh cao của hào khí Đông A.",
    events: [
      { year: "1258", text: "Lần thứ nhất đánh tan quân Mông Cổ." },
      { year: "1285", text: "Lần thứ hai phá Toa Đô, Thoát Hoan ở Hàm Tử, Chương Dương." },
      { year: "1288", text: "Trận Bạch Đằng huyền thoại — bắt sống Ô Mã Nhi." },
      { year: "1400", text: "Hồ Quý Ly cướp ngôi nhà Trần, lập nhà Hồ." },
    ],
  },
  {
    id: "ho",
    name: "Nhà Hồ",
    period: "1400 – 1407",
    capital: "Tây Đô (Thanh Hóa)",
    founder: "Hồ Quý Ly",
    summary: "Triều đại ngắn ngủi với nhiều cải cách táo bạo, kết thúc bởi xâm lược nhà Minh.",
    events: [
      { year: "1400", text: "Hồ Quý Ly đổi quốc hiệu thành Đại Ngu." },
      { year: "1400", text: "Phát hành tiền giấy đầu tiên — 'Thông bảo hội sao'." },
      { year: "1407", text: "Quân Minh xâm lược, bắt cha con Hồ Quý Ly." },
    ],
  },
  {
    id: "thuoc-minh",
    name: "Thuộc Minh & Hậu Trần",
    period: "1407 – 1427",
    capital: "—",
    founder: "—",
    summary: "20 năm Bắc thuộc lần thứ tư, nhà Hậu Trần và khởi nghĩa Lam Sơn liên tiếp nổ ra.",
    events: [
      { year: "1407", text: "Quân Minh đặt ách đô hộ, đốt sách, bắt thợ giỏi." },
      { year: "1418", text: "Lê Lợi phất cờ khởi nghĩa Lam Sơn." },
      { year: "1427", text: "Trận Chi Lăng — Xương Giang giết Liễu Thăng, đại phá viện binh Minh." },
    ],
  },
  {
    id: "hau-le",
    name: "Hậu Lê (Lê Sơ + Lê Trung Hưng)",
    period: "1428 – 1789",
    capital: "Thăng Long",
    founder: "Lê Thái Tổ (Lê Lợi)",
    summary: "Triều đại tồn tại lâu nhất sử Việt. Đỉnh cao thời Lê Thánh Tông — văn hiến cực thịnh.",
    events: [
      { year: "1428", text: "Lê Lợi lên ngôi; Nguyễn Trãi viết Bình Ngô đại cáo." },
      { year: "1483", text: "Lê Thánh Tông ban hành Quốc triều hình luật (Luật Hồng Đức)." },
      { year: "1527", text: "Mạc Đăng Dung cướp ngôi, lập nhà Mạc — bắt đầu Nam – Bắc triều." },
      { year: "1592", text: "Lê Trung Hưng đánh bại nhà Mạc, mở thời kỳ Lê – Trịnh." },
      { year: "1600s", text: "Trịnh – Nguyễn phân tranh, đất nước chia đôi tại sông Gianh." },
    ],
  },
  {
    id: "mac",
    name: "Nhà Mạc",
    period: "1527 – 1592",
    capital: "Thăng Long → Cao Bằng",
    founder: "Mạc Đăng Dung",
    summary: "Tồn tại song song với Lê Trung Hưng trong giai đoạn Nam – Bắc triều.",
    events: [
      { year: "1527", text: "Mạc Đăng Dung phế Lê Cung Hoàng, lập nhà Mạc." },
      { year: "1592", text: "Trịnh Tùng tiến quân ra Bắc, đánh bại nhà Mạc tại Thăng Long." },
      { year: "1677", text: "Tàn dư nhà Mạc tại Cao Bằng bị tiêu diệt hoàn toàn." },
    ],
  },
  {
    id: "tay-son",
    name: "Tây Sơn",
    period: "1778 – 1802",
    capital: "Phú Xuân",
    founder: "Nguyễn Nhạc — Nguyễn Huệ — Nguyễn Lữ",
    summary: "Phong trào nông dân chấm dứt chia cắt, đại phá Xiêm và Thanh, thống nhất sơn hà.",
    events: [
      { year: "1771", text: "Anh em Tây Sơn dấy binh tại Bình Định." },
      { year: "1785", text: "Đại phá 5 vạn quân Xiêm tại Rạch Gầm — Xoài Mút." },
      { year: "1789", text: "Quang Trung đại phá 29 vạn quân Thanh trong 5 ngày Tết Kỷ Dậu." },
      { year: "1792", text: "Quang Trung đột ngột băng hà, Tây Sơn suy yếu." },
      { year: "1802", text: "Nguyễn Ánh đánh bại Tây Sơn, lập nhà Nguyễn." },
    ],
  },
  {
    id: "nguyen",
    name: "Nhà Nguyễn",
    period: "1802 – 1945",
    capital: "Phú Xuân (Huế)",
    founder: "Gia Long (Nguyễn Phúc Ánh)",
    summary: "Triều đại phong kiến cuối cùng. Mở rộng lãnh thổ phía Nam rồi mất chủ quyền vào tay Pháp.",
    events: [
      { year: "1802", text: "Gia Long lên ngôi, đặt quốc hiệu Việt Nam." },
      { year: "1815", text: "Ban hành Hoàng Việt luật lệ (Luật Gia Long)." },
      { year: "1858", text: "Pháp nổ súng tấn công Đà Nẵng — mở đầu xâm lược." },
      { year: "1884", text: "Hiệp ước Patenôtre — Việt Nam thành thuộc địa Pháp." },
      { year: "1945", text: "Vua Bảo Đại thoái vị, kết thúc chế độ quân chủ Việt Nam." },
    ],
  },
  {
    id: "hien-dai",
    name: "Việt Nam Hiện Đại",
    period: "1945 – nay",
    capital: "Hà Nội",
    founder: "Hồ Chí Minh và toàn dân tộc",
    summary: "Khai sinh Việt Nam Dân chủ Cộng hòa, kháng chiến trường kỳ và xây dựng đất nước thống nhất.",
    events: [
      { year: "2/9/1945", text: "Bác Hồ đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa." },
      { year: "7/5/1954", text: "Chiến thắng Điện Biên Phủ — buộc Pháp ký Hiệp định Genève." },
      { year: "30/4/1975", text: "Giải phóng miền Nam, thống nhất đất nước." },
      { year: "1986", text: "Đại hội VI khởi xướng công cuộc Đổi Mới." },
      { year: "1995", text: "Việt Nam gia nhập ASEAN, bình thường hóa quan hệ Việt – Mỹ." },
    ],
  },
];
