import { Lesson } from '../../lessons';

export const lesson2: Lesson = {
  id: "ch2-l2",
  title: "2.2 Phương pháp Đơn hình",
  content: `
# Phương pháp Đơn hình (Simplex Method)

Phương pháp đơn hình là thuật toán đại số phổ biến nhất để giải bài toán QHTT tổng quát (nhiều hơn 2 biến). Ý tưởng là xuất phát từ một phương án cực biên (đỉnh), di chuyển dọc theo các cạnh của tập phương án đến một đỉnh kề sao cho hàm mục tiêu được cải thiện, cho đến khi đạt được đỉnh tối ưu.

---

### 1. Đưa bài toán về dạng chuẩn
Trước khi áp dụng thuật toán, bài toán phải được đưa về dạng chuẩn:
- Hàm mục tiêu: $\\min f(x)$ hoặc $\\max f(x)$.
- Tất cả các ràng buộc phải là **đẳng thức** ($=$).
- Vế phải của các ràng buộc phải **không âm** ($b_i \\ge 0$).
- Tất cả các biến phải **không âm** ($x_j \\ge 0$).

**Cách biến đổi:**
- Ràng buộc $\\le$: Thêm một **biến bù** (slack variable) $x_s \\ge 0$. (VD: $x_1 + x_2 \\le 5 \\Rightarrow x_1 + x_2 + x_s = 5$).
- Ràng buộc $\\ge$: Trừ đi một **biến thặng dư** (surplus variable) $x_e \\ge 0$. (VD: $2x_1 + x_2 \\ge 3 \\Rightarrow 2x_1 + x_2 - x_e = 3$).
- Nếu $b_i < 0$: Nhân cả 2 vế của ràng buộc với $-1$ (nhớ đổi chiều bất đẳng thức nếu có).

---

### 2. Thuật toán Đơn hình bảng
**Bước 1: Lập bảng đơn hình ban đầu**
- Tìm một cơ sở ban đầu (thường là các biến bù).
- Điền các hệ số vào bảng.

**Bước 2: Tính dòng ước lượng $\\Delta_j$**
- $\\Delta_j = \\sum_{i=1}^m (c_{B_i} \\times a_{ij}) - c_j$
- Trong đó $c_{B_i}$ là hệ số của biến cơ sở ở hàng $i$, $a_{ij}$ là hệ số trong ma trận, $c_j$ là hệ số của biến $x_j$ trong hàm mục tiêu.

**Bước 3: Kiểm tra tiêu chuẩn tối ưu**
- **Bài toán MIN:** Tối ưu khi mọi $\\Delta_j \\le 0$.
- **Bài toán MAX:** Tối ưu khi mọi $\\Delta_j \\ge 0$.
- Nếu đã tối ưu, dừng thuật toán. Nếu chưa, chuyển sang Bước 4.

**Bước 4: Chọn biến vào cơ sở (Cột xoay $k$)**
- **MIN:** Chọn cột $k$ có $\\Delta_k > 0$ lớn nhất. (Biến $x_k$ sẽ làm giảm $f$ nhiều nhất).
- **MAX:** Chọn cột $k$ có $\\Delta_k < 0$ nhỏ nhất (âm nhiều nhất).

**Bước 5: Chọn biến ra khỏi cơ sở (Hàng xoay $r$)**
- Tính tỉ số $\\theta_i = \\frac{b_i}{a_{ik}}$ cho các hàng có $a_{ik} > 0$.
- Chọn hàng $r$ có $\\theta_r$ nhỏ nhất. (Biến ở hàng $r$ sẽ rời cơ sở).
- Phần tử $a_{rk}$ gọi là **phần tử chốt** (pivot).

**Bước 6: Xoay bảng (Biến đổi Gauss-Jordan)**
- Chia hàng $r$ cho phần tử chốt $a_{rk}$ để biến phần tử chốt thành 1.
- Biến đổi các hàng khác (kể cả hàng $\\Delta$) sao cho các phần tử còn lại trong cột $k$ đều bằng 0.
- Quay lại Bước 2.
  `,
  quiz: [
    {
      id: "q2-2-1",
      question: "Để đưa ràng buộc $2x_1 + x_2 \\le 10$ về dạng chuẩn, ta cần làm gì?",
      options: ["Trừ đi một biến thặng dư", "Thêm vào một biến bù", "Nhân 2 vế với -1", "Bỏ qua ràng buộc này"],
      correctAnswer: 1,
      explanation: "Với ràng buộc mang dấu $\\le$, ta cần cộng thêm một lượng không âm (gọi là biến bù - slack variable) để tạo thành đẳng thức: $2x_1 + x_2 + x_3 = 10$ ($x_3 \\ge 0$)."
    },
    {
      id: "q2-2-2",
      question: "Trong bài toán tìm MIN, bảng đơn hình đạt tối ưu khi nào?",
      options: ["Mọi $\\Delta_j \\ge 0$", "Mọi $\\Delta_j \\le 0$", "Mọi $\\Delta_j = 0$", "Có ít nhất một $\\Delta_j < 0$"],
      correctAnswer: 1,
      explanation: "Đối với bài toán MIN, điều kiện tối ưu là tất cả các ước lượng $\\Delta_j \\le 0$. Nếu có $\\Delta_j > 0$, ta vẫn có thể làm giảm giá trị hàm mục tiêu."
    },
    {
      id: "q2-2-3",
      question: "Khi chọn hàng xoay (biến ra khỏi cơ sở), ta tính tỉ số $\\theta_i = b_i / a_{ik}$. Điều kiện của $a_{ik}$ là gì?",
      options: ["$a_{ik}$ tùy ý", "$a_{ik} \\ge 0$", "$a_{ik} > 0$", "$a_{ik} < 0$"],
      correctAnswer: 2,
      explanation: "Ta chỉ tính tỉ số $\\theta_i$ cho các phần tử $a_{ik} > 0$. Nếu tất cả $a_{ik} \\le 0$ trong cột xoay, bài toán không bị chặn (unbounded)."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Đưa bài toán sau về dạng chuẩn:\n$\\min f(x) = 2x_1 - 3x_2$\ns.t.\n$x_1 + x_2 \\le 5$\n$2x_1 - x_2 \\ge 3$\n$-x_1 + 2x_2 = 4$\n$x_1, x_2 \\ge 0$",
      solution: "1. Ràng buộc 1 ($x_1 + x_2 \\le 5$): Thêm biến bù $x_3 \\ge 0$.\n$\\Rightarrow x_1 + x_2 + x_3 = 5$\n\n2. Ràng buộc 2 ($2x_1 - x_2 \\ge 3$): Trừ biến thặng dư $x_4 \\ge 0$.\n$\\Rightarrow 2x_1 - x_2 - x_4 = 3$\n\n3. Ràng buộc 3 ($-x_1 + 2x_2 = 4$): Đã là đẳng thức, giữ nguyên.\n\n**Dạng chuẩn của bài toán:**\n$\\min f(x) = 2x_1 - 3x_2 + 0x_3 + 0x_4$\ns.t.\n$x_1 + x_2 + x_3 = 5$\n$2x_1 - x_2 - x_4 = 3$\n$-x_1 + 2x_2 = 4$\n$x_1, x_2, x_3, x_4 \\ge 0$"
    },
    {
      problem: "**Bài 2:** Cho bảng đơn hình của một bài toán MAX như sau:\nCơ sở: $x_3, x_4$. Cột $x_1$ có các hệ số $a_{11}=2, a_{21}=1$. Cột phương án $b$ có $b_1=8, b_2=5$. Dòng ước lượng $\\Delta$ có $\\Delta_1 = -4, \\Delta_2 = -3$. \nHãy xác định phần tử chốt (pivot) cho bước lặp tiếp theo.",
      solution: "1. **Chọn cột xoay (biến vào):**\nVì đây là bài toán MAX, ta chọn cột có $\\Delta_j < 0$ nhỏ nhất (âm nhiều nhất).\nTa có $\\Delta_1 = -4$ và $\\Delta_2 = -3$. Số nhỏ nhất là $-4$, ứng với cột $x_1$.\nVậy cột xoay là $k = 1$.\n\n2. **Chọn hàng xoay (biến ra):**\nTính tỉ số $\\theta_i = b_i / a_{i1}$ cho các $a_{i1} > 0$:\n- Hàng 1: $\\theta_1 = 8 / 2 = 4$\n- Hàng 2: $\\theta_2 = 5 / 1 = 5$\n\nChọn hàng có $\\theta_i$ nhỏ nhất, tức là $\\theta_1 = 4$. Vậy hàng xoay là $r = 1$.\n\n3. **Kết luận:**\nPhần tử chốt nằm ở giao của hàng 1 và cột 1. Vậy phần tử chốt là $a_{11} = 2$."
    },
    {
      problem: "**Bài 3:** Giải bài toán sau bằng phương pháp đơn hình:\n$\\max f = 3x_1 + 2x_2$\ns.t.\n$x_1 + x_2 \\le 4$\n$2x_1 + x_2 \\le 5$\n$x_1, x_2 \\ge 0$",
      solution: "1. **Dạng chuẩn:** Thêm biến bù $x_3, x_4 \\ge 0$.\n$\\max f = 3x_1 + 2x_2 + 0x_3 + 0x_4$\ns.t. $x_1 + x_2 + x_3 = 4$\n$2x_1 + x_2 + x_4 = 5$\n\n2. **Bảng 1:** Cơ sở ban đầu $(x_3, x_4)$.\n$\\Delta_1 = -3, \\Delta_2 = -2$. Chọn cột $x_1$ (vì -3 nhỏ nhất).\nTỉ số: $\\theta_1 = 4/1 = 4$, $\\theta_2 = 5/2 = 2.5$. Chọn hàng 2 (biến $x_4$ ra). Phần tử chốt là 2.\n\n3. **Bảng 2:** Cơ sở $(x_3, x_1)$.\nXoay bảng: Hàng 2 chia 2. Hàng 1 trừ Hàng 2 mới.\n$\\Delta$ mới: $\\Delta_1 = 0, \\Delta_2 = -0.5, \\Delta_3 = 0, \\Delta_4 = 1.5$.\nCột xoay là $x_2$ (vì $\\Delta_2 = -0.5 < 0$).\nTỉ số: $\\theta_1 = 1.5 / 0.5 = 3$, $\\theta_2 = 2.5 / 0.5 = 5$. Chọn hàng 1 (biến $x_3$ ra). Phần tử chốt là 0.5.\n\n4. **Bảng 3:** Cơ sở $(x_2, x_1)$.\nXoay bảng: Hàng 1 chia 0.5. Hàng 2 trừ (0.5 * Hàng 1 mới).\n$\\Delta$ mới: $\\Delta_1 = 0, \\Delta_2 = 0, \\Delta_3 = 1, \\Delta_4 = 1$.\nMọi $\\Delta_j \\ge 0$, bảng đã tối ưu.\n\n**Kết quả:** $x_1 = 1, x_2 = 3$, $f_{max} = 9$."
    }
  ]
};
