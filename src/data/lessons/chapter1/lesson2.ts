import { Lesson } from '../../lessons';

export const lesson2: Lesson = {
  id: "ch1-l2",
  title: "1.2 Tập lồi và Hàm lồi",
  content: `
# Tập lồi và Hàm lồi

Tính lồi đóng vai trò cốt lõi trong tối ưu hóa. Đối với bài toán tối ưu lồi, **mọi cực trị địa phương đều là cực trị toàn cục**, giúp các thuật toán dễ dàng tìm được nghiệm tối ưu mà không bị kẹt ở cực tiểu địa phương.

---

### 1. Tập lồi (Convex Set)
Một tập $S \\subseteq \\mathbb{R}^n$ được gọi là tập lồi nếu đoạn thẳng nối hai điểm bất kỳ thuộc $S$ cũng nằm hoàn toàn trong $S$.

**Định nghĩa toán học:**
Tập $S$ lồi $\\iff \\forall x, y \\in S, \\forall \\lambda \\in [0, 1]$, ta có:
$$ \\lambda x + (1-\\lambda)y \\in S $$

**Tính chất của tập lồi:**
- Giao của các tập lồi là một tập lồi.
- Tập hợp các điểm thỏa mãn hệ bất phương trình tuyến tính $Ax \\le b$ là một tập lồi (đa diện lồi).
- Hình tròn, hình elip, nửa mặt phẳng là các tập lồi. Hình vành khăn, hình ngôi sao không phải là tập lồi.

---

### 2. Hàm lồi (Convex Function)
Hàm $f: S \\to \\mathbb{R}$ (với $S$ là tập lồi) được gọi là hàm lồi nếu đồ thị của nó luôn nằm dưới đoạn thẳng nối hai điểm bất kỳ trên đồ thị.

**Định nghĩa toán học:**
Hàm $f$ lồi trên $S$ $\\iff \\forall x, y \\in S, \\forall \\lambda \\in [0, 1]$, ta có:
$$ f(\\lambda x + (1-\\lambda)y) \\le \\lambda f(x) + (1-\\lambda)f(y) $$

Nếu dấu $\\le$ được thay bằng $<$, ta có hàm **lồi nghiêm ngặt** (strictly convex).

**Kiểm tra tính lồi bằng ma trận Hessian:**
Nếu hàm $f$ có đạo hàm bậc hai liên tục, ta xét ma trận Hessian $\\nabla^2 f(x)$:
- Nếu $\\nabla^2 f(x)$ là ma trận **nửa xác định dương** (Positive Semi-Definite - PSD) $\\forall x \\in S$, thì $f$ là hàm lồi.
- Nếu $\\nabla^2 f(x)$ là ma trận **xác định dương** (Positive Definite - PD) $\\forall x \\in S$, thì $f$ là hàm lồi nghiêm ngặt.

*Nhắc lại:* Ma trận vuông $H$ cỡ $n \\times n$ là PSD nếu các định thức con chính (Principal Minors) đều $\\ge 0$. Nó là PD nếu các định thức con chính góc trái trên (Leading Principal Minors) đều $> 0$.

---

### 3. Bài toán tối ưu lồi
Bài toán: $\\min f(x)$ với $x \\in S$.
Được gọi là bài toán tối ưu lồi nếu:
1. Tập phương án $S$ là tập lồi.
2. Hàm mục tiêu $f(x)$ là hàm lồi.

---

### 4. Các dạng bài tập thường gặp

**Dạng 1: Kiểm tra tập lồi bằng định nghĩa**
- Lấy 2 điểm bất kỳ $x, y \\in S$.
- Lấy $\\lambda \\in [0, 1]$.
- Chứng minh điểm $z = \\lambda x + (1-\\lambda)y$ cũng thỏa mãn điều kiện của tập $S$.

**Dạng 2: Kiểm tra hàm lồi bằng ma trận Hessian**
- Tính vector Gradient $\\nabla f(x)$.
- Tính ma trận Hessian $H = \\nabla^2 f(x)$.
- Xét dấu các định thức con chính (hoặc trị riêng) của $H$.

**Dạng 3: Chứng minh tính lồi thông qua các phép toán bảo toàn tính lồi**
- Tổng của các hàm lồi là hàm lồi.
- Hàm hợp $f(g(x))$ với $f$ lồi không giảm và $g$ lồi thì $f(g(x))$ lồi.
- Max của các hàm lồi là hàm lồi: $h(x) = \\max\\{f_1(x), f_2(x)\\}$.
  `,
  quiz: [
    {
      id: "q1-2-1",
      question: "Đặc điểm quan trọng nhất của bài toán tối ưu lồi là gì?",
      options: ["Luôn có nghiệm duy nhất", "Mọi cực trị địa phương đều là cực trị toàn cục", "Tập phương án luôn bị chặn", "Hàm mục tiêu luôn là hàm tuyến tính"],
      correctAnswer: 1,
      explanation: "Tính chất quan trọng nhất của bài toán lồi là mọi điểm cực tiểu địa phương đều là cực tiểu toàn cục, giúp thuật toán dễ dàng tìm được nghiệm tối ưu."
    },
    {
      id: "q1-2-2",
      question: "Tập hợp nào sau đây KHÔNG phải là tập lồi?",
      options: ["Hình tròn", "Nửa mặt phẳng", "Đường tròn", "Hình chữ nhật"],
      correctAnswer: 2,
      explanation: "Đường tròn (chỉ gồm các điểm trên viền) không phải là tập lồi, vì đoạn thẳng nối 2 điểm trên đường tròn sẽ đi qua phần bên trong (không thuộc đường tròn). Hình tròn (gồm cả viền và bên trong) mới là tập lồi."
    },
    {
      id: "q1-2-3",
      question: "Để kiểm tra một hàm số có đạo hàm bậc hai là hàm lồi, ta cần kiểm tra điều kiện gì của ma trận Hessian?",
      options: ["Xác định âm", "Nửa xác định âm", "Xác định dương", "Nửa xác định dương"],
      correctAnswer: 3,
      explanation: "Hàm số là hàm lồi nếu ma trận Hessian của nó là nửa xác định dương (Positive Semi-Definite) tại mọi điểm."
    },
    {
      id: "q1-2-4",
      question: "Cho $f_1(x)$ và $f_2(x)$ là hai hàm lồi. Hàm số nào sau đây chắc chắn là hàm lồi?",
      options: ["$f_1(x) - f_2(x)$", "$f_1(x) \\times f_2(x)$", "$\\max\\{f_1(x), f_2(x)\\}$", "$\\min\\{f_1(x), f_2(x)\\}"],
      correctAnswer: 2,
      explanation: "Hàm max của các hàm lồi luôn là một hàm lồi. Các phép toán trừ, nhân, hoặc lấy min không bảo toàn tính lồi."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Chứng minh tập hợp $S = \\{ (x, y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 4 \\}$ là một tập lồi.",
      solution: "Lấy 2 điểm bất kỳ $A(x_1, y_1)$ và $B(x_2, y_2)$ thuộc $S$. Ta có $x_1^2 + y_1^2 \\le 4$ và $x_2^2 + y_2^2 \\le 4$.\n\nXét điểm $C = \\lambda A + (1-\\lambda)B$ với $\\lambda \\in [0, 1]$. Tọa độ của $C$ là $(\\lambda x_1 + (1-\\lambda)x_2, \\lambda y_1 + (1-\\lambda)y_2)$.\n\nTa cần chứng minh $C \\in S$, tức là $(\\lambda x_1 + (1-\\lambda)x_2)^2 + (\\lambda y_1 + (1-\\lambda)y_2)^2 \\le 4$.\n\nÁp dụng bất đẳng thức Cauchy-Schwarz hoặc tính lồi của hàm $f(x,y) = x^2+y^2$:\n$f(\\lambda A + (1-\\lambda)B) \\le \\lambda f(A) + (1-\\lambda)f(B)$\n$\\le \\lambda(4) + (1-\\lambda)(4) = 4$.\n\nVậy $C \\in S$, suy ra $S$ là tập lồi."
    },
    {
      problem: "**Bài 2:** Xét hàm số $f(x_1, x_2) = x_1^2 + 2x_2^2 - x_1x_2$. Hãy lập ma trận Hessian và kiểm tra xem hàm số này có phải là hàm lồi hay không.",
      solution: "1. Tính các đạo hàm riêng bậc nhất:\n$\\frac{\\partial f}{\\partial x_1} = 2x_1 - x_2$\n$\\frac{\\partial f}{\\partial x_2} = 4x_2 - x_1$\n\n2. Tính các đạo hàm riêng bậc hai để lập ma trận Hessian $H$:\n$\\frac{\\partial^2 f}{\\partial x_1^2} = 2$\n$\\frac{\\partial^2 f}{\\partial x_2^2} = 4$\n$\\frac{\\partial^2 f}{\\partial x_1 \\partial x_2} = \\frac{\\partial^2 f}{\\partial x_2 \\partial x_1} = -1$\n\nMa trận Hessian: $H = \\begin{pmatrix} 2 & -1 \\\\ -1 & 4 \\end{pmatrix}$\n\n3. Kiểm tra tính xác định dương của $H$ bằng các định thức con chính góc trái trên:\n- $D_1 = |2| = 2 > 0$\n- $D_2 = \\det(H) = 2 \\times 4 - (-1) \\times (-1) = 8 - 1 = 7 > 0$\n\nVì $D_1 > 0$ và $D_2 > 0$, ma trận $H$ xác định dương. Do đó, hàm số $f(x_1, x_2)$ là hàm lồi nghiêm ngặt."
    },
    {
      problem: "**Bài 3:** Cho hàm số $f(x) = e^x$. Chứng minh $f(x)$ là hàm lồi trên $\\mathbb{R}$ bằng định nghĩa.",
      solution: "Theo định nghĩa, ta cần chứng minh với mọi $x, y \\in \\mathbb{R}$ và $\\lambda \\in [0, 1]$:\n$e^{\\lambda x + (1-\\lambda)y} \\le \\lambda e^x + (1-\\lambda)e^y$\n\nĐây chính là bất đẳng thức AM-GM suy rộng (hoặc bất đẳng thức Jensen cho hàm mũ).\n\nCách khác đơn giản hơn là dùng đạo hàm bậc hai:\n$f'(x) = e^x$\n$f''(x) = e^x > 0 \\quad \\forall x \\in \\mathbb{R}$\n\nVì đạo hàm bậc hai luôn dương, hàm số $e^x$ là hàm lồi nghiêm ngặt trên $\\mathbb{R}$."
    },
    {
      problem: "**Bài 4:** Cho tập hợp $S = \\{ (x, y) \\in \\mathbb{R}^2 \\mid y \\ge x^2 \\}$. Chứng minh $S$ là tập lồi.",
      solution: "Lấy 2 điểm $A(x_1, y_1)$ và $B(x_2, y_2)$ thuộc $S$. Ta có $y_1 \\ge x_1^2$ và $y_2 \\ge x_2^2$.\nXét điểm $C = \\lambda A + (1-\\lambda)B = (\\lambda x_1 + (1-\\lambda)x_2, \\lambda y_1 + (1-\\lambda)y_2)$ với $\\lambda \\in [0, 1]$.\nTa cần chứng minh $C \\in S$, tức là $\\lambda y_1 + (1-\\lambda)y_2 \\ge (\\lambda x_1 + (1-\\lambda)x_2)^2$.\n\nTa có hàm số $f(x) = x^2$ là hàm lồi trên $\\mathbb{R}$ (vì $f''(x) = 2 > 0$).\nTheo định nghĩa hàm lồi:\n$f(\\lambda x_1 + (1-\\lambda)x_2) \\le \\lambda f(x_1) + (1-\\lambda)f(x_2)$\n$\\Rightarrow (\\lambda x_1 + (1-\\lambda)x_2)^2 \\le \\lambda x_1^2 + (1-\\lambda)x_2^2$\n\nMà ta lại có:\n$\\lambda x_1^2 + (1-\\lambda)x_2^2 \\le \\lambda y_1 + (1-\\lambda)y_2$ (do $y_1 \\ge x_1^2, y_2 \\ge x_2^2$ và $\\lambda, 1-\\lambda \\ge 0$).\n\nTừ hai điều trên suy ra:\n$(\\lambda x_1 + (1-\\lambda)x_2)^2 \\le \\lambda y_1 + (1-\\lambda)y_2$\nVậy $C \\in S$, suy ra $S$ là tập lồi."
    }
  ]
};
