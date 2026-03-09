import { Lesson } from '../../lessons';

export const lesson1: Lesson = {
  id: "ch2-l1",
  title: "2.1 Giải QHTT bằng Đồ thị",
  content: `
# Giải bài toán QHTT bằng phương pháp đồ thị

Phương pháp đồ thị là một công cụ trực quan và hiệu quả để giải quyết các bài toán Quy hoạch tuyến tính (QHTT) có **đúng 2 biến quyết định** ($x_1, x_2$).

---

### 1. Ý tưởng cơ bản
Tập hợp các điểm thỏa mãn tất cả các ràng buộc của bài toán QHTT tạo thành một đa giác lồi (hoặc đa diện lồi trong không gian nhiều chiều), được gọi là **tập phương án** (Feasible Region).
Theo định lý cơ bản của QHTT: *Nếu bài toán có phương án tối ưu, thì ít nhất một phương án tối ưu sẽ nằm tại một trong các đỉnh (điểm cực biên) của tập phương án.*

### 2. Các bước thực hiện
**Bước 1: Vẽ tập phương án**
- Vẽ hệ trục tọa độ $O x_1 x_2$.
- Với mỗi ràng buộc bất đẳng thức (VD: $a x_1 + b x_2 \\le c$), vẽ đường thẳng tương ứng $a x_1 + b x_2 = c$.
- Xác định nửa mặt phẳng thỏa mãn bất đẳng thức (thường bằng cách thử tọa độ điểm gốc $O(0,0)$).
- Phần giao của tất cả các nửa mặt phẳng (bao gồm cả ràng buộc $x_1, x_2 \\ge 0$) chính là tập phương án.

**Bước 2: Vẽ vector pháp tuyến của hàm mục tiêu**
- Hàm mục tiêu có dạng: $f(x) = c_1 x_1 + c_2 x_2$.
- Vẽ vector pháp tuyến $\\vec{c} = (c_1, c_2)$ xuất phát từ gốc tọa độ. Vector này chỉ hướng làm tăng giá trị của hàm mục tiêu nhanh nhất.

**Bước 3: Tịnh tiến đường mức (Level Curve)**
- Vẽ một đường thẳng $\\Delta$ vuông góc với vector $\\vec{c}$ (đường $\\Delta$ có phương trình $c_1 x_1 + c_2 x_2 = const$).
- **Nếu bài toán là MAX:** Tịnh tiến $\\Delta$ theo hướng của $\\vec{c}$ cho đến khi nó chuẩn bị rời khỏi tập phương án. Điểm chạm cuối cùng chính là phương án tối ưu.
- **Nếu bài toán là MIN:** Tịnh tiến $\\Delta$ theo hướng ngược lại của $\\vec{c}$ cho đến khi nó chuẩn bị rời khỏi tập phương án.

**Bước 4: Tính toán kết quả**
- Giải hệ phương trình tạo bởi 2 đường thẳng giao nhau tại đỉnh tối ưu để tìm tọa độ chính xác $(x_1^*, x_2^*)$.
- Thay tọa độ vào hàm mục tiêu để tìm giá trị tối ưu $f^*$.

---

### 3. Các trường hợp đặc biệt
- **Vô số nghiệm:** Đường mức song song với một cạnh của tập phương án và cạnh đó nằm ở vị trí tối ưu. Mọi điểm trên cạnh đó đều là phương án tối ưu.
- **Vô nghiệm (Không có phương án):** Tập phương án là tập rỗng (các ràng buộc mâu thuẫn nhau).
- **Không giới hạn (Unbounded):** Tập phương án không bị chặn về hướng tối ưu hóa của hàm mục tiêu (giá trị hàm mục tiêu có thể tiến tới $\\pm \\infty$).
  `,
  quiz: [
    {
      id: "q2-1-1",
      question: "Phương pháp đồ thị thường được sử dụng cho bài toán QHTT có tối đa bao nhiêu biến?",
      options: ["1 biến", "2 biến", "3 biến", "Không giới hạn"],
      correctAnswer: 1,
      explanation: "Phương pháp đồ thị chỉ trực quan và dễ vẽ trên mặt phẳng tọa độ 2D, do đó áp dụng cho bài toán có 2 biến quyết định."
    },
    {
      id: "q2-1-2",
      question: "Trong phương pháp đồ thị cho bài toán MAX, ta tịnh tiến đường mức theo hướng nào?",
      options: ["Ngược hướng vector pháp tuyến", "Vuông góc với vector pháp tuyến", "Cùng hướng vector pháp tuyến", "Hướng về gốc tọa độ"],
      correctAnswer: 2,
      explanation: "Vector pháp tuyến $\\vec{c} = (c_1, c_2)$ chỉ hướng làm tăng giá trị hàm mục tiêu. Do đó, để tìm MAX, ta tịnh tiến đường mức cùng hướng với vector $\\vec{c}$."
    },
    {
      id: "q2-1-3",
      question: "Trường hợp nào sau đây xảy ra khi tập phương án là tập rỗng?",
      options: ["Bài toán có vô số nghiệm", "Bài toán có nghiệm duy nhất", "Bài toán không bị chặn", "Bài toán vô nghiệm"],
      correctAnswer: 3,
      explanation: "Khi tập phương án là tập rỗng (không có điểm nào thỏa mãn tất cả các ràng buộc), bài toán QHTT không có phương án chấp nhận được, tức là vô nghiệm."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Giải bài toán sau bằng phương pháp đồ thị:\n$\\max f(x) = 3x_1 + 2x_2$\ns.t.\n$x_1 + x_2 \\le 4$\n$x_1 - x_2 \\le 2$\n$x_1, x_2 \\ge 0$",
      solution: "1. **Vẽ tập phương án:**\n- Đường $d_1: x_1 + x_2 = 4$ đi qua $(4,0)$ và $(0,4)$. Lấy nửa mặt phẳng chứa gốc $O$.\n- Đường $d_2: x_1 - x_2 = 2$ đi qua $(2,0)$ và $(0,-2)$. Lấy nửa mặt phẳng chứa gốc $O$.\n- Ràng buộc $x_1, x_2 \\ge 0$ giới hạn trong góc phần tư thứ nhất.\n- Tập phương án là tứ giác với các đỉnh: $O(0,0), A(2,0), B(3,1), C(0,4)$. (Đỉnh B là giao của $d_1$ và $d_2$).\n\n2. **Đánh giá hàm mục tiêu tại các đỉnh:**\n- $f(0,0) = 0$\n- $f(2,0) = 3(2) + 2(0) = 6$\n- $f(3,1) = 3(3) + 2(1) = 11$\n- $f(0,4) = 3(0) + 2(4) = 8$\n\n3. **Kết luận:**\nGiá trị lớn nhất là 11 tại đỉnh $B(3,1)$. Vậy phương án tối ưu là $x^* = (3, 1)$ với $f_{max} = 11$."
    },
    {
      problem: "**Bài 2:** Giải bài toán sau bằng phương pháp đồ thị:\n$\\min f(x) = 2x_1 + 5x_2$\ns.t.\n$x_1 + 2x_2 \\ge 6$\n$3x_1 + x_2 \\ge 8$\n$x_1, x_2 \\ge 0$",
      solution: "1. **Vẽ tập phương án:**\n- Đường $d_1: x_1 + 2x_2 = 6$ đi qua $(6,0)$ và $(0,3)$. Lấy nửa mặt phẳng KHÔNG chứa gốc $O$.\n- Đường $d_2: 3x_1 + x_2 = 8$ đi qua $(8/3,0)$ và $(0,8)$. Lấy nửa mặt phẳng KHÔNG chứa gốc $O$.\n- Tập phương án là miền không bị chặn phía trên bên phải, với các đỉnh: $A(6,0), B(2,2), C(0,8)$. (Đỉnh B là giao của $d_1$ và $d_2$).\n\n2. **Đánh giá hàm mục tiêu tại các đỉnh:**\n- $f(6,0) = 2(6) + 5(0) = 12$\n- $f(2,2) = 2(2) + 5(2) = 14$\n- $f(0,8) = 2(0) + 5(8) = 40$\n\n3. **Kết luận:**\nVì đây là bài toán MIN và tập phương án bị chặn dưới, giá trị nhỏ nhất là 12 tại đỉnh $A(6,0)$. Vậy phương án tối ưu là $x^* = (6, 0)$ với $f_{min} = 12$."
    },
    {
      problem: "**Bài 3:** Cho bài toán:\n$\\max f(x) = 4x_1 + 4x_2$\ns.t.\n$x_1 + x_2 \\le 5$\n$x_1 \\le 3$\n$x_2 \\le 4$\n$x_1, x_2 \\ge 0$\nTìm phương án tối ưu và nhận xét về số lượng nghiệm.",
      solution: "1. **Vẽ tập phương án:**\n- Đường $d_1: x_1 + x_2 = 5$.\n- Đường $d_2: x_1 = 3$.\n- Đường $d_3: x_2 = 4$.\n- Tập phương án là đa giác với các đỉnh: $(0,0), (3,0), (3,2), (1,4), (0,4)$.\n\n2. **Đánh giá hàm mục tiêu tại các đỉnh:**\n- $f(0,0) = 0$\n- $f(3,0) = 12$\n- $f(3,2) = 4(3) + 4(2) = 20$\n- $f(1,4) = 4(1) + 4(4) = 20$\n- $f(0,4) = 16$\n\n3. **Nhận xét:**\nGiá trị lớn nhất là 20, đạt được tại hai đỉnh liên tiếp là $(3,2)$ và $(1,4)$.\nĐiều này xảy ra vì vector pháp tuyến của hàm mục tiêu $\\vec{c} = (4,4)$ cùng phương với vector pháp tuyến của đường thẳng $d_1: x_1 + x_2 = 5$ (là $(1,1)$).\nDo đó, đường mức song song với cạnh nối $(3,2)$ và $(1,4)$.\n\n**Kết luận:** Bài toán có vô số nghiệm. Mọi điểm nằm trên đoạn thẳng nối $(3,2)$ và $(1,4)$ đều là phương án tối ưu, với $f_{max} = 20$."
    }
  ]
};
