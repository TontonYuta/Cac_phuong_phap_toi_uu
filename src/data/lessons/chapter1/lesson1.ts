import { Lesson } from '../../lessons';

export const lesson1: Lesson = {
  id: "ch1-l1",
  title: "1.1 Mô hình hóa toán học",
  content: `
# Mô hình hóa toán học trong Tối ưu hóa

Mô hình hóa là bước đầu tiên và quan trọng nhất để giải quyết một bài toán thực tế. Quá trình này chuyển đổi ngôn ngữ tự nhiên thành ngôn ngữ toán học.

### Các thành phần của mô hình tối ưu hóa:
1. **Biến quyết định (Decision Variables)**: Đại lượng cần tìm để tối ưu hóa hệ thống. Thường ký hiệu là $x_1, x_2, ..., x_n$.
2. **Hàm mục tiêu (Objective Function)**: Biểu diễn mục tiêu cần đạt được (tối đa hóa lợi nhuận, tối thiểu hóa chi phí) dưới dạng hàm số của các biến quyết định: $f(x) \\to \\min$ hoặc $\\max$.
3. **Thiết lập các ràng buộc (Constraints)**: Các giới hạn của hệ thống (nguồn lực, thời gian, kỹ thuật) biểu diễn bằng phương trình hoặc bất phương trình.
4. **Ràng buộc dấu**: Thường các biến thực tế mang giá trị không âm ($x_i \\ge 0$).

---

### Dạng 1: Bài toán lập kế hoạch sản xuất
Một xưởng mộc sản xuất bàn và ghế. 
- Lợi nhuận: Bàn 300k, Ghế 200k.
- Gỗ cần dùng: Bàn 30 đơn vị, Ghế 20 đơn vị. Tổng gỗ có sẵn: 300 đơn vị.
- Giờ công: Bàn 5h, Ghế 10h. Tổng giờ công: 110h.

**Mô hình toán học:**
- Biến: $x_1$ (số bàn), $x_2$ (số ghế).
- Hàm mục tiêu: $\\max f(x) = 300x_1 + 200x_2$
- Ràng buộc:
  - Gỗ: $30x_1 + 20x_2 \\le 300$
  - Giờ công: $5x_1 + 10x_2 \\le 110$
  - Dấu: $x_1, x_2 \\ge 0$

---

### Dạng 2: Bài toán khẩu phần ăn (Diet Problem)
Cần thiết kế một khẩu phần ăn từ 2 loại thực phẩm $T_1$ và $T_2$ sao cho chi phí là thấp nhất, nhưng vẫn đảm bảo đủ lượng Vitamin A và Vitamin B tối thiểu.
- Thực phẩm $T_1$: Giá 50k/kg, chứa 2 đơn vị Vit A và 1 đơn vị Vit B.
- Thực phẩm $T_2$: Giá 40k/kg, chứa 1 đơn vị Vit A và 3 đơn vị Vit B.
- Yêu cầu tối thiểu: 10 đơn vị Vit A và 12 đơn vị Vit B.

**Mô hình toán học:**
- Biến: $x_1, x_2$ là số kg thực phẩm $T_1, T_2$ cần mua.
- Hàm mục tiêu: $\\min f(x) = 50x_1 + 40x_2$
- Ràng buộc:
  - Vitamin A: $2x_1 + x_2 \\ge 10$
  - Vitamin B: $x_1 + 3x_2 \\ge 12$
  - Dấu: $x_1, x_2 \\ge 0$

---

### Dạng 3: Bài toán pha trộn (Blending Problem)
Một nhà máy lọc dầu sản xuất xăng A và xăng B từ 3 loại dầu thô $D_1, D_2, D_3$. Mỗi loại xăng có yêu cầu về tỷ lệ pha trộn tối thiểu/tối đa của các loại dầu thô. Mục tiêu là tối đa hóa lợi nhuận.
- Biến quyết định thường là $x_{ij}$: lượng dầu thô $i$ dùng để pha xăng $j$.

---

### Dạng 4: Bài toán cắt vật liệu (Cutting Stock Problem)
Một xưởng cần cắt các cuộn giấy tiêu chuẩn (chiều rộng $W$) thành các cuộn nhỏ hơn với các chiều rộng $w_1, w_2, ..., w_m$ theo số lượng yêu cầu $b_1, b_2, ..., b_m$. Mục tiêu là tối thiểu hóa số cuộn giấy tiêu chuẩn cần dùng (hoặc tối thiểu hóa phần giấy thừa).
- Biến quyết định $x_j$: số lượng cuộn tiêu chuẩn được cắt theo mẫu cắt (pattern) thứ $j$.

---

### Dạng 5: Bài toán phân công (Assignment Problem)
Có $n$ công việc cần giao cho $n$ nhân viên. Mỗi nhân viên chỉ làm 1 việc, mỗi việc chỉ do 1 nhân viên làm. Chi phí khi giao việc $j$ cho nhân viên $i$ là $c_{ij}$. Tìm phương án phân công sao cho tổng chi phí là nhỏ nhất.
- Biến quyết định $x_{ij} \\in \\{0, 1\\}$: bằng 1 nếu nhân viên $i$ làm việc $j$, bằng 0 nếu ngược lại.
  `,
  quiz: [
    {
      id: "q1-1-1",
      question: "Trong mô hình toán học, đại lượng nào đại diện cho mục tiêu cần đạt được (ví dụ: tối đa hóa lợi nhuận)?",
      options: ["Biến quyết định", "Hàm mục tiêu", "Ràng buộc", "Tập phương án"],
      correctAnswer: 1,
      explanation: "Hàm mục tiêu biểu diễn đại lượng cần tối đa hóa hoặc tối thiểu hóa."
    },
    {
      id: "q1-1-2",
      question: "Trong bài toán khẩu phần ăn (Diet Problem), hàm mục tiêu thường là gì?",
      options: ["Tối đa hóa lượng calo", "Tối đa hóa lượng vitamin", "Tối thiểu hóa chi phí mua thực phẩm", "Tối thiểu hóa số lượng thực phẩm"],
      correctAnswer: 2,
      explanation: "Mục tiêu chính của bài toán khẩu phần ăn là tìm ra sự kết hợp các loại thực phẩm sao cho chi phí là thấp nhất (tối thiểu hóa chi phí) trong khi vẫn đáp ứng đủ các yêu cầu về dinh dưỡng."
    },
    {
      id: "q1-1-3",
      question: "Ràng buộc $x_1, x_2 \\ge 0$ được gọi là gì?",
      options: ["Ràng buộc đẳng thức", "Ràng buộc dấu", "Ràng buộc tài nguyên", "Hàm mục tiêu"],
      correctAnswer: 1,
      explanation: "Ràng buộc $x_i \\ge 0$ đảm bảo các biến quyết định không nhận giá trị âm, phù hợp với thực tế (không thể sản xuất số lượng âm), được gọi là ràng buộc dấu."
    },
    {
      id: "q1-1-4",
      question: "Trong bài toán phân công, biến quyết định $x_{ij}$ thường nhận giá trị nào?",
      options: ["Số thực bất kỳ", "Số nguyên không âm", "Chỉ nhận giá trị 0 hoặc 1", "Số thực trong đoạn [0, 1]"],
      correctAnswer: 2,
      explanation: "Bài toán phân công là một dạng của quy hoạch nguyên nhị phân, trong đó $x_{ij} = 1$ nếu nhân viên $i$ được giao việc $j$, và $x_{ij} = 0$ nếu ngược lại."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Một công ty sản xuất 2 loại sơn: nội thất và ngoại thất. Nguyên liệu gồm A (tối đa 24 tấn) và B (tối đa 6 tấn). 1 tấn sơn ngoại thất cần 6 tấn A và 1 tấn B. 1 tấn sơn nội thất cần 4 tấn A và 2 tấn B. Lợi nhuận: ngoại thất 5 tỷ/tấn, nội thất 4 tỷ/tấn. Hãy lập mô hình toán học.",
      solution: "1. **Biến quyết định:**\nGọi $x_1$ là số tấn sơn ngoại thất cần sản xuất.\nGọi $x_2$ là số tấn sơn nội thất cần sản xuất.\n\n2. **Hàm mục tiêu:**\nTối đa hóa lợi nhuận: $\\max f(x) = 5x_1 + 4x_2$\n\n3. **Ràng buộc:**\n- Giới hạn nguyên liệu A: $6x_1 + 4x_2 \\le 24$\n- Giới hạn nguyên liệu B: $x_1 + 2x_2 \\le 6$\n- Ràng buộc dấu: $x_1, x_2 \\ge 0$"
    },
    {
      problem: "**Bài 2:** Một nông trại có 100 hecta đất để trồng lúa và ngô. Chi phí trồng lúa là 2 triệu/hecta, ngô là 3 triệu/hecta. Nông trại có ngân sách tối đa 240 triệu. Thời gian chăm sóc lúa là 1 ngày/hecta, ngô là 2 ngày/hecta. Tổng số ngày công tối đa là 160 ngày. Lợi nhuận thu được từ lúa là 5 triệu/hecta, ngô là 8 triệu/hecta. Lập mô hình tối ưu hóa lợi nhuận.",
      solution: "1. **Biến quyết định:**\nGọi $x_1$ là diện tích trồng lúa (hecta).\nGọi $x_2$ là diện tích trồng ngô (hecta).\n\n2. **Hàm mục tiêu:**\n$\\max f(x) = 5x_1 + 8x_2$\n\n3. **Ràng buộc:**\n- Diện tích đất: $x_1 + x_2 \\le 100$\n- Ngân sách: $2x_1 + 3x_2 \\le 240$\n- Ngày công: $x_1 + 2x_2 \\le 160$\n- Dấu: $x_1, x_2 \\ge 0$"
    },
    {
      problem: "**Bài 3:** Một công ty cần vận chuyển hàng từ 2 kho ($K_1, K_2$) đến 3 cửa hàng ($C_1, C_2, C_3$). Nguồn cung tại $K_1$ là 50, $K_2$ là 70. Nhu cầu tại $C_1$ là 40, $C_2$ là 50, $C_3$ là 30. Chi phí vận chuyển từ $K_i$ đến $C_j$ được cho bởi ma trận $C = \\begin{pmatrix} 2 & 4 & 5 \\\\ 3 & 1 & 6 \\end{pmatrix}$. Lập mô hình tối thiểu hóa chi phí vận chuyển.",
      solution: "1. **Biến quyết định:**\nGọi $x_{ij}$ là lượng hàng vận chuyển từ kho $K_i$ đến cửa hàng $C_j$ ($i=1,2; j=1,2,3$).\n\n2. **Hàm mục tiêu:**\n$\\min f(x) = 2x_{11} + 4x_{12} + 5x_{13} + 3x_{21} + 1x_{22} + 6x_{23}$\n\n3. **Ràng buộc:**\n- Ràng buộc nguồn cung (phát):\n  $x_{11} + x_{12} + x_{13} \\le 50$\n  $x_{21} + x_{22} + x_{23} \\le 70$\n- Ràng buộc nhu cầu (thu):\n  $x_{11} + x_{21} = 40$\n  $x_{12} + x_{22} = 50$\n  $x_{13} + x_{23} = 30$\n- Dấu: $x_{ij} \\ge 0 \\quad \\forall i, j$"
    },
    {
      problem: "**Bài 4 (Bài toán pha trộn):** Một nhà máy sản xuất hợp kim từ 3 loại quặng $Q_1, Q_2, Q_3$. Hợp kim yêu cầu chứa ít nhất 20% đồng và không quá 30% kẽm. Tỷ lệ đồng trong $Q_1, Q_2, Q_3$ lần lượt là 10%, 30%, 50%. Tỷ lệ kẽm lần lượt là 40%, 20%, 10%. Giá mỗi tấn quặng $Q_1, Q_2, Q_3$ là 10, 15, 20 triệu đồng. Lập mô hình tối thiểu hóa chi phí để sản xuất 1 tấn hợp kim.",
      solution: "1. **Biến quyết định:**\nGọi $x_1, x_2, x_3$ là khối lượng (tấn) quặng $Q_1, Q_2, Q_3$ cần dùng để sản xuất 1 tấn hợp kim.\n\n2. **Hàm mục tiêu:**\n$\\min f(x) = 10x_1 + 15x_2 + 20x_3$\n\n3. **Ràng buộc:**\n- Tổng khối lượng phải bằng 1 tấn: $x_1 + x_2 + x_3 = 1$\n- Yêu cầu về đồng (ít nhất 20%): $0.1x_1 + 0.3x_2 + 0.5x_3 \\ge 0.2(x_1 + x_2 + x_3) = 0.2$\n- Yêu cầu về kẽm (không quá 30%): $0.4x_1 + 0.2x_2 + 0.1x_3 \\le 0.3(x_1 + x_2 + x_3) = 0.3$\n- Dấu: $x_1, x_2, x_3 \\ge 0$"
    }
  ]
};
