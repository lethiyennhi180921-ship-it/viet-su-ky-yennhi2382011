const poems = [
  {
    title: "Nam Quốc Sơn Hà",
    author: "Tương truyền — Lý Thường Kiệt (1077)",
    body: `Nam quốc sơn hà Nam đế cư,
Tiệt nhiên định phận tại thiên thư.
Như hà nghịch lỗ lai xâm phạm,
Nhữ đẳng hành khan thủ bại hư.`,
    translation:
      "Sông núi nước Nam vua Nam ở — Rành rành định phận tại sách trời. Cớ sao lũ giặc sang xâm phạm — Chúng bay sẽ bị đánh tơi bời.",
  },
  {
    title: "Hịch Tướng Sĩ (trích)",
    author: "Trần Hưng Đạo (1284)",
    body: `Ta thường tới bữa quên ăn,
nửa đêm vỗ gối, ruột đau như cắt,
nước mắt đầm đìa;
chỉ giận chưa thể xả thịt, lột da,
nuốt gan, uống máu quân thù.
Dẫu cho trăm thân ta phơi ngoài nội cỏ,
nghìn xác ta gói trong da ngựa,
ta cũng cam lòng.`,
    translation: "Tinh thần quyết tử bảo vệ non sông trước họa Nguyên Mông.",
  },
  {
    title: "Bình Ngô Đại Cáo (mở đầu)",
    author: "Nguyễn Trãi (1428)",
    body: `Như nước Đại Việt ta từ trước,
Vốn xưng nền văn hiến đã lâu.
Núi sông bờ cõi đã chia,
Phong tục Bắc Nam cũng khác.
Từ Triệu, Đinh, Lý, Trần bao đời gây nền độc lập,
Cùng Hán, Đường, Tống, Nguyên mỗi bên xưng đế một phương.`,
    translation: "Bản tuyên ngôn độc lập thứ hai — khẳng định quốc thể Đại Việt.",
  },
];

const Poetry = () => {
  return (
    <section id="poetry" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-display">Văn chương sử thi</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">Sử Qua Thơ</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        <div className="space-y-10">
          {poems.map((p, i) => (
            <article
              key={p.title}
              className="paper-scroll rounded-lg p-8 md:p-12 animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms`, opacity: 0 }}
            >
              <h3 className="font-display text-3xl md:text-4xl text-primary text-center mb-1">{p.title}</h3>
              <p className="text-center font-display italic text-ink/70 mb-6">{p.author}</p>
              <pre className="font-display whitespace-pre-wrap text-center text-lg md:text-xl leading-relaxed text-ink">
{p.body}
              </pre>
              <div className="mt-6 pt-4 border-t border-ink/20 text-center text-ink/80 italic">
                {p.translation}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Poetry;
