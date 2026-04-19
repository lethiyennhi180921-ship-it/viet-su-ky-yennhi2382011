import haiBaTrung from "@/assets/heroes/hai-ba-trung.jpg";
import ngoQuyen from "@/assets/heroes/ngo-quyen.jpg";
import trieuThiTrinh from "@/assets/heroes/trieu-thi-trinh.jpg";
import tranHungDao from "@/assets/heroes/tran-hung-dao.jpg";
import lyThuongKiet from "@/assets/heroes/ly-thuong-kiet.jpg";
import dinhBoLinh from "@/assets/heroes/dinh-bo-linh.jpg";
import nguyenHue from "@/assets/heroes/nguyen-hue.jpg";
import leThanhTong from "@/assets/heroes/le-thanh-tong.jpg";
import hoChiMinh from "@/assets/heroes/ho-chi-minh.jpg";
import voNguyenGiap from "@/assets/heroes/vo-nguyen-giap.jpg";

export interface Hero {
  id: string;
  name: string;
  era: string;
  title: string;
  image: string;
  achievement: string;
  story: string;
  quote: string;
}

export const heroes: Hero[] = [
  {
    id: "hai-ba-trung",
    name: "Hai Bà Trưng",
    era: "40 – 43 SCN",
    title: "Nữ vương khởi nghĩa đầu tiên",
    image: haiBaTrung,
    achievement: "Đánh đuổi quân Đông Hán, lập nên nhà nước độc lập đầu tiên do nữ giới lãnh đạo, thu phục 65 thành trì.",
    story:
      "Năm 40 SCN, Trưng Trắc cùng em là Trưng Nhị phất cờ khởi nghĩa tại Hát Môn, dấy binh báo thù chồng và đền nợ nước. Cuộc khởi nghĩa lan rộng khắp Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố — quân Hán đại bại, Tô Định bỏ chạy. Hai Bà xưng vương, đóng đô ở Mê Linh, mở ra trang sử oai hùng.",
    quote: "“Một xin rửa sạch nước thù — Hai xin nối lại nghiệp xưa họ Hùng.”",
  },
  {
    id: "trieu-thi-trinh",
    name: "Triệu Thị Trinh",
    era: "225 – 248",
    title: "Bà Triệu — Nữ tướng cưỡi voi",
    image: trieuThiTrinh,
    achievement: "Lãnh đạo khởi nghĩa chống quân Ngô (Đông Ngô) ở Cửu Chân, làm rung chuyển ách đô hộ phương Bắc.",
    story:
      "Năm 248, Triệu Thị Trinh cùng anh là Triệu Quốc Đạt dấy binh tại núi Tùng (Thanh Hóa). Bà mặc giáp vàng, cưỡi voi trắng, xông pha trận mạc khiến quân Ngô khiếp đảm. Dù khởi nghĩa thất bại, ý chí bất khuất của Bà Triệu trở thành biểu tượng muôn đời.",
    quote: "“Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở Biển Đông…”",
  },
  {
    id: "ngo-quyen",
    name: "Ngô Quyền",
    era: "898 – 944",
    title: "Vua khai sinh nền độc lập",
    image: ngoQuyen,
    achievement: "Đại phá quân Nam Hán trên sông Bạch Đằng (938), kết thúc 1000 năm Bắc thuộc, xưng vương lập nhà Ngô.",
    story:
      "Năm 938, Ngô Quyền cho cắm cọc gỗ bịt sắt dưới lòng sông Bạch Đằng. Khi thủy triều lên, ông nhử thuyền địch vào; thủy triều rút, cọc đâm thủng thuyền giặc. Hoằng Tháo tử trận, quân Nam Hán đại bại. Đất nước bước vào kỷ nguyên độc lập tự chủ.",
    quote: "“Hoằng Tháo là đứa trẻ dại, đem quân từ xa đến… ta lấy quân ta đợi sẵn, có gì mà không thắng?”",
  },
  {
    id: "dinh-bo-linh",
    name: "Đinh Bộ Lĩnh",
    era: "924 – 979",
    title: "Vạn Thắng Vương — Thống nhất giang sơn",
    image: dinhBoLinh,
    achievement: "Dẹp loạn 12 sứ quân, thống nhất đất nước, lập nên nhà Đinh, đặt quốc hiệu Đại Cồ Việt (968).",
    story:
      "Từ cậu bé chăn trâu cờ lau tập trận ở Hoa Lư, Đinh Bộ Lĩnh trưởng thành thành thủ lĩnh kiệt xuất. Ông lần lượt thu phục 12 sứ quân, chấm dứt cảnh cát cứ, lên ngôi Hoàng đế, định đô tại Hoa Lư — khẳng định một quốc gia độc lập, ngang hàng phương Bắc.",
    quote: "“Đại Cồ Việt — nước lớn của người Việt!”",
  },
  {
    id: "ly-thuong-kiet",
    name: "Lý Thường Kiệt",
    era: "1019 – 1105",
    title: "Danh tướng nhà Lý",
    image: lyThuongKiet,
    achievement: "Chủ động đánh sang đất Tống (1075–1077), phá tan ý đồ xâm lược, giữ vững phòng tuyến sông Như Nguyệt.",
    story:
      "Trước nguy cơ nhà Tống xâm lược, Lý Thường Kiệt thực hiện chiến lược 'Tiên phát chế nhân' — đánh sang Ung Châu, Khâm Châu, Liêm Châu. Khi quân Tống phản công, ông lập phòng tuyến sông Như Nguyệt, đọc bài thơ thần khích lệ tướng sĩ, đại phá Quách Quỳ.",
    quote: "“Nam quốc sơn hà Nam đế cư — Tiệt nhiên định phận tại thiên thư.”",
  },
  {
    id: "tran-hung-dao",
    name: "Trần Hưng Đạo",
    era: "1228 – 1300",
    title: "Hưng Đạo Đại Vương",
    image: tranHungDao,
    achievement: "Ba lần đại phá quân Nguyên Mông (1258, 1285, 1288), tác giả 'Hịch tướng sĩ' và 'Binh thư yếu lược'.",
    story:
      "Trước đạo quân Mông Cổ hùng mạnh nhất thế giới, Trần Hưng Đạo dùng chiến thuật 'vườn không nhà trống', đoàn kết toàn dân. Trận Bạch Đằng 1288 với cọc gỗ tái hiện, ông bắt sống Ô Mã Nhi, đánh tan giấc mộng xâm lăng của đế quốc Nguyên Mông.",
    quote: "“Nếu bệ hạ muốn hàng, xin trước hãy chém đầu thần đi đã.”",
  },
  {
    id: "le-thanh-tong",
    name: "Lê Thánh Tông",
    era: "1442 – 1497",
    title: "Vị vua thịnh trị nhất nhà Hậu Lê",
    image: leThanhTong,
    achievement: "Ban hành Bộ luật Hồng Đức, mở mang bờ cõi, xây dựng nền hành chính quy củ, văn hiến cực thịnh.",
    story:
      "Lên ngôi năm 18 tuổi, Lê Thánh Tông cải tổ toàn diện đất nước: lập 13 đạo thừa tuyên, ban hành Quốc triều hình luật (Hồng Đức) tiến bộ, mở khoa thi đều đặn, lập Hội Tao Đàn. Nam tiến đến Quảng Nam, Đại Việt trở thành cường quốc khu vực.",
    quote: "“Một thước núi, một tấc sông của ta lẽ nào lại vứt bỏ?”",
  },
  {
    id: "nguyen-hue",
    name: "Nguyễn Huệ — Quang Trung",
    era: "1753 – 1792",
    title: "Hoàng đế bách chiến bách thắng",
    image: nguyenHue,
    achievement: "Đại phá 5 vạn quân Xiêm tại Rạch Gầm — Xoài Mút (1785), đánh tan 29 vạn quân Thanh trong 5 ngày Tết Kỷ Dậu (1789).",
    story:
      "Mùng 5 Tết Kỷ Dậu 1789, Quang Trung dẫn đại quân thần tốc ra Bắc, đánh tan quân Thanh ở Ngọc Hồi — Đống Đa, giải phóng Thăng Long, khiến Tôn Sĩ Nghị bỏ ấn tín chạy về nước. Một trong những chiến thắng nhanh và oanh liệt nhất lịch sử Việt Nam.",
    quote: "“Đánh cho để dài tóc — Đánh cho để đen răng — Đánh cho sử tri Nam quốc anh hùng chi hữu chủ.”",
  },
  {
    id: "ho-chi-minh",
    name: "Hồ Chí Minh",
    era: "1890 – 1969",
    title: "Cha già dân tộc",
    image: hoChiMinh,
    achievement: "Lãnh đạo Cách mạng Tháng Tám 1945, đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    story:
      "Bôn ba 30 năm tìm đường cứu nước, Người trở về lãnh đạo dân tộc làm nên Cách mạng Tháng Tám, đánh đuổi thực dân Pháp với chiến thắng Điện Biên Phủ chấn động địa cầu, đặt nền móng cho công cuộc giải phóng và thống nhất đất nước.",
    quote: "“Không có gì quý hơn độc lập, tự do.”",
  },
  {
    id: "vo-nguyen-giap",
    name: "Võ Nguyên Giáp",
    era: "1911 – 2013",
    title: "Đại tướng huyền thoại",
    image: voNguyenGiap,
    achievement: "Tổng chỉ huy chiến dịch Điện Biên Phủ 1954 và chiến dịch Hồ Chí Minh 1975 — hai chiến thắng làm rung chuyển thế giới.",
    story:
      "Từ thầy giáo dạy sử trở thành thiên tài quân sự, Đại tướng Võ Nguyên Giáp lãnh đạo Quân đội Nhân dân Việt Nam đánh bại hai đế quốc lớn. Quyết định 'kéo pháo ra' rồi chuyển từ 'đánh nhanh thắng nhanh' sang 'đánh chắc tiến chắc' tại Điện Biên Phủ là kiệt tác quân sự thế kỷ XX.",
    quote: "“Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa.”",
  },
];
