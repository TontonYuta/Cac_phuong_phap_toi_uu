import { Lesson } from '../lessons';

export const nonlinearLesson: Lesson = {
  id: "nonlinear",
  title: "Chương 4: Tối ưu hóa Phi tuyến",
  content: `
# Tối ưu hóa Phi tuyến (Nonlinear Programming)

Bài toán tối ưu hóa phi tuyến không ràng buộc:
$$ \\min f(x), \\quad x \\in \\mathbb{R}^n $$

### Điều kiện tối ưu:
- **Điều kiện cần bậc nhất**: $\\nabla f(x^*) = 0$ (Điểm dừng).
- **Điều kiện cần bậc hai**: $\\nabla^2 f(x^*)$ là ma trận nửa xác định dương.

### Các phương pháp giải:
1. **Phương pháp Gradient Descent**:
   $$ x_{k+1} = x_k - \\alpha_k \\nabla f(x_k) $$
2. **Phương pháp Newton**:
   $$ x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k) $$

### Tối ưu hóa có ràng buộc:
Sử dụng **Hàm Lagrange**:
$$ L(x, \\lambda) = f(x) + \\sum \\lambda_i g_i(x) $$
Điều kiện **KKT (Karush-Kuhn-Tucker)** là điều kiện cần cho tối ưu hóa có ràng buộc bất đẳng thức.
    `,
  quiz: [
    {
      id: "q4-1",
      question: "Phương pháp Newton sử dụng thông tin đạo hàm đến bậc mấy?",
      options: ["Bậc 0", "Bậc 1", "Bậc 2", "Bậc 3"],
      correctAnswer: 2,
      explanation: "Phương pháp Newton sử dụng cả Gradient (bậc 1) và ma trận Hessian (bậc 2) để tìm hướng đi tối ưu."
    }
  ],
  exercises: [
    {
      problem: "Tìm cực trị của hàm $f(x, y) = x^2 + y^2$ với ràng buộc $x + y = 2$.",
      solution: "Sử dụng nhân tử Lagrange: $L(x, y, \\lambda) = x^2 + y^2 + \\lambda(x + y - 2)$.\n\n$\\frac{\\partial L}{\\partial x} = 2x + \\lambda = 0 \\Rightarrow x = -\\lambda/2$\n$\\frac{\\partial L}{\\partial y} = 2y + \\lambda = 0 \\Rightarrow y = -\\lambda/2$\n\nThay vào ràng buộc: $-\\lambda/2 - \\lambda/2 = 2 \\Rightarrow \\lambda = -2$.\n\nVậy $x = 1, y = 1$. Điểm tối ưu là $(1, 1)$."
    }
  ]
};
