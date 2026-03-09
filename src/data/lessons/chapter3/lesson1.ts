import { Lesson } from '../../lessons';

export const lesson1: Lesson = {
  id: "ch3-l1",
  title: "3.1 Xây dựng bài toán Đối ngẫu",
  content: `
# Xây dựng bài toán Đối ngẫu

Mỗi bài toán Quy hoạch tuyến tính (gọi là bài toán **Gốc** - Primal) đều liên kết chặt chẽ với một bài toán QHTT khác gọi là bài toán **Đối ngẫu** (Dual). Việc giải bài toán Đối ngẫu thường cung cấp những thông tin kinh tế quan trọng (như giá mờ - shadow price) và đôi khi dễ giải hơn bài toán Gốc.

---

### Quy tắc chuyển đổi (Gốc $\\leftrightarrow$ Đối ngẫu)

Giả sử bài toán Gốc là bài toán **MAX**:

1. **Hàm mục tiêu:**
   - Gốc: $\\max f(x) = c^T x$
   - Đối ngẫu: $\\min g(y) = b^T y$
   *(Hệ số hàm mục tiêu $c$ của Gốc trở thành vế phải của Đối ngẫu. Vế phải $b$ của Gốc trở thành hệ số hàm mục tiêu của Đối ngẫu).*

2. **Ma trận hệ số:**
   - Ma trận $A$ của Gốc chuyển thành ma trận chuyển vị $A^T$ trong Đối ngẫu.
   *(Cột của Gốc thành Hàng của Đối ngẫu).*

3. **Từ Ràng buộc (Gốc) $\\to$ Biến (Đối ngẫu):**
   Mỗi ràng buộc thứ $i$ của Gốc tương ứng với một biến $y_i$ của Đối ngẫu.
   - Ràng buộc $\\le$ $\\to$ Biến $y_i \\ge 0$.
   - Ràng buộc $\\ge$ $\\to$ Biến $y_i \\le 0$.
   - Ràng buộc $=$ $\\to$ Biến $y_i$ tùy ý (không ràng buộc dấu).

4. **Từ Biến (Gốc) $\\to$ Ràng buộc (Đối ngẫu):**
   Mỗi biến $x_j$ của Gốc tương ứng với một ràng buộc thứ $j$ của Đối ngẫu.
   - Biến $x_j \\ge 0$ $\\to$ Ràng buộc $\\ge$.
   - Biến $x_j \\le 0$ $\\to$ Ràng buộc $\\le$.
   - Biến $x_j$ tùy ý $\\to$ Ràng buộc $=$.

*(Lưu ý: Nếu bài toán Gốc là MIN, quy tắc chuyển đổi dấu sẽ ngược lại. Một cách dễ nhớ là đưa bài toán MIN về MAX bằng cách nhân hàm mục tiêu với -1 rồi áp dụng quy tắc trên).*
  `,
  quiz: [
    {
      id: "q3-1-1",
      question: "Nếu bài toán Gốc là bài toán tìm MAX, thì bài toán Đối ngẫu sẽ là bài toán gì?",
      options: ["Tìm MAX", "Tìm MIN", "Không xác định", "Cả MAX và MIN"],
      correctAnswer: 1,
      explanation: "Trong lý thuyết đối ngẫu, bài toán Gốc và Đối ngẫu luôn ngược nhau về mục tiêu: MAX chuyển thành MIN và ngược lại."
    },
    {
      id: "q3-1-2",
      question: "Một ràng buộc mang dấu '=' trong bài toán Gốc (MAX) sẽ sinh ra biến đối ngẫu có tính chất gì?",
      options: ["Luôn dương ($\\ge 0$)", "Luôn âm ($\\le 0$)", "Tùy ý (không ràng buộc dấu)", "Bằng 0"],
      correctAnswer: 2,
      explanation: "Ràng buộc đẳng thức (=) trong bài toán Gốc tương ứng với một biến đối ngẫu không bị ràng buộc về dấu (có thể nhận giá trị âm, dương hoặc bằng 0)."
    },
    {
      id: "q3-1-3",
      question: "Hệ số của hàm mục tiêu trong bài toán Đối ngẫu được lấy từ đâu của bài toán Gốc?",
      options: ["Hệ số hàm mục tiêu", "Ma trận hệ số ràng buộc", "Vế phải của các ràng buộc", "Các biến quyết định"],
      correctAnswer: 2,
      explanation: "Vế phải $b$ của các ràng buộc trong bài toán Gốc sẽ trở thành các hệ số của hàm mục tiêu trong bài toán Đối ngẫu."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Viết bài toán đối ngẫu của bài toán sau:\n$\\max f(x) = 5x_1 + 6x_2$\ns.t.\n$x_1 + 2x_2 \\le 10$\n$3x_1 - x_2 \\le 5$\n$x_1, x_2 \\ge 0$",
      solution: "1. Bài toán Gốc là MAX.\n2. Gọi $y_1, y_2$ là các biến đối ngẫu tương ứng với 2 ràng buộc.\n3. Hàm mục tiêu Đối ngẫu: $\\min g(y) = 10y_1 + 5y_2$ (lấy từ vế phải).\n4. Ràng buộc Đối ngẫu (từ các biến $x_1, x_2 \\ge 0$ nên ràng buộc mang dấu $\\ge$):\n   - Cột $x_1$: $1y_1 + 3y_2 \\ge 5$\n   - Cột $x_2$: $2y_1 - 1y_2 \\ge 6$\n5. Dấu của biến Đối ngẫu (từ các ràng buộc $\\le$ nên biến $\\ge 0$):\n   - $y_1, y_2 \\ge 0$\n\n**Kết quả:**\n$\\min g(y) = 10y_1 + 5y_2$\ns.t.\n$y_1 + 3y_2 \\ge 5$\n$2y_1 - y_2 \\ge 6$\n$y_1, y_2 \\ge 0$"
    },
    {
      problem: "**Bài 2:** Viết bài toán đối ngẫu của bài toán có ràng buộc hỗn hợp:\n$\\max f(x) = 4x_1 + x_2 + 5x_3$\ns.t.\n$x_1 + x_2 \\le 10$\n$x_2 + x_3 = 15$\n$x_1, x_2, x_3 \\ge 0$",
      solution: "1. Gọi $y_1, y_2$ là các biến đối ngẫu.\n2. Hàm mục tiêu: $\\min g(y) = 10y_1 + 15y_2$.\n3. Ràng buộc Đối ngẫu (do $x_1, x_2, x_3 \\ge 0$ nên các ràng buộc mang dấu $\\ge$):\n   - Cột $x_1$: $1y_1 + 0y_2 \\ge 4 \\Rightarrow y_1 \\ge 4$\n   - Cột $x_2$: $1y_1 + 1y_2 \\ge 1$\n   - Cột $x_3$: $0y_1 + 1y_2 \\ge 5 \\Rightarrow y_2 \\ge 5$\n4. Dấu của biến Đối ngẫu:\n   - Ràng buộc 1 là $\\le \\Rightarrow y_1 \\ge 0$.\n   - Ràng buộc 2 là $=$ $\\Rightarrow y_2$ tùy ý.\n\n**Kết quả:**\n$\\min g(y) = 10y_1 + 15y_2$\ns.t.\n$y_1 \\ge 4$\n$y_1 + y_2 \\ge 1$\n$y_2 \\ge 5$\n$y_1 \\ge 0, y_2 \\in \\mathbb{R}$"
    },
    {
      problem: "**Bài 3:** Viết bài toán đối ngẫu của bài toán MIN sau:\n$\\min f(x) = 2x_1 + 3x_2$\ns.t.\n$x_1 + x_2 \\ge 4$\n$2x_1 - x_2 \\ge 3$\n$x_1, x_2 \\ge 0$",
      solution: "1. Bài toán Gốc là MIN, ta có thể áp dụng quy tắc ngược lại hoặc chuyển về MAX.\nÁp dụng quy tắc trực tiếp cho bài toán MIN:\n- Hàm mục tiêu Đối ngẫu: $\\max g(y) = 4y_1 + 3y_2$.\n- Ràng buộc Đối ngẫu (do $x_1, x_2 \\ge 0$ nên ràng buộc mang dấu $\\le$):\n  - $1y_1 + 2y_2 \\le 2$\n  - $1y_1 - 1y_2 \\le 3$\n- Dấu của biến Đối ngẫu (do ràng buộc Gốc là $\\ge$ nên biến $\\ge 0$):\n  - $y_1, y_2 \\ge 0$\n\n**Kết quả:**\n$\\max g(y) = 4y_1 + 3y_2$\ns.t.\n$y_1 + 2y_2 \\le 2$\n$y_1 - y_2 \\le 3$\n$y_1, y_2 \\ge 0$"
    }
  ]
};
