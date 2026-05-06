export interface EventVideo {
  id: string;
  title: string;
  /** YouTube video ID, e.g. "dQw4w9WgXcQ" */
  youtubeId: string;
  description?: string;
}

/**
 * Danh sách video sự kiện lịch sử.
 */
export const eventVideos: EventVideo[] = [
  { id: "vua-hung", title: "Vua Hùng dựng nước Văn Lang", youtubeId: "nGDnoy9cuQw" },
  { id: "hai-ba-trung", title: "Khởi nghĩa Hai Bà Trưng", youtubeId: "vqvXYvF4Yes" },
  { id: "bach-dang-938", title: "Đại thắng Bạch Đằng", youtubeId: "6SVQ12dXV3c" },
  { id: "dinh-bo-linh", title: "Đinh Bộ Lĩnh dẹp loạn 12 sứ quân", youtubeId: "NLRYvB5VFYk" },
  { id: "nhu-nguyet", title: "Phá Tống trên sông Như Nguyệt", youtubeId: "BVtAgShyFDg" },
  { id: "bach-dang-1288", title: "Đại thắng sông Bạch Đằng", youtubeId: "ZPIUuLtRUFY" },
  { id: "lam-son", title: "Khởi nghĩa Lam Sơn", youtubeId: "7hYLCHS-WHU" },
  { id: "dai-pha-quan-thanh", title: "Đại phá Quân Thanh", youtubeId: "HD89UaWkVQk" },
  { id: "cach-mang-thang-tam", title: "Cách mạng tháng Tám", youtubeId: "zgR6nH84wsQ" },
  { id: "viet-bac-1947", title: "Chiến dịch Việt Bắc Thu Đông", youtubeId: "Al16C_Qd6vE" },
  { id: "bien-gioi-1950", title: "Chiến dịch Biên giới Thu Đông", youtubeId: "hbRc5eFXARM" },
  { id: "dien-bien-phu", title: "Chiến dịch Điện Biên Phủ", youtubeId: "CD8sKixEDsI" },
  { id: "ap-bac", title: "Chiến thắng Ấp Bắc", youtubeId: "pP0P08Z4x3U" },
  { id: "dong-khoi", title: "Phong trào Đồng Khởi", youtubeId: "roJNRmlG9Yk" },
  { id: "mau-than-1968", title: "Tổng tiến công và nổi dậy Mậu Thân", youtubeId: "YpThj9yGzeM" },
  { id: "dbp-tren-khong", title: "Điện Biên Phủ trên không", youtubeId: "B_h556DlLmw" },
  { id: "mua-xuan-1975", title: "Đại thắng mùa Xuân", youtubeId: "aqMp24oZJa8" },
  { id: "hiep-dinh-paris", title: "Hành trình ký hiệp định Paris", youtubeId: "XWOa3P3QbRQ" },
  { id: "hiep-dinh-geneva", title: "Hiệp định Giơnevơ", youtubeId: "2Qis0c3H5j4" },
  { id: "bach-dang-lan-3", title: "Đại thắng Bạch Đằng lần thứ ba", youtubeId: "dWOqP_OgEsI" },
];
