import { Lesson } from '../lessons';

export const dualityLesson: Lesson = {
  id: "duality",
  title: "Chương 3: Lý thuyết Đối ngẫu",
  content: `
# Lý thuyết Đối ngẫu (Duality Theory)

Mỗi bài toán QHTT (gọi là bài toán **Gốc**) đều có một bài toán **Đối ngẫu** tương ứng.

### Cặp đối ngẫu Gốc - Đối ngẫu:
**Bài toán Gốc (P):**
$$ \\min c^T x \\quad \\text{s.t. } Ax \\ge b, x \\ge 0 $$

**Bài toán Đối ngẫu (D):**
$$ \\max b^T y \\quad \\text{s.t. } A^T y \\le c, y \\ge 0 $$

### Các định lý quan trọng:
1. **Định lý đối ngẫu yếu**: $b^T y \\le c^T x$ với mọi phương án chấp nhận được $x$ của (P) và $y$ của (D).
2. **Định lý đối ngẫu mạnh**: Nếu một trong hai bài toán có lời giải tối ưu thì bài toán kia cũng có lời giải tối ưu và giá trị hàm mục tiêu tối ưu của chúng bằng nhau: $f^* = g^*$.
3. **Định lý độ lệch bù**: Giúp tìm lời giải tối ưu của bài toán này khi biết lời giải tối ưu của bài toán kia.
    `,
  quiz: [
    {
      id: "q3-1",
      question: "Nếu bài toán Gốc là bài toán Max, thì bài toán Đối ngẫu sẽ là bài toán gì?",
      options: ["Max", "Min", "Không xác định", "Cả Max và Min"],
      correctAnswer: 1,
      explanation: "Trong lý thuyết đối ngẫu, nếu bài toán Gốc là tìm Max thì bài toán Đối ngẫu tương ứng sẽ là tìm Min (và ngược lại)."
    }
  ],
  exercises: [
    {
      problem: "Viết bài toán đối ngẫu của: $\\max f = 4x_1 + x_2 + 5x_3$ s.t. $x_1 + x_2 \\le 10, x_2 + x_3 \\le 15, x_i \\ge 0$.",
      solution: "Gọi $y_1, y_2$ là các biến đối ngẫu tương ứng với 2 ràng buộc.\n\n$\\min g = 10y_1 + 15y_2$\n\ns.t.\n$y_1 \\ge 4$\n$y_1 + y_2 \\ge 1$\n$y_2 \\ge 5$\n$y_1, y_2 \\ge 0$"
    }
  ]
};
