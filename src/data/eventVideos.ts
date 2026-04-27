export interface EventVideo {
  id: string;
  title: string;
  /** YouTube video ID, e.g. "dQw4w9WgXcQ" */
  youtubeId: string;
  description?: string;
}

/**
 * Danh sách video sự kiện lịch sử.
 * Để thêm video mới, chỉ cần thêm 1 object vào mảng dưới đây.
 * - title: Tên sự kiện
 * - youtubeId: lấy phần sau "v=" trong link YouTube
 *   Ví dụ: https://www.youtube.com/watch?v=ABC123  →  youtubeId: "ABC123"
 */
export const eventVideos: EventVideo[] = [
  // Ví dụ mẫu — hãy thay bằng các sự kiện và video bạn muốn:
  // {
  //   id: "dien-bien-phu",
  //   title: "Chiến thắng Điện Biên Phủ (1954)",
  //   youtubeId: "XXXXXXXXXXX",
  //   description: "Lừng lẫy năm châu, chấn động địa cầu.",
  // },
];
