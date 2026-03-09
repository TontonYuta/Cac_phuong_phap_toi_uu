import { Lesson } from '../lessons';

export const introLesson: Lesson = {
  id: "intro",
  title: "Chương 1: Tổng quan về Tối ưu hóa",
  content: `
# Tổng quan về Bài toán Tối ưu hóa

Bài toán tối ưu hóa tổng quát có dạng:

$$
\\min f(x) \\quad \\text{với } x \\in S \\subseteq \\mathbb{R}^n
$$

Trong đó:
- $f(x)$ là **hàm mục tiêu**.
- $S$ là **tập phương án** (tập chấp nhận được).
- $x$ là **biến quyết định**.

### Các thành phần chính:
1. **Biến quyết định**: $x = (x_1, x_2, ..., x_n)^T$.
2. **Hàm mục tiêu**: Hàm số cần cực tiểu hóa hoặc cực đại hóa.
3. **Các ràng buộc**:
   - Ràng buộc đẳng thức: $g_i(x) = 0, i = 1, ..., m$.
   - Ràng buộc bất đẳng thức: $h_j(x) \\le 0, j = 1, ..., p$.

### Phân loại bài toán:
- **Quy hoạch tuyến tính (LP)**: Cả hàm mục tiêu và ràng buộc đều là hàm bậc nhất.
- **Quy hoạch phi tuyến (NLP)**: Ít nhất một thành phần là phi tuyến.
- **Quy hoạch nguyên (IP)**: Các biến $x_i$ phải nhận giá trị nguyên.
    `,
  quiz: [
    {
      id: "q1-1",
      question: "Trong bài toán tối ưu, tập hợp tất cả các điểm thỏa mãn mọi ràng buộc được gọi là gì?",
      options: ["Tập mục tiêu", "Tập phương án", "Tập biến số", "Tập cực trị"],
      correctAnswer: 1,
      explanation: "Tập phương án (hay tập chấp nhận được) là tập hợp các điểm thỏa mãn tất cả các ràng buộc của bài toán."
    }
  ],
  exercises: [
    {
      problem: "Xác định hàm mục tiêu và các ràng buộc cho bài toán: Một nhà máy sản xuất hai loại sản phẩm A và B. Mỗi đơn vị A cần 2h máy và 1kg nguyên liệu. Mỗi đơn vị B cần 1h máy và 3kg nguyên liệu. Tổng thời gian máy có hạn là 40h, nguyên liệu là 30kg. Lợi nhuận mỗi đơn vị A là 5$, B là 4$. Hãy lập mô hình toán học để tối đa hóa lợi nhuận.",
      solution: "Gọi $x_1, x_2$ lần lượt là số lượng sản phẩm A và B sản xuất ($x_1, x_2 \\ge 0$).\n\nHàm mục tiêu: $f(x) = 5x_1 + 4x_2 \\to \\max$\n\nRàng buộc:\n- Thời gian máy: $2x_1 + x_2 \\le 40$\n- Nguyên liệu: $x_1 + 3x_2 \\le 30$"
    }
  ]
};
