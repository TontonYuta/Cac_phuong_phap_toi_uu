import { Lesson } from '../lessons';

export const linearProgrammingLesson: Lesson = {
  id: "linear-programming",
  title: "Chương 2: Quy hoạch tuyến tính & Phương pháp Đơn hình",
  content: `
# Quy hoạch tuyến tính (Linear Programming)

Dạng chính tắc của bài toán QHTT:

$$
\\min f(x) = c^T x
$$
$$
\\text{s.t. } Ax = b, \\quad x \\ge 0
$$

### Phương pháp Đơn hình (Simplex Method)
Đây là thuật toán phổ biến nhất để giải bài toán QHTT. Ý tưởng chính là di chuyển giữa các **điểm cực biên** của tập phương án (vốn là một đa diện lồi) để tìm điểm tối ưu.

### Các bước thực hiện:
1. Đưa bài toán về dạng chuẩn (thêm biến phụ, biến bù).
2. Tìm một phương án cực biên ban đầu (PACB).
3. Lập bảng đơn hình.
4. Kiểm tra tính tối ưu thông qua các ước lượng $\\Delta_j$.
5. Nếu chưa tối ưu, thực hiện phép xoay để chuyển sang PACB tốt hơn.

### Ví dụ:
Giải bài toán:
$$ \\max f = 2x_1 + 3x_2 $$
$$ \\text{s.t. } x_1 + x_2 \\le 4, \\quad x_1, x_2 \\ge 0 $$
    `,
  quiz: [
    {
      id: "q2-1",
      question: "Điều kiện để một bài toán QHTT có lời giải tối ưu nằm ở đâu?",
      options: ["Nằm bên trong tập phương án", "Nằm tại ít nhất một điểm cực biên", "Nằm tại gốc tọa độ", "Không bao giờ có lời giải"],
      correctAnswer: 1,
      explanation: "Theo định lý cơ bản của QHTT, nếu bài toán có lời giải tối ưu, thì ít nhất một lời giải tối ưu sẽ nằm tại điểm cực biên của tập phương án."
    }
  ],
  exercises: [
    {
      problem: "Sử dụng phương pháp đơn hình giải bài toán: $\\max f = 3x_1 + 2x_2$ với $x_1 + x_2 \\le 4, 2x_1 + x_2 \\le 5, x_1, x_2 \\ge 0$.",
      solution: "1. Thêm biến phụ $x_3, x_4$: \n$x_1 + x_2 + x_3 = 4$\n$2x_1 + x_2 + x_4 = 5$\n\n2. Bảng đơn hình ban đầu với cơ sở $(x_3, x_4)$.\n\n3. Sau các bước xoay, ta được kết quả tối ưu tại $x_1 = 1, x_2 = 3$ với $f_{max} = 9$."
    }
  ]
};
