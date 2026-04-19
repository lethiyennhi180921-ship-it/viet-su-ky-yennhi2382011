export interface TimelineEvent {
  year: string;
  title: string;
  who: string;
  what: string;
  how: string;
  outcome: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "40 SCN",
    title: "Khởi nghĩa Hai Bà Trưng",
    who: "Trưng Trắc và Trưng Nhị",
    what: "Phất cờ khởi nghĩa chống ách đô hộ nhà Đông Hán tại Hát Môn.",
    how: "Hai Bà tập hợp hào kiệt khắp Giao Chỉ, Cửu Chân, Nhật Nam, đánh chiếm 65 thành trì, Thái thú Tô Định bỏ chạy về nước.",
    outcome: "Trưng Trắc xưng vương, đóng đô tại Mê Linh — nền độc lập ngắn ngủi nhưng oai hùng (40–43).",
  },
  {
    year: "248",
    title: "Bà Triệu khởi binh",
    who: "Triệu Thị Trinh",
    what: "Khởi nghĩa chống quân Đông Ngô tại vùng núi Tùng, Thanh Hóa.",
    how: "Bà cưỡi voi, mặc giáp vàng, dẫn nghĩa quân đánh hơn 30 trận, làm rung chuyển ách đô hộ phương Bắc.",
    outcome: "Khởi nghĩa thất bại nhưng để lại biểu tượng bất khuất muôn đời của phụ nữ Việt.",
  },
  {
    year: "938",
    title: "Đại thắng Bạch Đằng",
    who: "Ngô Quyền",
    what: "Đánh tan quân Nam Hán trên sông Bạch Đằng, chấm dứt 1000 năm Bắc thuộc.",
    how: "Cắm cọc gỗ bịt sắt dưới lòng sông, lợi dụng thủy triều nhử và tiêu diệt thuyền chiến địch.",
    outcome: "Hoằng Tháo tử trận. Năm 939 Ngô Quyền xưng vương, mở ra kỷ nguyên độc lập tự chủ lâu dài.",
  },
  {
    year: "968",
    title: "Đinh Bộ Lĩnh thống nhất",
    who: "Đinh Bộ Lĩnh",
    what: "Dẹp loạn 12 sứ quân, lập nên nhà Đinh, đặt quốc hiệu Đại Cồ Việt.",
    how: "Bằng tài thao lược và uy tín, ông lần lượt thu phục các sứ quân, định đô Hoa Lư.",
    outcome: "Đại Cồ Việt — quốc gia phong kiến trung ương tập quyền đầu tiên của người Việt.",
  },
  {
    year: "1077",
    title: "Phá Tống trên sông Như Nguyệt",
    who: "Lý Thường Kiệt",
    what: "Chặn đứng đại quân Tống xâm lược tại phòng tuyến sông Như Nguyệt.",
    how: "'Tiên phát chế nhân' đánh phủ đầu Ung Châu, sau đó lập phòng tuyến, đọc bài thơ thần khích lệ ba quân.",
    outcome: "Quách Quỳ phải rút quân, nhà Tống vĩnh viễn từ bỏ ý đồ thôn tính Đại Việt.",
  },
  {
    year: "1288",
    title: "Bạch Đằng lần thứ ba",
    who: "Trần Hưng Đạo",
    what: "Lần thứ ba đại phá quân Nguyên Mông trên sông Bạch Đằng.",
    how: "Tái hiện kế cọc gỗ Bạch Đằng, kết hợp thủy bộ liên hoàn, bắt sống tướng giặc Ô Mã Nhi.",
    outcome: "Đế quốc Nguyên Mông vĩnh viễn từ bỏ giấc mộng xâm lăng Đại Việt.",
  },
  {
    year: "1428",
    title: "Khởi nghĩa Lam Sơn thắng lợi",
    who: "Lê Lợi và Nguyễn Trãi",
    what: "Kết thúc 10 năm kháng chiến chống quân Minh, lập nên nhà Hậu Lê.",
    how: "Từ núi rừng Lam Sơn, nghĩa quân lớn mạnh, vây thành Đông Quan, buộc Vương Thông xin hàng.",
    outcome: "Bình Ngô đại cáo vang vọng — 'Như nước Đại Việt ta từ trước, vốn xưng nền văn hiến đã lâu'.",
  },
  {
    year: "1789",
    title: "Đại phá quân Thanh",
    who: "Quang Trung — Nguyễn Huệ",
    what: "Đánh tan 29 vạn quân Thanh trong 5 ngày Tết Kỷ Dậu.",
    how: "Hành quân thần tốc từ Phú Xuân ra Bắc, tổng tấn công Ngọc Hồi — Đống Đa rạng sáng mùng 5 Tết.",
    outcome: "Tôn Sĩ Nghị bỏ ấn tín tháo chạy. Thăng Long giải phóng — chiến thắng oanh liệt nhất sử Việt.",
  },
  {
    year: "1945",
    title: "Cách mạng Tháng Tám",
    who: "Hồ Chí Minh và toàn dân tộc",
    what: "Tổng khởi nghĩa giành chính quyền trên cả nước.",
    how: "Chớp thời cơ Nhật đầu hàng Đồng minh, Việt Minh lãnh đạo nhân dân nổi dậy ở khắp ba miền.",
    outcome: "2/9/1945 — Bác Hồ đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
  },
  {
    year: "1954",
    title: "Chiến thắng Điện Biên Phủ",
    who: "Đại tướng Võ Nguyên Giáp",
    what: "Tiêu diệt tập đoàn cứ điểm Điện Biên Phủ của thực dân Pháp.",
    how: "Chuyển phương châm 'đánh nhanh thắng nhanh' sang 'đánh chắc tiến chắc'; kéo pháo vào trận địa, đào hào vây lấn 56 ngày đêm.",
    outcome: "7/5/1954 — Tướng De Castries đầu hàng. 'Lừng lẫy năm châu, chấn động địa cầu'.",
  },
  {
    year: "1975",
    title: "Đại thắng mùa Xuân",
    who: "Quân và dân Việt Nam",
    what: "Chiến dịch Hồ Chí Minh giải phóng miền Nam, thống nhất đất nước.",
    how: "Từ Tây Nguyên — Huế — Đà Nẵng tiến công thần tốc, hợp vây Sài Gòn từ 5 hướng.",
    outcome: "11h30 ngày 30/4/1975 — xe tăng tiến vào Dinh Độc Lập. Non sông liền một dải.",
  },
];
