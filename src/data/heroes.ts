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
  // Mở rộng tiểu sử
  personal: string;       // Thông tin cá nhân & gia đình
  context: string;        // Bối cảnh thời đại
  career: string;         // Sự nghiệp & sự kiện chính
  character: string;      // Tính cách & phẩm chất
  legacy: string;         // Tác động & di sản
  relations: string;      // Mối quan hệ với nhân vật cùng thời
}

export const heroes: Hero[] = [
  {
    id: "hai-ba-trung",
    name: "Hai Bà Trưng",
    era: "14 – 43 SCN",
    title: "Nữ vương khởi nghĩa đầu tiên",
    image: haiBaTrung,
    achievement: "Đánh đuổi quân Đông Hán, lập nên nhà nước độc lập đầu tiên do nữ giới lãnh đạo, thu phục 65 thành trì.",
    story:
      "Năm 40 SCN, Trưng Trắc cùng em là Trưng Nhị phất cờ khởi nghĩa tại Hát Môn, dấy binh báo thù chồng và đền nợ nước. Cuộc khởi nghĩa lan rộng khắp Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố — quân Hán đại bại, Tô Định bỏ chạy. Hai Bà xưng vương, đóng đô ở Mê Linh.",
    quote: "“Một xin rửa sạch nước thù — Hai xin nối lại nghiệp xưa họ Hùng.”",
    personal:
      "Trưng Trắc (chị) và Trưng Nhị (em) sinh khoảng năm 14 SCN tại làng Cổ Lai (nay là xã Mê Linh, huyện Mê Linh, Hà Nội). Hai Bà là con gái Lạc tướng huyện Mê Linh, dòng dõi Hùng Vương, mẹ là bà Man Thiện — một phụ nữ trí dũng song toàn, đích thân dạy hai con văn võ và lòng yêu nước. Trưng Trắc kết hôn với Thi Sách — Lạc tướng huyện Chu Diên (Hà Nam ngày nay).",
    context:
      "Sau hơn 200 năm Bắc thuộc, nhà Đông Hán cử Tô Định sang làm Thái thú Giao Chỉ (34 SCN). Hắn áp đặt sưu thuế cực kỳ hà khắc, cướp ruộng đất Lạc tướng, đồng hóa văn hóa, cấm tục xăm mình - búi tóc của người Việt. Tầng lớp Lạc tướng - Lạc hầu (quý tộc bản địa) bị tước bỏ quyền lực, dân chúng oán thán. Khi Tô Định giết Thi Sách để răn đe các Lạc tướng, ngọn lửa căm hờn đã cháy rực — Hai Bà nắm thời cơ chín muồi để khởi nghĩa.",
    career:
      "• Mùa xuân năm 40 SCN: dựng cờ khởi nghĩa tại cửa sông Hát (Hát Môn), đọc lời thề bốn câu nổi tiếng.\n• Chỉ trong vài tháng: thu phục 65 thành trì khắp Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố.\n• Tô Định cắt tóc cạo râu trốn về Nam Hải.\n• Năm 40: Trưng Trắc lên ngôi vương, đóng đô tại Mê Linh, miễn thuế 2 năm cho dân, khôi phục tục lệ cổ truyền Lạc Việt.\n• Năm 42: nhà Hán cử lão tướng Mã Viện đem 2 vạn quân sang đàn áp.\n• Năm 43: thất thế tại Cấm Khê, Hai Bà gieo mình xuống sông Hát tuẫn tiết.",
    character:
      "Trí dũng song toàn, khí phách hiên ngang, giàu lòng nhân ái. Trưng Trắc điềm đạm, có tài thu phục nhân tâm; Trưng Nhị nóng tính, dũng mãnh trên trận tiền — hai chị em bổ sung hoàn hảo cho nhau. Lời thề 'Một xin rửa sạch nước thù...' cho thấy Hai Bà coi nợ nước trước nợ nhà — một phẩm chất hiếm có. Tương truyền khi xưng vương, Hai Bà từ chối mặc đại tang chồng để khỏi làm nhụt khí ba quân — đặt đại nghĩa lên trên tình riêng.",
    legacy:
      "CÔNG: Là cuộc khởi nghĩa vũ trang đầu tiên thành công của dân Việt sau 200 năm Bắc thuộc, khẳng định ý chí độc lập không bao giờ tắt. Lập nên nhà nước độc lập do nữ giới lãnh đạo — chuyện hi hữu trong lịch sử thế giới cổ đại. Tạo nên hình mẫu 'nữ anh hùng dân tộc' đặc trưng Việt Nam.\nDI SẢN: Hai Bà được thờ tại đền Hát Môn, đền Đồng Nhân (Hà Nội), đền Hạ Lôi (Mê Linh)... Ngày 6/2 âm lịch hàng năm là lễ giỗ Hai Bà. Câu nói 'Giặc đến nhà, đàn bà cũng đánh' bắt nguồn từ đây, trở thành tinh thần bất diệt của phụ nữ Việt.\nBÀI HỌC: Sức mạnh đoàn kết toàn dân, vai trò của phụ nữ, tinh thần dám đứng lên dù biết hiểm nguy.",
    relations:
      "• THI SÁCH (chồng Trưng Trắc): Lạc tướng Chu Diên, người cùng chí hướng — cái chết của ông là ngọn lửa châm ngòi khởi nghĩa.\n• MAN THIỆN (mẹ): trực tiếp dạy võ nghệ, binh thư cho hai con; chính bà cũng tham gia bàn mưu khởi nghĩa.\n• LÊ CHÂN, THÁNH THIÊN, BÁT NÀN, THIỀU HOA, NÀNG TÍA: các nữ tướng tâm phúc, đều là phụ nữ kiệt xuất khắp các vùng — tạo nên đội quân nữ tướng có một không hai.\n• TÔ ĐỊNH: kẻ thù trực tiếp, Thái thú Đông Hán tàn bạo.\n• MÃ VIỆN: lão tướng nhà Hán dày dạn kinh nghiệm — đối thủ cuối cùng đánh bại Hai Bà.",
  },
  {
    id: "trieu-thi-trinh",
    name: "Triệu Thị Trinh",
    era: "226 – 248",
    title: "Bà Triệu — Nữ tướng cưỡi voi",
    image: trieuThiTrinh,
    achievement: "Lãnh đạo khởi nghĩa chống quân Đông Ngô ở Cửu Chân (248), làm rung chuyển ách đô hộ phương Bắc.",
    story:
      "Năm 248, Triệu Thị Trinh cùng anh là Triệu Quốc Đạt dấy binh tại núi Tùng (Thanh Hóa). Bà mặc giáp vàng, cưỡi voi trắng một ngà, xông pha trận mạc khiến quân Ngô khiếp đảm.",
    quote: "“Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở Biển Đông…”",
    personal:
      "Sinh năm 226 tại miền núi Quan Yên, quận Cửu Chân (nay là làng Quan Yên, xã Định Tiến, huyện Yên Định, Thanh Hóa). Mồ côi cha mẹ từ nhỏ, bà sống cùng anh ruột là Triệu Quốc Đạt — một hào trưởng có thế lực ở Cửu Chân. Bà cao lớn khác thường (sử chép cao 9 thước, vú dài 3 thước phải buộc ra sau lưng khi ra trận), tính tình mạnh mẽ, không chịu lấy chồng dù được nhiều người cầu hôn — chí hướng đặt vào việc lớn cứu nước.",
    context:
      "Sau khởi nghĩa Hai Bà Trưng thất bại (43 SCN), nhà Hán rồi nhà Đông Ngô (Tam Quốc) tiếp tục đô hộ Giao Châu hơn 200 năm. Đông Ngô vơ vét tài nguyên (ngọc trai, voi, ngà voi, sừng tê) gửi về Kiến Nghiệp, áp thuế khóa nặng nề. Lục Dận làm Thứ sử Giao Châu nổi tiếng tham tàn. Đặc biệt vùng Cửu Chân (Thanh Hóa) — nơi rừng núi hiểm trở — là điểm nóng của các cuộc nổi dậy.",
    career:
      "• Tuổi 19 lên núi Nưa (Tùng Sơn) tập hợp nghĩa sĩ, tích trữ lương thảo, rèn binh khí.\n• Năm 248 (22 tuổi): cùng anh Triệu Quốc Đạt phát động khởi nghĩa tại Cửu Chân.\n• Anh trai mất sớm trong trận, bà được tôn làm chủ tướng — xưng 'Nhụy Kiều tướng quân'.\n• Đánh hơn 30 trận lớn nhỏ trong 6 tháng, làm chủ phần lớn Cửu Chân, uy hiếp Giao Chỉ.\n• Vua Ngô sai Lục Dận đem 8.000 quân tinh nhuệ kết hợp kế ly gián, mua chuộc.\n• Thất thế tại núi Tùng, bà tuẫn tiết khi mới 23 tuổi.",
    character:
      "Khí phách hơn người, chí lớn vượt khuôn khổ thời đại. Khi anh trai khuyên lấy chồng, bà đáp câu nói bất hủ về cưỡi gió đạp sóng. Hình ảnh nữ tướng mặc giáp vàng, cưỡi voi trắng một ngà, búi tóc đuôi gà — vừa uy nghi vừa thuần Việt — trở thành biểu tượng vĩnh hằng. Tương truyền bà có sức địch trăm người, voi của bà cũng tinh khôn, biết quỳ đón chủ.",
    legacy:
      "CÔNG: Tiếp nối ngọn lửa Hai Bà Trưng, khẳng định khát vọng tự do của dân Việt không bao giờ tắt. Câu nói về 'cưỡi gió đạp sóng' trở thành tuyên ngôn bất hủ về khí phách Việt Nam.\nHẠN CHẾ: Cuộc khởi nghĩa thất bại do lực lượng quá chênh lệch và thiếu liên kết với các vùng khác, song điều đó không làm phai mờ ý nghĩa.\nDI SẢN: Đền Bà Triệu tại núi Gai, xã Triệu Lộc, huyện Hậu Lộc, Thanh Hóa được xếp hạng Di tích Quốc gia đặc biệt. Tên bà được đặt cho nhiều đường phố lớn ở Hà Nội, TP.HCM. Lễ hội Bà Triệu (21-24/2 âm lịch) là di sản văn hóa phi vật thể.",
    relations:
      "• TRIỆU QUỐC ĐẠT (anh ruột): hào trưởng Cửu Chân, người cùng phát động khởi nghĩa, mất sớm trong trận đầu.\n• LỤC DẬN: Thứ sử Giao Châu nhà Đông Ngô — đối thủ trực tiếp, nổi tiếng dùng mưu hơn lực.\n• HAI BÀ TRƯNG (200 năm trước): tấm gương lớn mà Bà Triệu noi theo. Cùng Hai Bà Trưng tạo nên 'bộ ba nữ anh hùng' mở đầu lịch sử dân tộc.\n• Các thủ lĩnh nghĩa quân địa phương Cửu Chân — đa phần là dân miền núi, thợ săn, nông dân nghèo.",
  },
  {
    id: "ngo-quyen",
    name: "Ngô Quyền",
    era: "898 – 944",
    title: "Vua khai sinh nền độc lập",
    image: ngoQuyen,
    achievement: "Đại phá quân Nam Hán trên sông Bạch Đằng (938), kết thúc 1000 năm Bắc thuộc, xưng vương lập nhà Ngô.",
    story:
      "Năm 938, Ngô Quyền cho cắm cọc gỗ bịt sắt dưới lòng sông Bạch Đằng. Khi thủy triều lên, ông nhử thuyền địch vào; thủy triều rút, cọc đâm thủng thuyền giặc. Hoằng Tháo tử trận, quân Nam Hán đại bại.",
    quote: "“Hoằng Tháo là đứa trẻ dại, đem quân từ xa đến… ta lấy quân ta đợi sẵn, có gì mà không thắng?”",
    personal:
      "Sinh năm 898 tại Đường Lâm (nay là xã Đường Lâm, thị xã Sơn Tây, Hà Nội) — cùng quê với Bố Cái Đại Vương Phùng Hưng. Cha là Ngô Mân, châu mục Đường Lâm — một hào trưởng có thế lực. Ngô Quyền từ nhỏ đã khôi ngô tuấn tú, mắt sáng như chớp, đi nhanh như gió, sức cử được đỉnh đồng. Lớn lên trở thành nha tướng (sau là con rể) của Tiết độ sứ Dương Đình Nghệ — kết hôn với Dương Thị Như Ngọc.",
    context:
      "Đầu thế kỷ X, nhà Đường suy yếu rồi sụp đổ, Trung Hoa rơi vào thời 'Ngũ Đại Thập Quốc' loạn lạc. Tại Giao Châu, các thủ lĩnh người Việt Khúc Thừa Dụ - Khúc Hạo - Khúc Thừa Mỹ rồi Dương Đình Nghệ dần xây dựng nền tự chủ. Năm 937, Kiều Công Tiễn giết chủ tướng Dương Đình Nghệ để cướp ngôi, rồi cầu cứu Nam Hán — đây chính là cơ hội để vua Nam Hán Lưu Cung sai con là Hoằng Tháo đem thủy quân sang xâm lược, mở đường tái lập ách Bắc thuộc.",
    career:
      "• Trước 937: cai quản châu Ái (Thanh Hóa), nổi tiếng thanh liêm, được dân yêu mến.\n• Cuối 937: nghe tin Dương Đình Nghệ bị giết, lập tức kéo quân ra Bắc.\n• Đầu 938: tiêu diệt Kiều Công Tiễn tại Đại La trước khi quân Nam Hán kịp tới.\n• Cuối năm 938: bày trận địa cọc trên sông Bạch Đằng (Quảng Ninh - Hải Phòng).\n• Đại phá thủy quân Nam Hán, giết chết Hoằng Tháo, vua Lưu Cung 'khóc thảm rút quân về'.\n• Năm 939: xưng vương (Ngô Vương), bỏ chức Tiết độ sứ, đóng đô tại Cổ Loa, định triều nghi - phẩm phục.\n• Năm 944: băng hà ở tuổi 47.",
    character:
      "Khoan hòa, mưu lược, sâu sắc. Trước trận Bạch Đằng, ông nói với các tướng câu khinh địch nổi tiếng nhưng đầy tự tin chiến lược, thể hiện tầm nhìn chiến trường vượt thời đại. Là người trung nghĩa: không vì thù riêng mà phản chủ, đợi tới khi Dương Đình Nghệ bị hại mới dấy binh báo thù — vừa hợp đạo vừa hợp lòng dân. Khi xưng vương, ông từ bỏ danh hiệu 'Tiết độ sứ' (vốn là chức của triều đình phương Bắc ban) — thể hiện ý thức độc lập triệt để.",
    legacy:
      "CÔNG: Là người chấm dứt VĨNH VIỄN 1117 năm Bắc thuộc — kỳ tích vĩ đại nhất lịch sử dân tộc. Mở ra kỷ nguyên độc lập tự chủ liên tục cho đến nay. Sử gia Lê Văn Hưu khen: 'Mưu giỏi mà đánh cũng giỏi, làm nên công dựng lại cơ đồ, đứng đầu các vua'.\nHẠN CHẾ: Mất sớm khiến nhà Ngô không kịp củng cố, dẫn đến loạn 12 sứ quân sau này.\nDI SẢN: Đền thờ Ngô Quyền tại Đường Lâm, Cổ Loa, Bạch Đằng. Tên ông được đặt cho nhiều đại lộ. Trận Bạch Đằng 938 trở thành kinh điển quân sự thế giới về lợi dụng địa hình - thủy văn, được tái hiện thành công 350 năm sau bởi Trần Hưng Đạo.",
    relations:
      "• DƯƠNG ĐÌNH NGHỆ (cha vợ, chủ tướng): người gây dựng cơ nghiệp tự chủ, bị Kiều Công Tiễn giết — Ngô Quyền dấy binh báo thù.\n• DƯƠNG THỊ NHƯ NGỌC (vợ): con gái Dương Đình Nghệ, sau là hoàng hậu.\n• KIỀU CÔNG TIỄN: kẻ phản chủ, đối thủ đầu tiên bị Ngô Quyền tiêu diệt.\n• HOẰNG THÁO: hoàng tử Nam Hán, tướng giặc tử trận tại Bạch Đằng.\n• LƯU CUNG: vua Nam Hán, kẻ chủ mưu xâm lược.\n• DƯƠNG TAM KHA (em vợ): sau khi Ngô Quyền mất đã cướp ngôi cháu, gây loạn — góp phần đẩy đất nước vào loạn 12 sứ quân.",
  },
  {
    id: "dinh-bo-linh",
    name: "Đinh Bộ Lĩnh",
    era: "924 – 979",
    title: "Vạn Thắng Vương — Thống nhất giang sơn",
    image: dinhBoLinh,
    achievement: "Dẹp loạn 12 sứ quân, thống nhất đất nước, lập nên nhà Đinh, đặt quốc hiệu Đại Cồ Việt (968).",
    story:
      "Từ cậu bé chăn trâu cờ lau tập trận ở Hoa Lư, Đinh Bộ Lĩnh trưởng thành thành thủ lĩnh kiệt xuất. Ông lần lượt thu phục 12 sứ quân, lên ngôi Hoàng đế, định đô tại Hoa Lư.",
    quote: "“Đại Cồ Việt — nước lớn của người Việt!”",
    personal:
      "Sinh năm 924 tại thôn Đại Hữu, châu Đại Hoàng (nay là xã Gia Phương, huyện Gia Viễn, Ninh Bình). Cha là Đinh Công Trứ — nha tướng của Dương Đình Nghệ, từng giữ chức Thứ sử Hoan Châu (Nghệ An). Cha mất sớm, mẹ là bà Đàm Thị đưa con về quê ngoại ở động Hoa Lư nương nhờ chú ruột Đinh Thúc Dự. Tuổi thơ chăn trâu cùng bạn bè, lấy bông lau làm cờ, tập trận giả — được trẻ em trong vùng tôn làm 'minh chủ'.",
    context:
      "Sau khi Ngô Quyền mất (944), Dương Tam Kha cướp ngôi cháu, gây ra cảnh tranh chấp triều đình. Đến 965, Ngô Xương Văn tử trận, đất nước rơi vào tình trạng vô chủ — 12 thế lực hào trưởng địa phương cát cứ khắp nơi (gọi là 'loạn 12 sứ quân'): Ngô Nhật Khánh ở Đường Lâm, Đỗ Cảnh Thạc ở Đỗ Động, Phạm Bạch Hổ ở Đằng Châu, Kiều Công Hãn, Nguyễn Siêu, Lý Khuê... Đất nước đứng trước nguy cơ tan rã, dân chúng khốn khổ vì nội chiến triền miên.",
    career:
      "• Tuổi 20: tập hợp dân Hoa Lư, dựng cờ riêng tại động Hoa Lư.\n• Liên minh với sứ quân Trần Lãm (Trần Minh Công) ở Bố Hải Khẩu — được Trần Lãm coi như con, giao cả binh quyền.\n• Sau khi Trần Lãm mất, kế thừa toàn bộ lực lượng, được tôn là 'Vạn Thắng Vương'.\n• Từ 966 - 967: lần lượt đánh dẹp các sứ quân — kết hợp đánh và dụ hàng (kết thông gia với Ngô Nhật Khánh).\n• Năm 968: thống nhất hoàn toàn đất nước, lên ngôi Hoàng đế, đặt quốc hiệu ĐẠI CỒ VIỆT, niên hiệu Thái Bình, đóng đô tại Hoa Lư.\n• 968 - 979: xây cung điện, đặt 10 đạo quân, định triều nghi, đúc tiền 'Thái Bình hưng bảo' — đồng tiền đầu tiên của Việt Nam.\n• Năm 979: bị Đỗ Thích ám sát cùng con trai trưởng Đinh Liễn.",
    character:
      "Cương nghị, quyết đoán, dùng người rộng rãi nhưng hình phạt nghiêm khắc (đặt vạc dầu sôi, chuồng cọp ở triều đình để răn đe). Có tài thu phục nhân tâm và biết liên minh đúng lúc. Tuy nhiên về cuối đời, ông phạm sai lầm lập con thứ Đinh Hạng Lang làm Thái tử thay con trưởng Đinh Liễn — tạo mâu thuẫn dẫn đến biến cố. Câu chuyện cờ lau tập trận thuở nhỏ cho thấy thiên bẩm lãnh đạo từ rất sớm.",
    legacy:
      "CÔNG: Người đầu tiên đặt quốc hiệu chính thức (Đại Cồ Việt), xưng Hoàng đế (ngang hàng vua Tống), đặt niên hiệu — khẳng định Việt Nam là quốc gia bình đẳng với Trung Hoa. Đặt nền móng cho mô hình nhà nước phong kiến trung ương tập quyền tồn tại 1000 năm.\nHẠN CHẾ: Hình phạt quá khắc nghiệt; sai lầm trong việc lập kế vị dẫn đến nhà Đinh chỉ tồn tại 12 năm.\nDI SẢN: Cố đô Hoa Lư (Ninh Bình) — Di sản Văn hóa Thế giới UNESCO. Đền thờ Vua Đinh tại Hoa Lư là điểm hành hương lớn. Tên ông được đặt cho nhiều đường phố và trường học khắp cả nước.",
    relations:
      "• ĐINH CÔNG TRỨ (cha): nha tướng của Dương Đình Nghệ, mất khi Bộ Lĩnh còn nhỏ.\n• ĐÀM THỊ (mẹ): người trực tiếp nuôi dạy con trong cảnh nghèo khó tại Hoa Lư.\n• TRẦN LÃM (Trần Minh Công): sứ quân ở Bố Hải Khẩu, coi Bộ Lĩnh như con và truyền lại binh quyền — ân nhân lớn nhất.\n• ĐINH LIỄN (con trai trưởng): cùng cha bị Đỗ Thích ám sát.\n• LÊ HOÀN (Thập đạo tướng quân): tâm phúc, sau lên ngôi lập nhà Tiền Lê khi nhà Đinh suy.\n• DƯƠNG VÂN NGA (hoàng hậu): người trao long bào cho Lê Hoàn.\n• ĐỖ THÍCH: viên quan hầu, kẻ ám sát đầy mưu mô.",
  },
  {
    id: "ly-thuong-kiet",
    name: "Lý Thường Kiệt",
    era: "1019 – 1105",
    title: "Danh tướng nhà Lý",
    image: lyThuongKiet,
    achievement: "Chủ động đánh sang đất Tống (1075–1077), phá tan ý đồ xâm lược, giữ vững phòng tuyến sông Như Nguyệt.",
    story:
      "Trước nguy cơ nhà Tống xâm lược, Lý Thường Kiệt thực hiện chiến lược 'Tiên phát chế nhân' — đánh sang Ung Châu, Khâm Châu, Liêm Châu. Khi quân Tống phản công, ông lập phòng tuyến sông Như Nguyệt, đọc bài thơ thần khích lệ tướng sĩ.",
    quote: "“Nam quốc sơn hà Nam đế cư — Tiệt nhiên định phận tại thiên thư.”",
    personal:
      "Tên thật là Ngô Tuấn, sinh năm 1019 tại phường Thái Hòa, kinh thành Thăng Long (Hà Nội). Sau được vua Lý ban quốc tính 'Lý' và tên 'Thường Kiệt'. Cha là Sùng Tiết tướng quân Ngô An Ngữ — quý tộc dòng dõi An Vương Ngô Xương Xí (cháu Ngô Quyền). Cha mất khi ông 13 tuổi. Năm 23 tuổi, ông tịnh thân vào cung làm hoạn quan để có cơ hội tiến thân — một con đường khác thường nhưng cuối cùng đã thành huyền thoại. Học rộng tài cao, đặc biệt giỏi binh pháp và thi văn.",
    context:
      "Thời Lý Nhân Tông (vua lên ngôi khi mới 7 tuổi, do Thái hậu Ỷ Lan và Lý Thường Kiệt nhiếp chính), nhà Tống dưới thời Tể tướng Vương An Thực thực hiện cải cách 'Tân pháp', đồng thời chuẩn bị thôn tính Đại Việt để gỡ vốn cho ngân khố cạn kiệt. Tại biên giới phía Bắc, Tống tích trữ 10 vạn quân tại các châu Ung, Khâm, Liêm. Phía Nam, Chiêm Thành cũng thường quấy nhiễu. Đất nước đứng trước nguy cơ 'lưỡng đầu thọ địch'.",
    career:
      "• 1041: vào cung làm Hoàng môn chi hậu (hầu vua Lý Thái Tông).\n• 1054: được vua Lý Thánh Tông tin dùng, phong Bổng hành quân hiệu úy.\n• 1069: tham gia chinh phạt Chiêm Thành, bắt sống vua Chế Củ.\n• 1075: chủ động đem 10 vạn quân thủy bộ đánh phủ đầu Ung Châu, Khâm Châu, Liêm Châu — phá hủy kho tàng, tiêu diệt 8 vạn quân Tống.\n• 1076-1077: lập phòng tuyến sông Như Nguyệt dài 100 km; cho người đọc bài thơ thần 'Nam quốc sơn hà' khích lệ ba quân.\n• Tổ chức phản công đêm vượt sông, đại phá Quách Quỳ, buộc Tống giảng hòa rút quân.\n• 1082: trấn thủ Thanh Hóa - Nghệ An đến năm 86 tuổi.\n• 1105: mất, thọ 86 tuổi, được truy phong Việt Quốc công.",
    character:
      "Mưu lược thâm sâu, dũng cảm phi thường, văn võ song toàn. Nổi tiếng liêm khiết, không tham của cải. Tư tưởng 'tiên phát chế nhân' (chủ động đánh trước để tự vệ) cho thấy tầm nhìn chiến lược vượt thời đại. Việc dùng bài thơ thần để 'tâm lý chiến' — kích thích lòng yêu nước, làm nhụt chí địch — là sáng kiến độc đáo. Suốt đời tận tụy phục vụ ba đời vua Lý (Thái Tông, Thánh Tông, Nhân Tông) mà không màng quyền vị riêng.",
    legacy:
      "CÔNG: 'Nam quốc sơn hà' được coi là bản TUYÊN NGÔN ĐỘC LẬP ĐẦU TIÊN của dân tộc — khẳng định chủ quyền là 'do trời định'. Chiến thắng Như Nguyệt khiến nhà Tống VĨNH VIỄN từ bỏ ý đồ xâm lược Đại Việt, tạo điều kiện cho thời thịnh trị Lý - Trần.\nDI SẢN: Đền thờ tại nhiều tỉnh thành, đặc biệt tại Bắc Ninh, Thanh Hóa, Hà Nội. Tên ông được đặt cho hàng loạt đại lộ, trường học. Tư tưởng 'tiên phát chế nhân' trở thành nguyên tắc quân sự kinh điển của Việt Nam, được Trần Hưng Đạo, Quang Trung, Võ Nguyên Giáp kế thừa.",
    relations:
      "• LÝ THÁI TÔNG, LÝ THÁNH TÔNG, LÝ NHÂN TÔNG: ba đời vua mà ông phụng sự.\n• Ỷ LAN THÁI HẬU: nhiếp chính cùng Lý Thường Kiệt thời Lý Nhân Tông — quan hệ tin cậy bền chặt.\n• LÝ ĐẠO THÀNH: Tể tướng, từng có mâu thuẫn với Ỷ Lan nhưng sau hòa giải, cùng Lý Thường Kiệt phò tá triều đình.\n• TÔNG ĐẢN: phó tướng tâm phúc trong chiến dịch đánh Ung Châu.\n• HOẰNG CHÂN, CHIÊU VĂN: hai hoàng tử nhà Lý hy sinh tại Như Nguyệt.\n• QUÁCH QUỲ, TRIỆU TIẾT: tướng Tống, đối thủ chính.\n• VƯƠNG AN THẠCH: Tể tướng Tống, kẻ chủ mưu cuộc xâm lược.\n• CHẾ CỦ: vua Chiêm Thành bị bắt sống.",
  },
  {
    id: "tran-hung-dao",
    name: "Trần Hưng Đạo",
    era: "1228 – 1300",
    title: "Hưng Đạo Đại Vương — Đức Thánh Trần",
    image: tranHungDao,
    achievement: "Ba lần đại phá quân Nguyên Mông (1258, 1285, 1288), tác giả 'Hịch tướng sĩ' và 'Binh thư yếu lược'.",
    story:
      "Trước đạo quân Mông Cổ hùng mạnh nhất thế giới, Trần Hưng Đạo dùng chiến thuật 'vườn không nhà trống', đoàn kết toàn dân. Trận Bạch Đằng 1288 với cọc gỗ tái hiện, ông bắt sống Ô Mã Nhi.",
    quote: "“Nếu bệ hạ muốn hàng, xin trước hãy chém đầu thần đi đã.”",
    personal:
      "Tên thật Trần Quốc Tuấn, sinh năm 1228 tại Tức Mặc, phủ Thiên Trường (nay là xã Lộc Vượng, TP. Nam Định). Cha là An Sinh vương Trần Liễu — anh ruột vua Trần Thái Tông, mẹ là Thiện Đạo Quốc mẫu. Vợ là Thiên Thành Công chúa (em họ). Xuất thân hoàng tộc bậc nhất, được học hành toàn diện từ nhỏ — văn chương, võ nghệ, binh pháp, thiên văn. Trần Liễu vì uất ức bị em ruột (vua Trần Thái Tông) cưỡng đoạt vợ (Thuận Thiên Công chúa), khi sắp mất đã trối Quốc Tuấn phải cướp ngôi báo thù — nhưng ông gạt mối thù riêng vì đại nghĩa.",
    context:
      "Thế kỷ XIII, đế quốc Mông Cổ chinh phục cả Á Âu — từ Trung Hoa đến Ba Tư, Đông Âu, hủy diệt Bagdad, đánh bại nhà Tống. Đại Việt là quốc gia nhỏ bé hiếm hoi nằm trên đường Nam tiến của Hốt Tất Liệt. Ba lần đem quân xâm lược (1258 với 3 vạn, 1285 với 50 vạn, 1287-1288 với 30 vạn) — đặt Đại Việt vào cuộc chiến sinh tử mà tương quan lực lượng cực kỳ chênh lệch. Trong nước, nhà Trần xây dựng được khối đại đoàn kết quý tộc - bình dân vững chắc qua các Hội nghị Bình Than, Diên Hồng.",
    career:
      "• 1257-1258: tham gia kháng chiến chống Nguyên lần 1, được phong Tiết chế.\n• 1283: được vua Trần Nhân Tông phong làm Quốc công Tiết chế thống lĩnh toàn quân chuẩn bị chống Nguyên lần 2.\n• 1284: viết 'HỊCH TƯỚNG SĨ' (Dụ chư tì tướng hịch văn) bất hủ — khích lệ tướng sĩ trước cuộc chiến.\n• 1285: chỉ huy kháng chiến lần 2 — dùng 'vườn không nhà trống', rút lui chiến lược, phản công đại thắng tại Hàm Tử, Chương Dương, Tây Kết.\n• 1287-1288: kháng chiến lần 3 — tổ chức trận BẠCH ĐẰNG vĩ đại, bắt sống Ô Mã Nhi, Phàn Tiếp.\n• Soạn 'Binh thư yếu lược' và 'Vạn Kiếp tông bí truyền thư' — di sản binh pháp dân tộc.\n• 1300: mất tại Vạn Kiếp, hưởng thọ 72 tuổi. Trước khi mất dặn vua: 'Khoan thư sức dân để làm kế sâu rễ bền gốc, đó là thượng sách giữ nước'.",
    character:
      "Trí dũng song toàn, đại nhân đại nghĩa. Phẩm chất nổi bật nhất: GẠT THÙ NHÀ VÌ NỢ NƯỚC — không thực hiện di nguyện cướp ngôi của cha, hết lòng phò tá nhà Trần. Khi cầm gậy có bịt đầu sắt nhọn yết kiến Trần Quang Khải (người có hiềm khích), ông tự tay vứt mũi sắt thể hiện thiện ý — câu chuyện 'tắm cùng Thái sư' đoàn kết hai nhà Trần Liễu - Trần Cảnh trở thành giai thoại bậc nhất. Khiêm tốn dùng người, biết tiến cử nhân tài (Yết Kiêu, Dã Tượng, Phạm Ngũ Lão). Đối với binh sĩ thì coi như con em ruột thịt.",
    legacy:
      "CÔNG: Đại Việt trở thành quốc gia DUY NHẤT ở châu Á đánh bại đế quốc Nguyên Mông CẢ BA LẦN — kỳ tích vô tiền khoáng hậu. Tư tưởng 'lấy đoản binh chế trường trận', 'cả nước đánh giặc', 'khoan thư sức dân' trở thành kim chỉ nam quốc phòng Việt Nam. 'Hịch tướng sĩ' là áng văn bất hủ, được học sinh mọi thế hệ thuộc lòng.\nDI SẢN: Được phong Đức Thánh Trần, thờ tại đền Kiếp Bạc (Hải Dương), đền Trần (Nam Định) — là một trong 'Tứ bất tử' của tín ngưỡng Việt. Tên ông đặt cho đại lộ trung tâm hầu hết các đô thị Việt Nam. Năm 1984, Hội đồng Khoa học Hoàng gia Anh bầu Trần Hưng Đạo vào danh sách 10 vị tướng vĩ đại nhất thế giới mọi thời đại.",
    relations:
      "• TRẦN LIỄU (cha): An Sinh vương, có hiềm khích sâu sắc với em ruột là vua Trần Thái Tông.\n• TRẦN THÁI TÔNG (chú ruột & cha vợ kế): vua sáng nghiệp nhà Trần.\n• TRẦN THÁNH TÔNG, TRẦN NHÂN TÔNG: hai vua mà ông trực tiếp phò tá ba cuộc kháng chiến.\n• TRẦN QUANG KHẢI (em họ): Thái sư, từng có mâu thuẫn nhưng cùng đoàn kết phá Nguyên — câu chuyện 'tắm cùng' nổi tiếng.\n• TRẦN QUỐC TOẢN: cháu họ, anh hùng thiếu niên 'bóp nát quả cam'.\n• YẾT KIÊU, DÃ TƯỢNG: hai gia tướng tài ba, một thủy một bộ.\n• PHẠM NGŨ LÃO: nhân tài 'ngồi đan sọt giữa đường' được ông phát hiện và gả con gái nuôi.\n• TRẦN BÌNH TRỌNG: tướng dũng cảm với câu nói 'Ta thà làm quỷ nước Nam'.\n• THOÁT HOAN, Ô MÃ NHI, TOA ĐÔ: ba tướng Nguyên — đối thủ trực tiếp.",
  },
  {
    id: "le-thanh-tong",
    name: "Lê Thánh Tông",
    era: "1442 – 1497",
    title: "Vị vua thịnh trị nhất nhà Hậu Lê",
    image: leThanhTong,
    achievement: "Ban hành Bộ luật Hồng Đức, mở mang bờ cõi, xây dựng nền hành chính quy củ, văn hiến cực thịnh.",
    story:
      "Lên ngôi năm 18 tuổi, Lê Thánh Tông cải tổ toàn diện đất nước: lập 13 đạo thừa tuyên, ban hành Quốc triều hình luật (Hồng Đức) tiến bộ, mở khoa thi đều đặn, lập Hội Tao Đàn.",
    quote: "“Một thước núi, một tấc sông của ta lẽ nào lại vứt bỏ?”",
    personal:
      "Tên húy Lê Tư Thành, sinh ngày 25/8/1442 tại nhà người cậu ruột ở Đông Kinh (Thăng Long). Là con thứ tư của Lê Thái Tông và Tiệp dư Ngô Thị Ngọc Dao. Mẹ ông từng bị vợ vua Nguyễn Thị Anh ghen ghét, suýt bị hại — nhờ Nguyễn Trãi và Nguyễn Thị Lộ cứu mới thoát chết, sinh con trong cảnh cơ hàn ở chùa Huy Văn. Tuổi thơ sống lặng lẽ, ham học, đặc biệt giỏi văn thơ và am hiểu kinh sử Nho gia.",
    context:
      "Sau cái chết bí ẩn của Lê Thái Tông tại Lệ Chi Viên (1442) và vụ án oan Nguyễn Trãi tru di tam tộc, triều đình Lê sơ liên tục biến loạn. Lê Nhân Tông bị anh là Lê Nghi Dân giết để cướp ngôi (1459). Các đại thần Nguyễn Xí, Đinh Liệt làm cuộc đảo chính, giết Lê Nghi Dân, đón Tư Thành 18 tuổi lên ngôi (1460). Đất nước cần một vị vua tài năng để khôi phục kỷ cương sau loạn lạc, cải cách thiết chế Lê sơ vốn còn ảnh hưởng nặng từ thời Trần.",
    career:
      "• 1460: lên ngôi ở tuổi 18, đặt niên hiệu Quang Thuận (sau đổi Hồng Đức 1470).\n• 1466-1471: cải cách hành chính — chia nước thành 13 đạo thừa tuyên, lập 6 bộ, lập Lục tự, Lục khoa giám sát.\n• 1471: thân chinh đánh Chiêm Thành, hạ kinh đô Đồ Bàn, mở rộng lãnh thổ đến đèo Cù Mông (Phú Yên), lập đạo Quảng Nam.\n• 1483: ban hành QUỐC TRIỀU HÌNH LUẬT (Bộ luật Hồng Đức) — bộ luật tiến bộ bậc nhất Đông Á thời trung đại với nhiều quy định bảo vệ phụ nữ, người yếu thế.\n• Mở khoa thi Tiến sĩ đều đặn 3 năm/lần, lập bia Tiến sĩ tại Văn Miếu (1484).\n• 1495: lập Hội TAO ĐÀN gồm 28 vị (Nhị thập bát tú) do chính nhà vua làm Tao Đàn Nguyên Súy — thúc đẩy văn học chữ Nôm.\n• Soạn 'Đại Việt sử ký toàn thư' (cùng Ngô Sĩ Liên), 'Hồng Đức quốc âm thi tập', 'Thiên Nam dư hạ tập'.\n• 1497: băng hà, thọ 56 tuổi, tại vị 38 năm.",
    character:
      "Tài năng toàn diện hiếm có — vừa là nhà chính trị, nhà cải cách, nhà quân sự, nhà thơ lỗi lạc. Cần kiệm, gương mẫu, làm việc đến nửa đêm. Quyết đoán nhưng biết lắng nghe — khuyến khích quan lại can gián, có chiếu cầu hiền. Câu nói bất hủ về 'một thước núi, một tấc sông' (gửi quan trấn thủ biên giới) thể hiện tinh thần bảo vệ chủ quyền lãnh thổ tuyệt đối. Yêu thương dân, ban nhiều chính sách giảm tô thuế, khuyến nông. Yêu thi ca, để lại hơn 300 bài thơ chữ Nôm và chữ Hán.",
    legacy:
      "CÔNG: Đưa Đại Việt đạt thời thịnh trị nhất trong lịch sử (gọi là 'Hồng Đức thịnh thế'). Bộ luật Hồng Đức là kiệt tác lập pháp — tiến bộ hơn nhiều bộ luật phương Tây cùng thời (cho phụ nữ quyền ly hôn, thừa kế, sở hữu tài sản). Mở mang lãnh thổ về phía Nam tới Phú Yên. Hệ thống hành chính 13 đạo là khuôn mẫu cho 1000 năm sau.\nHẠN CHẾ: Một số chính sách trọng Nho khắc nghiệt làm hạn chế Phật - Đạo; một số đại án oan với hoàng thân.\nDI SẢN: Lăng vua tại Lam Kinh (Thanh Hóa) — Di tích Quốc gia đặc biệt. Bia Tiến sĩ Văn Miếu (do ông khởi xướng) là Di sản Tư liệu Thế giới UNESCO.",
    relations:
      "• LÊ THÁI TÔNG (cha): vua trẻ tài năng nhưng mất bí ẩn ở Lệ Chi Viên.\n• NGÔ THỊ NGỌC DAO (mẹ): người phụ nữ kiên cường, được Nguyễn Trãi - Nguyễn Thị Lộ cứu thoát.\n• LÊ NHÂN TÔNG (anh khác mẹ): vị vua trước, bị Lê Nghi Dân giết.\n• LÊ NGHI DÂN (anh cả): kẻ giết em cướp ngôi, sau bị đại thần lật đổ.\n• NGUYỄN XÍ, ĐINH LIỆT: khai quốc công thần, người đảo chính đưa ông lên ngôi — được trọng dụng suốt đời.\n• THÂN NHÂN TRUNG: Tao Đàn Phó Nguyên Súy, tác giả câu 'Hiền tài là nguyên khí của quốc gia'.\n• NGÔ SĨ LIÊN: sử gia, soạn 'Đại Việt sử ký toàn thư' theo lệnh vua.\n• LÊ THÁNH MẪU TRINH PHI NGUYỄN THỊ HẰNG: hoàng hậu hiền đức.\n• TRÀ TOÀN: vua Chiêm Thành, bị bắt sống trong chiến dịch 1471.",
  },
  {
    id: "nguyen-hue",
    name: "Nguyễn Huệ — Quang Trung",
    era: "1753 – 1792",
    title: "Hoàng đế bách chiến bách thắng",
    image: nguyenHue,
    achievement: "Đại phá 5 vạn quân Xiêm tại Rạch Gầm — Xoài Mút (1785), đánh tan 29 vạn quân Thanh trong 5 ngày Tết Kỷ Dậu (1789).",
    story:
      "Mùng 5 Tết Kỷ Dậu 1789, Quang Trung dẫn đại quân thần tốc ra Bắc, đánh tan quân Thanh ở Ngọc Hồi — Đống Đa, giải phóng Thăng Long, khiến Tôn Sĩ Nghị bỏ ấn tín chạy về nước.",
    quote: "“Đánh cho để dài tóc — Đánh cho để đen răng — Đánh cho sử tri Nam quốc anh hùng chi hữu chủ.”",
    personal:
      "Sinh năm 1753 tại làng Tây Sơn (nay là thị trấn Phú Phong, huyện Tây Sơn, Bình Định). Tên húy Hồ Thơm (sau đổi Nguyễn Huệ). Là con thứ ba trong gia đình họ Hồ (sau đổi sang họ Nguyễn theo họ mẹ là Nguyễn Thị Đồng) — cha là Hồ Phi Phúc, một thương gia trầu cau khá giả. Tổ tiên vốn là họ Hồ ở Nghệ An, di cư vào Nam thời chúa Nguyễn. Anh em Tây Sơn gồm Nguyễn Nhạc (cả), Nguyễn Lữ (hai), Nguyễn Huệ (ba). Học thầy Trương Văn Hiến — một danh sĩ Đàng Trong giỏi văn võ, được truyền dạy binh pháp Tôn Tử và võ nghệ Tây Sơn.",
    context:
      "Cuối thế kỷ XVIII, Đại Việt rơi vào khủng hoảng toàn diện: Đàng Ngoài chúa Trịnh suy đồi, vua Lê chỉ là bù nhìn; Đàng Trong chúa Nguyễn bị quyền thần Trương Phúc Loan chuyên quyền, sưu thuế hà khắc. Năm 1771, anh em Tây Sơn dấy binh tại ấp Tây Sơn với khẩu hiệu 'Lấy của nhà giàu chia cho dân nghèo'. Đồng thời, Đại Việt đối mặt nạn ngoại xâm kép: Xiêm La (Thái Lan) hỗ trợ Nguyễn Ánh từ phía Nam, nhà Thanh xâm lược từ phía Bắc theo lời cầu cứu của Lê Chiêu Thống.",
    career:
      "• 1771: 18 tuổi, cùng anh em phất cờ khởi nghĩa Tây Sơn.\n• 1777: tiêu diệt chúa Nguyễn tại Long Xuyên (Cà Mau).\n• 1785: ĐẠI THẮNG RẠCH GẦM - XOÀI MÚT — chỉ trong 1 đêm (19/1/1785) tiêu diệt 5 vạn quân Xiêm cùng 300 chiến thuyền.\n• 1786: bắc tiến lật đổ chúa Trịnh, tôn phù vua Lê — kết hôn với công chúa Lê Ngọc Hân.\n• 22/12/1788: lên ngôi Hoàng đế tại Phú Xuân (Huế), niên hiệu Quang Trung.\n• 30 Tết - mùng 5 Tết Kỷ Dậu (1789): hành quân thần tốc, đại phá 29 vạn quân Thanh — Sầm Nghi Đống tự sát ở Đống Đa, Tôn Sĩ Nghị bỏ chạy.\n• 1789-1792: cải cách táo bạo — Chiếu lập học, Chiếu khuyến nông, đề cao chữ Nôm, mở thương cảng, dùng người tài như Ngô Thì Nhậm, Phan Huy Ích.\n• Chuẩn bị đánh nhà Thanh đòi lại lưỡng Quảng (Quảng Đông, Quảng Tây).\n• 16/9/1792: đột ngột băng hà tại Phú Xuân, 39 tuổi — để lại sự nghiệp dang dở.",
    character:
      "Thiên tài quân sự bẩm sinh — chưa từng thua trận nào trong cuộc đời cầm quân. Quyết đoán đến mức táo bạo, hành quân thần tốc gây bất ngờ tuyệt đối cho địch (3.000km Phú Xuân - Thăng Long trong 35 ngày là kỷ lục). Tư tưởng cải cách tiến bộ vượt thời đại — đề cao chữ Nôm, khuyến khích thương nghiệp, trọng dụng nhân tài bất kể xuất thân. Sống giản dị, gần gũi binh sĩ. Trong trận Ngọc Hồi, ông trực tiếp cưỡi voi xông pha, áo bào đen sạm khói súng. Câu nói 'Đánh cho sử tri Nam quốc anh hùng chi hữu chủ' (Đánh để sử sách biết nước Nam có chủ anh hùng) là tuyên ngôn dân tộc bất hủ.",
    legacy:
      "CÔNG: Cứu nước khỏi hai nạn ngoại xâm cùng lúc (Xiêm và Thanh). Chấm dứt cảnh chia cắt Đàng Trong - Đàng Ngoài kéo dài 200 năm, đặt nền móng thống nhất quốc gia. Tư tưởng cải cách Quang Trung (đề cao chữ Nôm, mở cửa giao thương) đi trước thời đại nhưng tiếc thay không kịp thực hiện trọn vẹn.\nHẠN CHẾ: Cái chết quá sớm (39 tuổi) khiến nhà Tây Sơn nhanh chóng sụp đổ trước Nguyễn Ánh; chính sách thanh trừng quan lại Lê - Trịnh quá khắc nghiệt.\nDI SẢN: Bảo tàng Quang Trung tại Bình Định, đền thờ tại Bình Định, Huế. Gò Đống Đa (Hà Nội) — di tích chiến thắng. Lễ hội Đống Đa mùng 5 Tết hàng năm. Tên ông được đặt cho hàng trăm đại lộ, trường đại học (Đại học Quang Trung, Đại học Sư phạm Quy Nhơn).",
    relations:
      "• NGUYỄN NHẠC (anh cả, vua Thái Đức): khai sáng nhà Tây Sơn, sau có mâu thuẫn quyền lực với em.\n• NGUYỄN LỮ (anh hai, Đông Định Vương): trấn thủ Gia Định, kém tài, bị Nguyễn Ánh đánh bại nhiều lần.\n• TRƯƠNG VĂN HIẾN (thầy): danh sĩ Đàng Trong dạy văn võ cho ba anh em — người ươm mầm cuộc khởi nghĩa.\n• LÊ NGỌC HÂN (vợ - Bắc Cung Hoàng Hậu): công chúa nhà Lê, tác giả 'Ai Tư Vãn' khóc chồng.\n• NGÔ THÌ NHẬM, PHAN HUY ÍCH: hai văn thần kiệt xuất phò tá Quang Trung sau khi rời nhà Lê.\n• TRẦN VĂN KỶ: mưu sĩ tâm phúc.\n• NGUYỄN ÁNH (kẻ thù truyền kiếp): chúa Nguyễn lưu vong, sau lập nhà Nguyễn (vua Gia Long).\n• LÊ CHIÊU THỐNG: vua Lê hèn nhát cầu cứu nhà Thanh — đối tượng bị Quang Trung khinh bỉ.\n• TÔN SĨ NGHỊ, SẦM NGHI ĐỐNG: tướng Thanh, đối thủ tại Ngọc Hồi - Đống Đa.\n• CÀN LONG: Hoàng đế nhà Thanh, sau khi thua phải sắc phong Quang Trung làm An Nam Quốc Vương.",
  },
  {
    id: "ho-chi-minh",
    name: "Hồ Chí Minh",
    era: "1890 – 1969",
    title: "Cha già dân tộc",
    image: hoChiMinh,
    achievement: "Lãnh đạo Cách mạng Tháng Tám 1945, đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    story:
      "Bôn ba 30 năm tìm đường cứu nước, Người trở về lãnh đạo dân tộc làm nên Cách mạng Tháng Tám, đánh đuổi thực dân Pháp với chiến thắng Điện Biên Phủ chấn động địa cầu.",
    quote: "“Không có gì quý hơn độc lập, tự do.”",
    personal:
      "Tên khai sinh Nguyễn Sinh Cung, sinh ngày 19/5/1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, Nghệ An. Cha là cụ Phó bảng Nguyễn Sinh Sắc — nhà nho yêu nước, đỗ Phó bảng nhưng từ quan vì bất mãn triều đình. Mẹ là bà Hoàng Thị Loan — người phụ nữ tần tảo, mất sớm khi Người 11 tuổi. Chị gái Nguyễn Thị Thanh và anh trai Nguyễn Sinh Khiêm đều tham gia phong trào yêu nước. Học chữ Hán từ cha, học chữ Pháp tại trường Quốc học Huế. Sử dụng hơn 170 bí danh trong cuộc đời hoạt động (Nguyễn Tất Thành, Nguyễn Ái Quốc, Lý Thụy, Hồ Chí Minh...).",
    context:
      "Cuối thế kỷ XIX - đầu XX, Việt Nam là thuộc địa của Pháp, dân tộc rơi vào ách 'một cổ ba tròng' (Pháp - Nhật - phong kiến). Các phong trào yêu nước trước đó đều thất bại: Cần Vương (Phan Đình Phùng, Hoàng Hoa Thám) - vũ trang nhưng thiếu đường lối; Đông Du (Phan Bội Châu) - dựa vào Nhật bị phản bội; Duy Tân (Phan Châu Trinh) - cải lương ôn hòa không kết quả. Cả dân tộc khắc khoải tìm con đường cứu nước mới — chính khi đó người thanh niên Nguyễn Tất Thành 21 tuổi quyết định ra đi.",
    career:
      "• 5/6/1911: rời bến cảng Sài Gòn (Nhà Rồng) trên tàu Đô đốc Latouche-Tréville sang Pháp với tên Văn Ba.\n• 1911-1917: bôn ba qua Pháp, Anh, Mỹ, châu Phi, châu Mỹ La-tinh — làm đủ nghề (phụ bếp, quét tuyết, rửa ảnh) để khảo sát thế giới.\n• 1919: gửi bản 'Yêu sách của nhân dân An Nam' tới Hội nghị Versailles ký tên Nguyễn Ái Quốc.\n• 1920: tại Đại hội Tours, bỏ phiếu tán thành Quốc tế III, trở thành người Cộng sản Việt Nam đầu tiên.\n• 3/2/1930: thành lập Đảng Cộng sản Việt Nam tại Hồng Kông.\n• 1941: về nước sau 30 năm, ở hang Pác Bó (Cao Bằng), thành lập Mặt trận Việt Minh.\n• 19/8/1945: lãnh đạo Tổng khởi nghĩa Cách mạng Tháng Tám.\n• 2/9/1945: đọc TUYÊN NGÔN ĐỘC LẬP tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.\n• 1946-1954: lãnh đạo kháng chiến chống Pháp đến chiến thắng Điện Biên Phủ.\n• 1954-1969: lãnh đạo công cuộc xây dựng miền Bắc và kháng chiến chống Mỹ ở miền Nam.\n• 2/9/1969: từ trần tại Hà Nội, thọ 79 tuổi. Để lại 'Di chúc' bất hủ.",
    character:
      "Giản dị đến kinh ngạc — Chủ tịch nước nhưng ở nhà sàn gỗ, ăn cơm với cá kho và rau muống, đi đôi dép cao su tự chế. Khiêm tốn, không nhận danh hiệu, không tượng đài lúc sinh thời. Trí tuệ uyên bác — thành thạo 6 ngoại ngữ (Pháp, Anh, Nga, Trung, Đức, Tây Ban Nha), viết báo tiếng Pháp với bút danh Nguyễn Ái Quốc gây tiếng vang. Yêu trẻ em, yêu thiên nhiên — câu 'Trẻ em như búp trên cành' lay động lòng người. Tài thơ ca: 'Nhật ký trong tù' (133 bài thơ chữ Hán) là kiệt tác văn học. UNESCO vinh danh là 'Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất' (1987).",
    legacy:
      "CÔNG: Tìm ra con đường cứu nước đúng đắn (giải phóng dân tộc gắn với chủ nghĩa xã hội). Sáng lập Đảng và lãnh đạo nhân dân giành độc lập, đánh bại hai đế quốc lớn (Pháp, Mỹ). Tuyên ngôn Độc lập 2/9 — bản tuyên ngôn thứ ba sau 'Nam quốc sơn hà' và 'Bình Ngô đại cáo'. Tư tưởng Hồ Chí Minh là nền tảng tư tưởng của Đảng và Nhà nước Việt Nam.\nDI SẢN: Lăng Chủ tịch tại Ba Đình, Bảo tàng Hồ Chí Minh, Phủ Chủ tịch. Thành phố Hồ Chí Minh được đổi tên 1976 để tưởng nhớ. Giải thưởng Hồ Chí Minh - giải thưởng cao quý nhất của Nhà nước. Là biểu tượng của phong trào giải phóng dân tộc thế giới thế kỷ XX.",
    relations:
      "• NGUYỄN SINH SẮC (cha): nhà nho yêu nước, ảnh hưởng sâu sắc đến tư tưởng yêu nước của con.\n• HOÀNG THỊ LOAN (mẹ): mất sớm, để lại nỗi nhớ khôn nguôi.\n• PHAN BỘI CHÂU, PHAN CHÂU TRINH: hai bậc tiền bối yêu nước mà Người gặp ở Pháp - vừa kế thừa vừa vượt qua.\n• LÊNIN: lãnh tụ Cách mạng Tháng Mười Nga - người thầy tư tưởng (qua tác phẩm).\n• TRƯỜNG CHINH, LÊ DUẨN, PHẠM VĂN ĐỒNG, VÕ NGUYÊN GIÁP, NGUYỄN CHÍ THANH: các học trò xuất sắc, đồng chí thân thiết.\n• HOÀNG VĂN THỤ, NGUYỄN VĂN CỪ, LÊ HỒNG PHONG, NGUYỄN THỊ MINH KHAI: các nhà cách mạng tiền bối hi sinh.\n• TÔN ĐỨC THẮNG: kế nhiệm chức Chủ tịch nước.\n• ĐẶNG XUÂN KHU (Trường Chinh): Tổng Bí thư cùng thời.\n• MAO TRẠCH ĐÔNG, CHU ÂN LAI, FIDEL CASTRO: các lãnh tụ thế giới có quan hệ thân thiết.",
  },
  {
    id: "vo-nguyen-giap",
    name: "Võ Nguyên Giáp",
    era: "1911 – 2013",
    title: "Đại tướng huyền thoại",
    image: voNguyenGiap,
    achievement: "Tổng chỉ huy chiến dịch Điện Biên Phủ 1954 và chiến dịch Hồ Chí Minh 1975 — hai chiến thắng làm rung chuyển thế giới.",
    story:
      "Từ thầy giáo dạy sử trở thành thiên tài quân sự, Đại tướng Võ Nguyên Giáp lãnh đạo Quân đội Nhân dân Việt Nam đánh bại hai đế quốc lớn.",
    quote: "“Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa.”",
    personal:
      "Sinh ngày 25/8/1911 tại làng An Xá, xã Lộc Thủy, huyện Lệ Thủy, Quảng Bình. Cha là cụ Võ Quang Nghiêm — nhà nho dạy học, tham gia phong trào Cần Vương, sau bị Pháp bắt và mất trong tù (1947). Mẹ là bà Nguyễn Thị Kiên. Học tiểu học tại Đồng Hới, rồi Quốc học Huế (cùng thời với Ngô Đình Diệm, Phạm Văn Đồng), bị đuổi vì tham gia bãi khóa. Tốt nghiệp Cử nhân Luật và Kinh tế tại Đại học Đông Dương (Hà Nội). Vợ đầu Nguyễn Thị Quang Thái (em ruột bà Nguyễn Thị Minh Khai) — nữ chiến sĩ cách mạng, hy sinh trong nhà tù Pháp 1944. Vợ sau là Đặng Bích Hà — con gái GS. Đặng Thai Mai.",
    context:
      "Đầu thế kỷ XX, Việt Nam đang dưới ách thực dân Pháp. Sinh trưởng trong gia đình nho giáo yêu nước (cha tham gia Cần Vương), từ nhỏ Võ Nguyên Giáp đã sớm tiếp xúc tư tưởng yêu nước. Khi Đảng Cộng sản Việt Nam thành lập (1930), ông gia nhập ngay năm 19 tuổi. Bối cảnh Thế chiến II và Cách mạng Tháng Tám đặt ông — một thầy giáo dạy sử chưa từng học trường võ bị nào — vào vai trò xây dựng quân đội từ con số không, đối đầu với hai đế quốc quân sự hàng đầu thế giới (Pháp rồi Mỹ).",
    career:
      "• 1930: gia nhập Đảng Cộng sản Đông Dương.\n• 1937-1939: dạy lịch sử tại trường Tư thục Thăng Long (Hà Nội), được học sinh kính trọng.\n• 1940: sang Trung Quốc gặp Bác Hồ, được đào tạo chính trị - quân sự.\n• 22/12/1944: thành lập Đội Việt Nam Tuyên truyền Giải phóng quân — tiền thân Quân đội Nhân dân Việt Nam — với 34 chiến sĩ tại rừng Trần Hưng Đạo (Cao Bằng).\n• 1945: chỉ huy Tổng khởi nghĩa, Bộ trưởng Nội vụ Chính phủ lâm thời.\n• 1948: được phong ĐẠI TƯỚNG đầu tiên của Việt Nam khi mới 37 tuổi.\n• 1950: chỉ huy chiến dịch Biên giới đại thắng.\n• 13/3 - 7/5/1954: Tổng chỉ huy chiến dịch ĐIỆN BIÊN PHỦ — đưa ra 'quyết định khó khăn nhất cuộc đời': chuyển từ 'đánh nhanh thắng nhanh' sang 'đánh chắc tiến chắc'.\n• 1954-1975: Tổng Tư lệnh Quân đội Nhân dân Việt Nam, Bộ trưởng Quốc phòng.\n• Mùa Xuân 1975: chỉ đạo Chiến dịch Hồ Chí Minh với mệnh lệnh nổi tiếng 'Thần tốc, thần tốc hơn nữa'.\n• 1980: thôi giữ Bộ trưởng Quốc phòng, chuyển sang phụ trách Khoa học - Kỹ thuật, Dân số.\n• Viết hàng chục cuốn sách về quân sự, lịch sử (Từ nhân dân mà ra, Điện Biên Phủ, Đường tới Điện Biên Phủ...).\n• 4/10/2013: từ trần tại Hà Nội, thọ 103 tuổi — đám tang lớn nhất Việt Nam thời hiện đại.",
    character:
      "Trí tuệ uyên bác kết hợp ý chí thép — được mệnh danh 'Đại tướng nhân dân'. Khiêm tốn lạ thường: từ chối tự đề cao cá nhân, luôn nhấn mạnh công lao tập thể và Bác Hồ. Quyết đoán nhưng cẩn trọng — tại Điện Biên Phủ dám đảo ngược kế hoạch đã thông qua khi nhận ra rủi ro, dù phải lùi lịch tấn công. Yêu thương binh sĩ như con em — câu nói 'Tướng phải coi binh sĩ như con em mình' của ông trở thành kim chỉ nam. Đam mê đọc sách lịch sử và chơi piano. Sống giản dị, không tham quyền cố vị, vui vẻ chấp nhận chuyển công tác xuống lĩnh vực Dân số (1984) — một câu chuyện thể hiện đức độ.",
    legacy:
      "CÔNG: Là Đại tướng đầu tiên và xuất sắc nhất của Quân đội Nhân dân Việt Nam — xây dựng từ 34 chiến sĩ thành đội quân chính quy đánh bại hai siêu cường. Điện Biên Phủ là mốc son chấm dứt chủ nghĩa thực dân cũ; Đại thắng mùa Xuân 1975 chấm dứt chiến tranh thống nhất đất nước. Là một trong 21 vị tướng vĩ đại nhất mọi thời đại theo bình chọn của các học giả phương Tây (cùng Alexander Đại đế, Napoleon, Trần Hưng Đạo). Tư tưởng quân sự 'chiến tranh nhân dân' được giảng dạy tại nhiều học viện quân sự thế giới (West Point - Mỹ, Saint-Cyr - Pháp).\nDI SẢN: Mộ tại Vũng Chùa - Đảo Yến (Quảng Bình) - điểm hành hương lớn. Bảo tàng Đại tướng tại 30 Hoàng Diệu (Hà Nội). Tên ông được đặt cho nhiều đại lộ trên cả nước.",
    relations:
      "• HỒ CHÍ MINH (lãnh tụ - người thầy): Bác Hồ trực tiếp giao nhiệm vụ thành lập đội quân đầu tiên, giao quân hàm Đại tướng năm 37 tuổi.\n• NGUYỄN THỊ QUANG THÁI (vợ đầu): nữ chiến sĩ cách mạng, em ruột Nguyễn Thị Minh Khai, hy sinh trong tù 1944.\n• ĐẶNG BÍCH HÀ (vợ sau): con gái GS. Đặng Thai Mai, người bạn đời tri kỷ.\n• ĐẶNG THAI MAI (cha vợ): học giả lớn, người ảnh hưởng đến tư tưởng học thuật của ông.\n• TRƯỜNG CHINH, PHẠM VĂN ĐỒNG, LÊ DUẨN: các đồng chí lãnh đạo Đảng - Nhà nước.\n• NGUYỄN CHÍ THANH (Đại tướng): bạn chiến đấu, từng có khác biệt quan điểm về chiến lược nhưng cùng phụng sự Tổ quốc.\n• HOÀNG VĂN THÁI, VĂN TIẾN DŨNG, LÊ TRỌNG TẤN, NGUYỄN HỮU AN: các tướng lĩnh thân cận, học trò xuất sắc.\n• HENRI NAVARRE, CHRISTIAN DE CASTRIES: các tướng Pháp tại Điện Biên Phủ — đối thủ trực tiếp.\n• WILLIAM WESTMORELAND, CREIGHTON ABRAMS: các tướng Mỹ trong chiến tranh Việt Nam — đối thủ tại miền Nam.\n• MCNAMARA: Bộ trưởng Quốc phòng Mỹ, sau này gặp lại Đại tướng năm 1995 và thừa nhận Mỹ đã sai lầm.",
  },
];
