export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export const quizQuestions: QuizQuestion[] = [
  { q: "Theo truyền thuyết, ai là tổ tiên dựng nước Văn Lang?", options: ["An Dương Vương", "Các Vua Hùng", "Triệu Đà", "Lý Bí"], answer: 1, explain: "18 đời Hùng Vương dựng nước Văn Lang, đóng đô Phong Châu (Phú Thọ)." },
  { q: "Ai là người đánh tan quân Nam Hán trên sông Bạch Đằng năm 938?", options: ["Lý Thường Kiệt", "Ngô Quyền", "Trần Hưng Đạo", "Lê Lợi"], answer: 1, explain: "Ngô Quyền dùng kế cọc gỗ Bạch Đằng, kết thúc 1000 năm Bắc thuộc." },
  { q: "Hai Bà Trưng khởi nghĩa năm nào?", options: ["39 SCN", "40 SCN", "43 SCN", "248"], answer: 1, explain: "Năm 40 SCN, Hai Bà phất cờ khởi nghĩa tại Hát Môn." },
  { q: "Quốc hiệu do Đinh Bộ Lĩnh đặt là gì?", options: ["Văn Lang", "Đại Việt", "Đại Cồ Việt", "Đại Nam"], answer: 2, explain: "Đại Cồ Việt — quốc gia trung ương tập quyền đầu tiên (968)." },
  { q: "Tác giả bài 'Nam quốc sơn hà' tương truyền là?", options: ["Trần Hưng Đạo", "Lý Thường Kiệt", "Nguyễn Trãi", "Lê Văn Hưu"], answer: 1, explain: "Bài thơ thần được Lý Thường Kiệt cho đọc tại phòng tuyến Như Nguyệt." },
  { q: "Trần Hưng Đạo đại phá quân Nguyên Mông lần cuối tại đâu?", options: ["Sông Hồng", "Sông Bạch Đằng", "Chương Dương", "Hàm Tử"], answer: 1, explain: "Trận Bạch Đằng 1288 — bắt sống Ô Mã Nhi." },
  { q: "Khởi nghĩa Lam Sơn do ai lãnh đạo?", options: ["Lê Lợi", "Nguyễn Trãi", "Lê Lai", "Trần Nguyên Hãn"], answer: 0, explain: "Lê Lợi dấy nghĩa, Nguyễn Trãi dâng Bình Ngô sách phụ tá." },
  { q: "Quang Trung đại phá quân Thanh vào dịp Tết năm nào?", options: ["Mậu Thân 1788", "Kỷ Dậu 1789", "Canh Tuất 1790", "Tân Hợi 1791"], answer: 1, explain: "Mùng 5 Tết Kỷ Dậu 1789 — chiến thắng Ngọc Hồi — Đống Đa." },
  { q: "Ai dời đô từ Hoa Lư về Thăng Long năm 1010?", options: ["Lý Thái Tổ", "Lý Thái Tông", "Lý Thánh Tông", "Lý Nhân Tông"], answer: 0, explain: "Lý Thái Tổ (Lý Công Uẩn) dời đô và viết Chiếu dời đô bất hủ." },
  { q: "Tác phẩm 'Hịch tướng sĩ' do ai soạn?", options: ["Nguyễn Trãi", "Trần Hưng Đạo", "Lý Thường Kiệt", "Lê Văn Hưu"], answer: 1, explain: "Trần Hưng Đạo soạn để kêu gọi tướng sĩ chống Nguyên Mông." },
  { q: "Chiến dịch Việt Bắc Thu - Đông diễn ra năm nào?", options: ["1946", "1947", "1950", "1954"], answer: 1, explain: "Thu - Đông 1947 — đánh bại âm mưu 'đánh nhanh thắng nhanh' của Pháp." },
  { q: "Chiến dịch Biên Giới Thu - Đông 1950 mở màn bằng trận đánh nào?", options: ["Đông Khê", "Thất Khê", "Cao Bằng", "Điện Biên"], answer: 0, explain: "Trận Đông Khê (16/9/1950) — 'đánh điểm diệt viện'." },
  { q: "Chiến thắng Điện Biên Phủ diễn ra năm nào?", options: ["1953", "1954", "1955", "1956"], answer: 1, explain: "7/5/1954 — 'lừng lẫy năm châu, chấn động địa cầu'." },
  { q: "Hiệp định Giơ-ne-vơ được ký vào ngày nào?", options: ["7/5/1954", "20/7/1954", "2/9/1945", "27/1/1973"], answer: 1, explain: "20/7/1954 — chia đôi đất nước tại vĩ tuyến 17." },
  { q: "Phong trào Đồng Khởi (1959-1960) khởi phát mạnh nhất tại tỉnh nào?", options: ["Bến Tre", "Long An", "Cà Mau", "Tây Ninh"], answer: 0, explain: "Bến Tre — quê hương 'Đội quân tóc dài' của Nguyễn Thị Định." },
  { q: "Chiến thắng Ấp Bắc (1963) đánh bại chiến lược nào của Mỹ?", options: ["Chiến tranh đặc biệt", "Chiến tranh cục bộ", "Việt Nam hóa", "Chiến tranh đơn phương"], answer: 0, explain: "Phá sản 'trực thăng vận', 'thiết xa vận' của Chiến tranh đặc biệt." },
  { q: "Tổng tiến công và nổi dậy Mậu Thân nổ ra dịp nào?", options: ["Quốc khánh 1968", "Giao thừa Tết Mậu Thân 1968", "Hè 1968", "Thu 1968"], answer: 1, explain: "Đêm 30 rạng sáng 31/1/1968 — gây chấn động Mỹ và thế giới." },
  { q: "'Điện Biên Phủ trên không' (12/1972) bắn rơi bao nhiêu B-52?", options: ["24", "34", "44", "54"], answer: 1, explain: "12 ngày đêm — ta bắn rơi 34 'siêu pháo đài bay' B-52." },
  { q: "Hiệp định Paris được ký ngày nào?", options: ["20/7/1954", "27/1/1973", "30/4/1975", "2/9/1945"], answer: 1, explain: "27/1/1973 — Mỹ rút quân, công nhận chủ quyền Việt Nam." },
  { q: "Chiến dịch Hồ Chí Minh kết thúc vào ngày nào?", options: ["26/4/1975", "30/4/1975", "1/5/1975", "7/5/1975"], answer: 1, explain: "11h30 ngày 30/4/1975 — non sông liền một dải." },
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
