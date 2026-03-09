import { Lesson } from '../../lessons';

export const lesson2: Lesson = {
  id: "ch4-l2",
  title: "4.2 Điều kiện KKT",
  content: `
# Điều kiện Karush-Kuhn-Tucker (KKT)

Khi bài toán tối ưu hóa phi tuyến có chứa các ràng buộc (đẳng thức hoặc bất đẳng thức), ta không thể chỉ dùng Gradient bằng 0 như bài toán không ràng buộc. Thay vào đó, ta sử dụng **Điều kiện KKT**.

Điều kiện KKT là điều kiện **cần** để một điểm là cực trị địa phương. Nếu bài toán là bài toán lồi (hàm mục tiêu lồi, tập phương án lồi), thì KKT cũng là điều kiện **đủ** để điểm đó là cực tiểu toàn cục.

---

### 1. Bài toán tổng quát
Xét bài toán tối ưu hóa:
$$ \\min f(x) $$
s.t.
$$ g_i(x) \\le 0, \\quad i = 1, 2, ..., m \\quad \\text{(Ràng buộc bất đẳng thức)} $$
$$ h_j(x) = 0, \\quad j = 1, 2, ..., p \\quad \\text{(Ràng buộc đẳng thức)} $$

### 2. Hàm Lagrange
Ta đưa các ràng buộc vào hàm mục tiêu thông qua các nhân tử Lagrange $\\lambda_i$ (cho bất đẳng thức) và $\\mu_j$ (cho đẳng thức) để tạo thành **Hàm Lagrange**:
$$ L(x, \\lambda, \\mu) = f(x) + \\sum_{i=1}^m \\lambda_i g_i(x) + \\sum_{j=1}^p \\mu_j h_j(x) $$

### 3. Hệ điều kiện KKT
Một điểm $x^*$ (cùng với các nhân tử $\\lambda^*, \\mu^*$) thỏa mãn điều kiện KKT nếu nó thỏa mãn 4 nhóm phương trình/bất phương trình sau:

**1. Tính dừng (Stationarity):**
Gradient của hàm Lagrange theo biến $x$ phải bằng 0.
$$ \\nabla_x L(x^*, \\lambda^*, \\mu^*) = \\nabla f(x^*) + \\sum_{i=1}^m \\lambda^*_i \\nabla g_i(x^*) + \\sum_{j=1}^p \\mu^*_j \\nabla h_j(x^*) = 0 $$

**2. Tính chấp nhận được của bài toán Gốc (Primal Feasibility):**
Điểm $x^*$ phải thỏa mãn các ràng buộc ban đầu.
$$ g_i(x^*) \\le 0, \\quad \\forall i $$
$$ h_j(x^*) = 0, \\quad \\forall j $$

**3. Tính đối ngẫu (Dual Feasibility):**
Nhân tử Lagrange ứng với ràng buộc bất đẳng thức ($\\le$) trong bài toán MIN phải không âm.
$$ \\lambda^*_i \\ge 0, \\quad \\forall i $$
*(Lưu ý: Nhân tử $\\mu_j$ của ràng buộc đẳng thức thì tùy ý, không bị ràng buộc dấu).*

**4. Độ lệch bù (Complementary Slackness):**
Tích của nhân tử Lagrange và hàm ràng buộc bất đẳng thức phải bằng 0.
$$ \\lambda^*_i g_i(x^*) = 0, \\quad \\forall i $$
*(Ý nghĩa: Nếu ràng buộc lỏng $g_i(x^*) < 0$, thì nhân tử $\\lambda^*_i = 0$. Nếu nhân tử $\\lambda^*_i > 0$, thì ràng buộc phải chặt $g_i(x^*) = 0$).*
  `,
  quiz: [
    {
      id: "q4-2-1",
      question: "Trong điều kiện KKT, nhân tử Lagrange $\\mu_j$ ứng với ràng buộc đẳng thức $h_j(x) = 0$ có điều kiện về dấu như thế nào?",
      options: ["$\\mu_j \\ge 0$", "$\\mu_j \\le 0$", "$\\mu_j = 0$", "Tùy ý (không ràng buộc dấu)"],
      correctAnswer: 3,
      explanation: "Trong điều kiện KKT, chỉ có nhân tử $\\lambda_i$ của ràng buộc bất đẳng thức mới bị ràng buộc dấu ($\\lambda_i \\ge 0$). Nhân tử $\\mu_j$ của ràng buộc đẳng thức có thể nhận giá trị âm, dương hoặc bằng 0."
    },
    {
      id: "q4-2-2",
      question: "Điều kiện 'Độ lệch bù' (Complementary Slackness) trong KKT được biểu diễn bằng phương trình nào?",
      options: ["$\\nabla_x L = 0$", "$\\lambda_i g_i(x) = 0$", "$g_i(x) \\le 0$", "$\\lambda_i \\ge 0$"],
      correctAnswer: 1,
      explanation: "Độ lệch bù quy định rằng tích của nhân tử Lagrange và hàm ràng buộc bất đẳng thức tương ứng phải bằng 0: $\\lambda_i g_i(x) = 0$."
    },
    {
      id: "q4-2-3",
      question: "Nếu bài toán tối ưu là bài toán lồi (hàm mục tiêu lồi, các hàm ràng buộc $g_i$ lồi, $h_j$ tuyến tính), thì điều kiện KKT có vai trò gì?",
      options: ["Chỉ là điều kiện cần", "Chỉ là điều kiện đủ", "Là điều kiện cần và đủ", "Không áp dụng được"],
      correctAnswer: 2,
      explanation: "Đối với bài toán tối ưu lồi thỏa mãn điều kiện chính quy (Slater's condition), điều kiện KKT vừa là điều kiện cần vừa là điều kiện đủ để một điểm là nghiệm tối ưu toàn cục."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Viết hàm Lagrange và hệ điều kiện KKT cho bài toán sau:\n$\\min f(x,y) = x^2 + y^2$\ns.t. $x + y - 2 \\le 0$",
      solution: "1. **Đưa về dạng chuẩn:**\nHàm mục tiêu: $f(x,y) = x^2 + y^2$\nRàng buộc: $g_1(x,y) = x + y - 2 \\le 0$\n\n2. **Hàm Lagrange:**\n$L(x, y, \\lambda) = x^2 + y^2 + \\lambda(x + y - 2)$\n\n3. **Hệ điều kiện KKT:**\n- **Tính dừng:**\n  $\\frac{\\partial L}{\\partial x} = 2x + \\lambda = 0$\n  $\\frac{\\partial L}{\\partial y} = 2y + \\lambda = 0$\n- **Tính chấp nhận được (Primal):**\n  $x + y - 2 \\le 0$\n- **Tính đối ngẫu (Dual):**\n  $\\lambda \\ge 0$\n- **Độ lệch bù:**\n  $\\lambda(x + y - 2) = 0$"
    },
    {
      problem: "**Bài 2:** Giải hệ KKT vừa thiết lập ở Bài 1 để tìm nghiệm tối ưu $(x^*, y^*)$.",
      solution: "Từ hệ KKT ở Bài 1, ta xét 2 trường hợp dựa vào điều kiện độ lệch bù $\\lambda(x + y - 2) = 0$:\n\n**Trường hợp 1: $\\lambda = 0$ (Ràng buộc lỏng)**\n- Thay $\\lambda = 0$ vào phương trình tính dừng:\n  $2x + 0 = 0 \\Rightarrow x = 0$\n  $2y + 0 = 0 \\Rightarrow y = 0$\n- Kiểm tra điều kiện Primal: $0 + 0 - 2 = -2 \\le 0$ (Thỏa mãn).\n- Vậy $(0, 0)$ là một điểm KKT. Giá trị hàm mục tiêu $f(0,0) = 0$.\n\n**Trường hợp 2: $x + y - 2 = 0$ (Ràng buộc chặt)**\n- Từ phương trình tính dừng: $x = -\\lambda/2$ và $y = -\\lambda/2$.\n- Thay vào ràng buộc chặt: $(-\\lambda/2) + (-\\lambda/2) - 2 = 0 \\Rightarrow -\\lambda = 2 \\Rightarrow \\lambda = -2$.\n- Kiểm tra điều kiện Dual: $\\lambda = -2 < 0$ (Vi phạm điều kiện $\\lambda \\ge 0$).\n- Trường hợp này loại.\n\n**Kết luận:** Bài toán có nghiệm tối ưu duy nhất là $(x^*, y^*) = (0, 0)$ với $f_{min} = 0$."
    },
    {
      problem: "**Bài 3:** Viết hàm Lagrange cho bài toán có cả ràng buộc đẳng thức và bất đẳng thức:\n$\\min f(x,y,z) = x^2 + y^2 + z^2$\ns.t.\n$x + 2y + z = 4$\n$x - y \\le 1$",
      solution: "1. **Xác định các hàm:**\nHàm mục tiêu: $f(x,y,z) = x^2 + y^2 + z^2$\nRàng buộc đẳng thức: $h_1(x,y,z) = x + 2y + z - 4 = 0$\nRàng buộc bất đẳng thức: $g_1(x,y,z) = x - y - 1 \\le 0$\n\n2. **Xác định nhân tử:**\nGọi $\\mu$ là nhân tử cho $h_1$ (không ràng buộc dấu).\nGọi $\\lambda$ là nhân tử cho $g_1$ (với $\\lambda \\ge 0$).\n\n3. **Hàm Lagrange:**\n$L(x, y, z, \\lambda, \\mu) = f + \\lambda g_1 + \\mu h_1$\n$L(x, y, z, \\lambda, \\mu) = x^2 + y^2 + z^2 + \\lambda(x - y - 1) + \\mu(x + 2y + z - 4)$\n\n*(Hệ KKT sẽ bao gồm các đạo hàm riêng của $L$ theo $x, y, z$ bằng 0, các ràng buộc ban đầu, $\\lambda \\ge 0$, và $\\lambda(x - y - 1) = 0$)*."
    }
  ]
};
