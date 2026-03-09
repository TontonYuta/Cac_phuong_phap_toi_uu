import { Lesson } from '../../lessons';

export const lesson1: Lesson = {
  id: "ch4-l1",
  title: "4.1 Cực trị không ràng buộc",
  content: `
# Tối ưu hóa không ràng buộc

Bài toán tối ưu hóa không ràng buộc là dạng cơ bản nhất của tối ưu hóa phi tuyến, trong đó ta cần tìm cực tiểu hoặc cực đại của một hàm số $f(x)$ trên toàn bộ không gian $\\mathbb{R}^n$, không bị giới hạn bởi bất kỳ điều kiện nào.

Xét bài toán: $\\min f(x)$ với $x \\in \\mathbb{R}^n$.

---

### 1. Điều kiện tối ưu (Optimality Conditions)

Để tìm cực trị của hàm $f(x)$ (giả sử $f$ có đạo hàm bậc hai liên tục), ta dựa vào các điều kiện sau:

**Điều kiện cần bậc nhất (First-Order Necessary Condition - FOC):**
Nếu $x^*$ là một điểm cực tiểu (hoặc cực đại) địa phương của $f$, thì gradient của $f$ tại $x^*$ phải bằng vector 0.
$$ \\nabla f(x^*) = 0 $$
Điểm $x^*$ thỏa mãn điều kiện này được gọi là **điểm dừng** (stationary point). Điểm dừng có thể là cực tiểu, cực đại, hoặc điểm yên ngựa (saddle point).

**Điều kiện cần bậc hai (Second-Order Necessary Condition - SOC):**
Nếu $x^*$ là điểm cực tiểu địa phương, thì ngoài việc $\\nabla f(x^*) = 0$, ma trận Hessian $\\nabla^2 f(x^*)$ phải là **nửa xác định dương** (Positive Semi-Definite).
*(Nếu là cực đại, Hessian phải nửa xác định âm).*

**Điều kiện đủ (Sufficient Condition):**
Nếu tại điểm $x^*$, ta có:
1. $\\nabla f(x^*) = 0$ (là điểm dừng)
2. $\\nabla^2 f(x^*)$ là ma trận **xác định dương** (Positive Definite)
Thì $x^*$ chắc chắn là một điểm **cực tiểu địa phương nghiêm ngặt**.

---

### 2. Phương pháp Gradient Descent (Độ dốc giảm dần)

Khi không thể giải trực tiếp phương trình $\\nabla f(x) = 0$ (do hàm quá phức tạp), ta dùng các phương pháp lặp. Gradient Descent là thuật toán phổ biến nhất, đặc biệt trong Machine Learning.

**Ý tưởng:** Gradient $\\nabla f(x)$ luôn chỉ hướng mà hàm số tăng nhanh nhất. Do đó, để tìm cực tiểu (làm giảm hàm số), ta cần di chuyển **ngược hướng** với gradient.

**Công thức cập nhật:**
$$ x_{k+1} = x_k - \\alpha_k \\nabla f(x_k) $$

Trong đó:
- $x_k$: Vị trí hiện tại ở bước lặp thứ $k$.
- $\\nabla f(x_k)$: Vector gradient tại $x_k$.
- $\\alpha_k > 0$: Kích thước bước nhảy (Step size) hay Tốc độ học (Learning rate).

**Lưu ý về Learning Rate ($\\alpha$):**
- Nếu $\\alpha$ quá nhỏ: Thuật toán hội tụ rất chậm.
- Nếu $\\alpha$ quá lớn: Thuật toán có thể "nhảy qua" điểm cực tiểu, gây phân kỳ (không hội tụ).
  `,
  quiz: [
    {
      id: "q4-1-1",
      question: "Điều kiện cần bậc nhất (FOC) để một điểm $x^*$ là cực trị địa phương của hàm $f(x)$ là gì?",
      options: ["Ma trận Hessian bằng 0", "Gradient $\\nabla f(x^*) = 0$", "Hàm số $f(x^*) = 0$", "Gradient $\\nabla f(x^*) > 0$"],
      correctAnswer: 1,
      explanation: "Điều kiện cần đầu tiên để một điểm là cực trị (cực đại hoặc cực tiểu) là đạo hàm bậc nhất (gradient) tại điểm đó phải bằng 0. Điểm đó gọi là điểm dừng."
    },
    {
      id: "q4-1-2",
      question: "Nếu tại điểm dừng $x^*$, ma trận Hessian $\\nabla^2 f(x^*)$ là xác định dương, thì $x^*$ là điểm gì?",
      options: ["Cực đại địa phương", "Điểm yên ngựa", "Cực tiểu địa phương", "Không thể kết luận"],
      correctAnswer: 2,
      explanation: "Theo điều kiện đủ, nếu gradient bằng 0 và ma trận Hessian xác định dương (các định thức con chính góc trái trên đều > 0), thì điểm đó là cực tiểu địa phương."
    },
    {
      id: "q4-1-3",
      question: "Trong thuật toán Gradient Descent, tại sao công thức cập nhật lại có dấu trừ: $x_{k+1} = x_k - \\alpha \\nabla f(x_k)$?",
      options: ["Vì gradient chỉ hướng giảm nhanh nhất", "Vì gradient chỉ hướng tăng nhanh nhất", "Để đảm bảo $x_{k+1}$ luôn dương", "Để triệt tiêu ma trận Hessian"],
      correctAnswer: 1,
      explanation: "Gradient của một hàm số tại một điểm luôn chỉ hướng mà hàm số đó tăng nhanh nhất. Vì mục tiêu của Gradient Descent là tìm cực tiểu (làm giảm hàm số), ta phải đi ngược hướng gradient, do đó có dấu trừ."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Tìm điểm dừng và phân loại cực trị của hàm số $f(x, y) = x^2 + 2y^2 - 4x + 4y + 6$.",
      solution: "1. **Tìm điểm dừng (Giải $\\nabla f = 0$):**\n$\\frac{\\partial f}{\\partial x} = 2x - 4 = 0 \\Rightarrow x = 2$\n$\\frac{\\partial f}{\\partial y} = 4y + 4 = 0 \\Rightarrow y = -1$\nVậy hàm số có một điểm dừng duy nhất là $M(2, -1)$.\n\n2. **Tính ma trận Hessian:**\n$\\frac{\\partial^2 f}{\\partial x^2} = 2$\n$\\frac{\\partial^2 f}{\\partial y^2} = 4$\n$\\frac{\\partial^2 f}{\\partial x \\partial y} = 0$\n\nMa trận Hessian: $H = \\begin{pmatrix} 2 & 0 \\\\ 0 & 4 \\end{pmatrix}$\n\n3. **Phân loại:**\nXét các định thức con chính góc trái trên của $H$:\n- $D_1 = 2 > 0$\n- $D_2 = \\det(H) = 2 \\times 4 - 0 = 8 > 0$\nVì $D_1 > 0$ và $D_2 > 0$, ma trận $H$ là xác định dương.\n\n**Kết luận:** Điểm $M(2, -1)$ là điểm cực tiểu địa phương (và cũng là cực tiểu toàn cục vì hàm này lồi). Giá trị cực tiểu $f(2, -1) = 4 + 2 - 8 - 4 + 6 = 0$."
    },
    {
      problem: "**Bài 2:** Cho hàm số $f(x, y) = x^3 - 3x + y^2$. Tìm tất cả các điểm dừng và xác định tính chất của chúng (cực đại, cực tiểu hay điểm yên ngựa).",
      solution: "1. **Tìm điểm dừng:**\n$\\frac{\\partial f}{\\partial x} = 3x^2 - 3 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = 1$ hoặc $x = -1$\n$\\frac{\\partial f}{\\partial y} = 2y = 0 \\Rightarrow y = 0$\nTa có 2 điểm dừng: $M_1(1, 0)$ và $M_2(-1, 0)$.\n\n2. **Tính ma trận Hessian:**\n$\\frac{\\partial^2 f}{\\partial x^2} = 6x$\n$\\frac{\\partial^2 f}{\\partial y^2} = 2$\n$\\frac{\\partial^2 f}{\\partial x \\partial y} = 0$\n$H(x,y) = \\begin{pmatrix} 6x & 0 \\\\ 0 & 2 \\end{pmatrix}$\n\n3. **Phân loại từng điểm:**\n- Tại $M_1(1, 0)$: $H(1,0) = \\begin{pmatrix} 6 & 0 \\\\ 0 & 2 \\end{pmatrix}$. \n  $D_1 = 6 > 0, D_2 = 12 > 0 \\Rightarrow H$ xác định dương. Vậy $M_1(1, 0)$ là **cực tiểu**.\n- Tại $M_2(-1, 0)$: $H(-1,0) = \\begin{pmatrix} -6 & 0 \\\\ 0 & 2 \\end{pmatrix}$. \n  $D_1 = -6 < 0, D_2 = -12 < 0 \\Rightarrow H$ không xác định dấu (indefinite). Vậy $M_2(-1, 0)$ là **điểm yên ngựa**."
    },
    {
      problem: "**Bài 3:** Thực hiện 1 bước lặp của thuật toán Gradient Descent cho hàm $f(x, y) = x^2 + 2y^2$. Xuất phát từ điểm $X_0 = (2, 1)$ với learning rate $\\alpha = 0.1$. Tìm tọa độ điểm $X_1$.",
      solution: "1. **Tính Gradient của hàm số:**\n$\\nabla f(x, y) = \\begin{pmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\end{pmatrix} = \\begin{pmatrix} 2x \\\\ 4y \\end{pmatrix}$\n\n2. **Tính Gradient tại điểm xuất phát $X_0(2, 1)$:**\n$\\nabla f(X_0) = \\begin{pmatrix} 2(2) \\\\ 4(1) \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}$\n\n3. **Áp dụng công thức cập nhật:**\n$X_1 = X_0 - \\alpha \\nabla f(X_0)$\n$X_1 = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} - 0.1 \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}$\n$X_1 = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} 0.4 \\\\ 0.4 \\end{pmatrix} = \\begin{pmatrix} 1.6 \\\\ 0.6 \\end{pmatrix}$\n\n**Kết luận:** Sau 1 bước lặp, tọa độ điểm mới là $X_1 = (1.6, 0.6)$. \n*(Có thể thấy giá trị hàm số đã giảm từ $f(X_0) = 6$ xuống $f(X_1) = 1.6^2 + 2(0.6)^2 = 2.56 + 0.72 = 3.28$)*."
    }
  ]
};
