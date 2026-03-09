import { Lesson } from '../../lessons';

export const lesson2: Lesson = {
  id: "ch3-l2",
  title: "3.2 Định lý Đối ngẫu & Độ lệch bù",
  content: `
# Các định lý Đối ngẫu và Độ lệch bù

Mối quan hệ giữa bài toán Gốc và bài toán Đối ngẫu được thể hiện qua các định lý toán học chặt chẽ. Giả sử bài toán Gốc (P) là MAX và bài toán Đối ngẫu (D) là MIN.

---

### 1. Định lý Đối ngẫu yếu (Weak Duality)
Nếu $x$ là một phương án chấp nhận được bất kỳ của (P) và $y$ là một phương án chấp nhận được bất kỳ của (D), thì:
$$ c^T x \\le b^T y $$
*(Giá trị hàm mục tiêu của bài toán MAX luôn nhỏ hơn hoặc bằng giá trị hàm mục tiêu của bài toán MIN).*

**Hệ quả:**
- Nếu $c^T x = b^T y$ với $x, y$ là các phương án chấp nhận được, thì $x$ và $y$ chính là các phương án tối ưu của (P) và (D).
- Nếu (P) không bị chặn trên ($f \\to +\\infty$), thì (D) vô nghiệm (tập phương án rỗng).
- Nếu (D) không bị chặn dưới ($g \\to -\\infty$), thì (P) vô nghiệm.

---

### 2. Định lý Đối ngẫu mạnh (Strong Duality)
Nếu một trong hai bài toán có phương án tối ưu, thì bài toán kia cũng có phương án tối ưu, và giá trị tối ưu của chúng bằng nhau:
$$ c^T x^* = b^T y^* $$
*(Không có khoảng trống đối ngẫu - Duality Gap = 0 đối với QHTT).*

---

### 3. Định lý Độ lệch bù (Complementary Slackness)
Cho $x^*$ và $y^*$ là phương án tối ưu của (P) và (D). Khi đó:
1. **Đối với các biến của Gốc ($x^*$):**
   Nếu $x^*_j > 0$, thì ràng buộc thứ $j$ của Đối ngẫu phải là đẳng thức (chặt).
   *(Nói cách khác: Biến Gốc dương $\\Rightarrow$ Ràng buộc Đối ngẫu chặt).*
2. **Đối với các ràng buộc của Gốc:**
   Nếu ràng buộc thứ $i$ của Gốc là bất đẳng thức ngặt (lỏng, ví dụ $\\sum a_{ij}x^*_j < b_i$), thì biến đối ngẫu tương ứng $y^*_i = 0$.
   *(Nói cách khác: Ràng buộc Gốc lỏng $\\Rightarrow$ Biến Đối ngẫu bằng 0).*

**Ứng dụng:** Định lý này cực kỳ hữu ích để tìm nghiệm của bài toán này khi đã biết nghiệm của bài toán kia, bằng cách giải một hệ phương trình tuyến tính đơn giản.
  `,
  quiz: [
    {
      id: "q3-2-1",
      question: "Theo định lý đối ngẫu yếu, mối quan hệ giữa giá trị hàm mục tiêu của phương án Gốc (MAX) và Đối ngẫu (MIN) là gì?",
      options: ["Gốc > Đối ngẫu", "Gốc < Đối ngẫu", "Gốc $\\le$ Đối ngẫu", "Gốc $\\ge$ Đối ngẫu"],
      correctAnswer: 2,
      explanation: "Định lý đối ngẫu yếu khẳng định rằng giá trị của bài toán MAX luôn bị chặn trên bởi giá trị của bài toán MIN, tức là $c^T x \\le b^T y$."
    },
    {
      id: "q3-2-2",
      question: "Nếu bài toán Gốc (MAX) có hàm mục tiêu tiến tới $+\\infty$ (không bị chặn), thì bài toán Đối ngẫu sẽ như thế nào?",
      options: ["Có vô số nghiệm", "Có nghiệm duy nhất", "Không bị chặn", "Vô nghiệm (tập phương án rỗng)"],
      correctAnswer: 3,
      explanation: "Theo hệ quả của định lý đối ngẫu yếu, nếu bài toán Gốc không bị chặn trên, thì bài toán Đối ngẫu không thể có phương án chấp nhận được nào (vì nếu có, nó sẽ chặn trên bài toán Gốc). Do đó Đối ngẫu vô nghiệm."
    },
    {
      id: "q3-2-3",
      question: "Theo định lý độ lệch bù, nếu một ràng buộc của bài toán Gốc không đạt dấu bằng tại phương án tối ưu (ràng buộc lỏng), thì biến đối ngẫu tương ứng sẽ có giá trị bao nhiêu?",
      options: ["Lớn hơn 0", "Nhỏ hơn 0", "Bằng 0", "Không xác định"],
      correctAnswer: 2,
      explanation: "Định lý độ lệch bù phát biểu: Ràng buộc lỏng (không chặt) $\\Rightarrow$ Biến đối ngẫu tương ứng bằng 0."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Cho bài toán Gốc (MAX):\n$\\max f = 3x_1 + 4x_2$\ns.t. $x_1 + 2x_2 \\le 8$ (1)\n$3x_1 + x_2 \\le 9$ (2)\n$x_1, x_2 \\ge 0$\nGiả sử phương án tối ưu của bài toán Gốc là $x^* = (2, 3)$. Hãy sử dụng định lý độ lệch bù để tìm phương án tối ưu $y^*$ của bài toán Đối ngẫu.",
      solution: "1. **Kiểm tra các ràng buộc của Gốc tại $x^* = (2, 3)$:**\n- (1): $2 + 2(3) = 8$ (Chặt)\n- (2): $3(2) + 3 = 9$ (Chặt)\nCả 2 ràng buộc đều chặt, nên ta chưa kết luận được $y^*_1, y^*_2$ bằng 0.\n\n2. **Kiểm tra các biến của Gốc:**\nTa có $x^*_1 = 2 > 0$ và $x^*_2 = 3 > 0$.\nTheo định lý độ lệch bù, cả 2 ràng buộc của bài toán Đối ngẫu phải là đẳng thức (chặt).\n\n3. **Viết các ràng buộc của Đối ngẫu:**\n- $y_1 + 3y_2 \\ge 3$\n- $2y_1 + y_2 \\ge 4$\nVì chúng phải là đẳng thức, ta có hệ phương trình:\n$y_1 + 3y_2 = 3$\n$2y_1 + y_2 = 4$\n\n4. **Giải hệ phương trình:**\nTừ pt 1: $y_1 = 3 - 3y_2$. Thay vào pt 2:\n$2(3 - 3y_2) + y_2 = 4 \\Rightarrow 6 - 5y_2 = 4 \\Rightarrow 5y_2 = 2 \\Rightarrow y_2 = 0.4$.\nSuy ra $y_1 = 3 - 3(0.4) = 1.8$.\n\n**Kết luận:** Phương án tối ưu của Đối ngẫu là $y^* = (1.8, 0.4)$.\n*(Kiểm tra lại: $f^* = 3(2) + 4(3) = 18$. $g^* = 8(1.8) + 9(0.4) = 14.4 + 3.6 = 18$. Thỏa mãn định lý đối ngẫu mạnh).*."
    },
    {
      problem: "**Bài 2:** Cho bài toán Gốc (MAX):\n$\\max f = 5x_1 + 2x_2$\ns.t. $x_1 + x_2 \\le 4$ (1)\n$2x_1 + x_2 \\le 6$ (2)\n$x_1, x_2 \\ge 0$\nBiết phương án tối ưu của bài toán Gốc là $x^* = (3, 0)$. Tìm nghiệm Đối ngẫu $y^*$.",
      solution: "1. **Kiểm tra các ràng buộc của Gốc tại $x^* = (3, 0)$:**\n- (1): $3 + 0 = 3 < 4$ (Lỏng) $\\Rightarrow y^*_1 = 0$ (theo độ lệch bù).\n- (2): $2(3) + 0 = 6$ (Chặt).\n\n2. **Kiểm tra các biến của Gốc:**\n- $x^*_1 = 3 > 0 \\Rightarrow$ Ràng buộc 1 của Đối ngẫu phải chặt.\n- $x^*_2 = 0 \\Rightarrow$ Ràng buộc 2 của Đối ngẫu có thể lỏng.\n\n3. **Viết ràng buộc 1 của Đối ngẫu:**\n$1y_1 + 2y_2 \\ge 5$\nVì nó phải chặt, ta có: $y_1 + 2y_2 = 5$.\n\n4. **Giải tìm $y^*$:**\nThay $y^*_1 = 0$ vào phương trình trên:\n$0 + 2y_2 = 5 \\Rightarrow y^*_2 = 2.5$.\n\n**Kết luận:** Phương án tối ưu của Đối ngẫu là $y^* = (0, 2.5)$."
    },
    {
      problem: "**Bài 3:** Giải thích ý nghĩa kinh tế của biến đối ngẫu $y_i$ (còn gọi là giá mờ - shadow price) đối với bài toán lập kế hoạch sản xuất (MAX lợi nhuận).",
      solution: "Trong bài toán lập kế hoạch sản xuất:\n- Hàm mục tiêu Gốc: Tối đa hóa lợi nhuận.\n- Ràng buộc Gốc: Giới hạn về nguồn lực (nguyên liệu, giờ công) $\\le b_i$.\n\nTheo định lý đối ngẫu mạnh, $f^* = g^* = \\sum b_i y^*_i$.\nĐạo hàm riêng của lợi nhuận tối ưu theo nguồn lực $b_i$ chính là $y^*_i$:\n$\\frac{\\partial f^*}{\\partial b_i} = y^*_i$\n\n**Ý nghĩa kinh tế:**\nBiến đối ngẫu $y^*_i$ (giá mờ) thể hiện **mức tăng thêm của lợi nhuận tối ưu** nếu ta có thêm 1 đơn vị nguồn lực $i$.\n- Nếu $y^*_i > 0$: Nguồn lực $i$ đang khan hiếm (đã dùng hết, ràng buộc chặt). Mua thêm nguồn lực này sẽ làm tăng lợi nhuận.\n- Nếu $y^*_i = 0$: Nguồn lực $i$ đang dư thừa (ràng buộc lỏng). Mua thêm nguồn lực này cũng không làm tăng lợi nhuận (phù hợp với định lý độ lệch bù)."
    }
  ]
};
