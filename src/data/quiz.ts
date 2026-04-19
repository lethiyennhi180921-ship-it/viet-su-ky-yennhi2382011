export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export const quizQuestions: QuizQuestion[] = [
  { q: "Ai là người đánh tan quân Nam Hán trên sông Bạch Đằng năm 938?", options: ["Lý Thường Kiệt", "Ngô Quyền", "Trần Hưng Đạo", "Lê Lợi"], answer: 1, explain: "Ngô Quyền dùng kế cọc gỗ Bạch Đằng, kết thúc 1000 năm Bắc thuộc." },
  { q: "Hai Bà Trưng khởi nghĩa năm nào?", options: ["39 SCN", "40 SCN", "43 SCN", "248"], answer: 1, explain: "Năm 40 SCN, Hai Bà phất cờ khởi nghĩa tại Hát Môn." },
  { q: "Quốc hiệu do Đinh Bộ Lĩnh đặt là gì?", options: ["Văn Lang", "Đại Việt", "Đại Cồ Việt", "Đại Nam"], answer: 2, explain: "Đại Cồ Việt — quốc gia trung ương tập quyền đầu tiên của người Việt (968)." },
  { q: "Tác giả bài 'Nam quốc sơn hà' tương truyền là?", options: ["Trần Hưng Đạo", "Lý Thường Kiệt", "Nguyễn Trãi", "Lê Văn Hưu"], answer: 1, explain: "Bài thơ thần được Lý Thường Kiệt cho đọc tại phòng tuyến sông Như Nguyệt." },
  { q: "Trần Hưng Đạo đại phá quân Nguyên Mông lần cuối tại đâu?", options: ["Sông Hồng", "Sông Bạch Đằng", "Chương Dương", "Hàm Tử"], answer: 1, explain: "Trận Bạch Đằng 1288 — bắt sống Ô Mã Nhi." },
  { q: "Khởi nghĩa Lam Sơn do ai lãnh đạo?", options: ["Lê Lợi", "Nguyễn Trãi", "Lê Lai", "Trần Nguyên Hãn"], answer: 0, explain: "Lê Lợi dấy nghĩa, Nguyễn Trãi dâng Bình Ngô sách phụ tá." },
  { q: "Bộ luật Hồng Đức được ban hành dưới triều vua nào?", options: ["Lê Thái Tổ", "Lê Nhân Tông", "Lê Thánh Tông", "Lê Hiến Tông"], answer: 2, explain: "Lê Thánh Tông ban hành Quốc triều hình luật (Hồng Đức), tiến bộ bậc nhất Đông Á đương thời." },
  { q: "Quang Trung đại phá quân Thanh vào dịp Tết năm nào?", options: ["Mậu Thân 1788", "Kỷ Dậu 1789", "Canh Tuất 1790", "Tân Hợi 1791"], answer: 1, explain: "Mùng 5 Tết Kỷ Dậu 1789 — chiến thắng Ngọc Hồi — Đống Đa." },
  { q: "Bà Triệu khởi nghĩa chống ách đô hộ của triều đại nào?", options: ["Đông Hán", "Đông Ngô", "Lương", "Đường"], answer: 1, explain: "Năm 248, Bà Triệu khởi nghĩa chống quân Đông Ngô." },
  { q: "Câu 'Đầu thần chưa rơi xuống đất, xin bệ hạ đừng lo' là của ai?", options: ["Trần Thủ Độ", "Trần Hưng Đạo", "Trần Quang Khải", "Trần Nhật Duật"], answer: 0, explain: "Trần Thủ Độ — câu nói thể hiện khí phách trước họa Mông Cổ." },
  { q: "Kinh đô của nhà Đinh đặt tại đâu?", options: ["Cổ Loa", "Hoa Lư", "Thăng Long", "Phú Xuân"], answer: 1, explain: "Hoa Lư (Ninh Bình) — kinh đô của Đinh, Tiền Lê và đầu nhà Lý." },
  { q: "Ai dời đô từ Hoa Lư về Thăng Long năm 1010?", options: ["Lý Thái Tổ", "Lý Thái Tông", "Lý Thánh Tông", "Lý Nhân Tông"], answer: 0, explain: "Lý Thái Tổ (Lý Công Uẩn) dời đô và viết Chiếu dời đô bất hủ." },
  { q: "Tác phẩm 'Hịch tướng sĩ' do ai soạn?", options: ["Nguyễn Trãi", "Trần Hưng Đạo", "Lý Thường Kiệt", "Lê Văn Hưu"], answer: 1, explain: "Trần Hưng Đạo soạn để kêu gọi tướng sĩ chống Nguyên Mông." },
  { q: "Chiến thắng Điện Biên Phủ diễn ra năm nào?", options: ["1953", "1954", "1955", "1956"], answer: 1, explain: "7/5/1954 — chiến thắng 'lừng lẫy năm châu, chấn động địa cầu'." },
  { q: "Tổng chỉ huy chiến dịch Điện Biên Phủ là ai?", options: ["Văn Tiến Dũng", "Võ Nguyên Giáp", "Hoàng Văn Thái", "Nguyễn Chí Thanh"], answer: 1, explain: "Đại tướng Võ Nguyên Giáp — Tổng tư lệnh chiến dịch." },
  { q: "Nước Việt Nam Dân chủ Cộng hòa ra đời ngày nào?", options: ["19/8/1945", "2/9/1945", "23/9/1945", "6/1/1946"], answer: 1, explain: "2/9/1945 tại Quảng trường Ba Đình, Bác Hồ đọc Tuyên ngôn Độc lập." },
  { q: "Triều đại nào tồn tại lâu nhất trong lịch sử Việt Nam?", options: ["Lý (216 năm)", "Trần (175 năm)", "Hậu Lê (360 năm)", "Nguyễn (143 năm)"], answer: 2, explain: "Hậu Lê (gồm Lê sơ và Lê trung hưng) tồn tại từ 1428 đến 1789." },
  { q: "Ai là vị vua đầu tiên của nhà Nguyễn?", options: ["Nguyễn Hoàng", "Nguyễn Phúc Khoát", "Gia Long", "Minh Mạng"], answer: 2, explain: "Gia Long — Nguyễn Ánh lên ngôi năm 1802, lập nhà Nguyễn." },
  { q: "Chiến dịch Hồ Chí Minh kết thúc vào ngày nào?", options: ["26/4/1975", "30/4/1975", "1/5/1975", "7/5/1975"], answer: 1, explain: "11h30 ngày 30/4/1975 — non sông liền một dải." },
  { q: "Bài thơ 'Nam quốc sơn hà' khẳng định điều gì?", options: ["Tinh thần đoàn kết", "Chủ quyền lãnh thổ", "Lòng yêu nước", "Sức mạnh quân sự"], answer: 1, explain: "Khẳng định chủ quyền: 'Nam quốc sơn hà Nam đế cư'." },
];

export const ranks = [
  { min: 0, name: "Sĩ Tử", desc: "Mới bước vào con đường đèn sách." },
  { min: 6, name: "Tú Tài", desc: "Đã thông qua khoa thi Hương." },
  { min: 11, name: "Cử Nhân", desc: "Tài học vượt trội, được tiến cử." },
  { min: 15, name: "Tiến Sĩ", desc: "Đỗ đại khoa, ghi danh bảng vàng." },
  { min: 18, name: "Bảng Nhãn", desc: "Hạng nhì kỳ thi Đình." },
  { min: 20, name: "Trạng Nguyên", desc: "Đệ nhất giáp đệ nhất danh — vinh quang tột đỉnh!" },
];

export const getRank = (score: number) => {
  return [...ranks].reverse().find((r) => score >= r.min) ?? ranks[0];
};
