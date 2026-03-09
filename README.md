# HUST Optimization Master

Ứng dụng học tập trực tuyến dành cho môn học **Tối ưu hóa (Quy hoạch tuyến tính & Phi tuyến)**. Ứng dụng cung cấp nền tảng học tập tương tác với lý thuyết, bài tập trắc nghiệm và bài tập tự luận có lời giải chi tiết.

## 🌟 Chức năng chính

- **Giao diện Dark Mode hiện đại**: Nền đen tuyền (Pitch Black) kết hợp với chữ trắng và các điểm nhấn/tiêu đề màu vàng (Yellow) giúp giảm mỏi mắt và tăng độ tập trung.
- **Hỗ trợ Toán học mạnh mẽ**: Tích hợp Markdown và KaTeX để hiển thị các công thức toán học phức tạp một cách rõ ràng, đẹp mắt.
- **Hệ thống Bài học Đa dạng**:
  - 📖 **Lý thuyết**: Trình bày chi tiết, dễ hiểu bằng Markdown.
  - 📝 **Trắc nghiệm (Quiz)**: Các câu hỏi trắc nghiệm tương tác, chấm điểm trực tiếp và hiển thị lời giải thích chi tiết cho từng câu.
  - 🧠 **Bài tập tự luận**: Các bài toán thực hành với chức năng "Ẩn/Hiện lời giải" giúp người học tự tư duy trước khi xem đáp án.
- **Điều hướng thông minh**: Sidebar trực quan giúp dễ dàng chuyển đổi giữa các chương và bài học. Có thanh tiến độ học tập.
- **Responsive Design**: Hoạt động mượt mà trên cả máy tính (Desktop) và thiết bị di động (Mobile).

## 📂 Cấu trúc thư mục dữ liệu

Toàn bộ nội dung bài học được quản lý tập trung và module hóa trong thư mục `src/data/lessons/`. Cấu trúc như sau:

```text
src/data/lessons/
├── index.ts                 # File gốc xuất dữ liệu toàn bộ khóa học (OPTIMIZATION_DATA)
├── chapter1.ts              # Định nghĩa Chương 1 và gộp các bài học của chương 1
├── chapter2.ts              # Định nghĩa Chương 2...
├── chapter1/
│   ├── lesson1.ts           # Nội dung Bài 1.1
│   └── lesson2.ts           # Nội dung Bài 1.2
├── chapter2/
│   ├── lesson1.ts           # Nội dung Bài 2.1
│   └── lesson2.ts           # Nội dung Bài 2.2
...
```

## 🛠 Hướng dẫn Cập nhật Nội dung

### 1. Cấu trúc của một Bài học (Lesson)

Mỗi bài học là một object tuân theo interface `Lesson`. Ví dụ trong file `src/data/lessons/chapter1/lesson1.ts`:

```typescript
import { Lesson } from '../../lessons';

export const lesson1: Lesson = {
  id: "ch1-l1",
  title: "1.1 Tiêu đề bài học",
  content: `
# Nội dung lý thuyết (Markdown)
Hỗ trợ công thức toán học: $x_1 + x_2 \\le 10$
  `,
  quiz: [
    {
      id: "q1-1-1",
      question: "Nội dung câu hỏi trắc nghiệm?",
      options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
      correctAnswer: 0, // Vị trí của đáp án đúng trong mảng options (bắt đầu từ 0)
      explanation: "Giải thích tại sao đáp án A đúng."
    }
  ],
  exercises: [
    {
      problem: "**Bài 1:** Nội dung đề bài...",
      solution: "Lời giải chi tiết..."
    }
  ]
};
```

**Cách cập nhật bài học hiện có:**
- Mở file `lessonX.ts` tương ứng cần sửa.
- Chỉnh sửa chuỗi `content` để cập nhật lý thuyết (sử dụng cú pháp Markdown và LaTeX).
- Thêm/sửa các object trong mảng `quiz` để cập nhật câu hỏi trắc nghiệm.
- Thêm/sửa các object trong mảng `exercises` để cập nhật bài tập tự luận.

### 2. Thêm một Bài học mới vào Chương hiện có

1. Tạo một file mới trong thư mục của chương đó (ví dụ: `src/data/lessons/chapter1/lesson3.ts`).
2. Copy cấu trúc của một bài học có sẵn và thay đổi nội dung, `id`, `title`.
3. Mở file định nghĩa chương (ví dụ: `src/data/lessons/chapter1.ts`).
4. Import bài học mới và thêm vào mảng `lessons`:

```typescript
import { Chapter } from '../lessons';
import { lesson1 } from './chapter1/lesson1';
import { lesson2 } from './chapter1/lesson2';
import { lesson3 } from './chapter1/lesson3'; // Import bài mới

export const chapter1: Chapter = {
  id: "ch1",
  title: "Chương 1: Tiêu đề chương",
  lessons: [
    lesson1,
    lesson2,
    lesson3 // Thêm vào đây
  ]
};
```

### 3. Thêm một Chương (Chapter) mới

1. Tạo thư mục mới cho chương (ví dụ: `src/data/lessons/chapter5/`).
2. Tạo các file bài học bên trong thư mục đó (`lesson1.ts`, `lesson2.ts`,...).
3. Tạo file định nghĩa chương `src/data/lessons/chapter5.ts`:

```typescript
import { Chapter } from '../lessons';
import { lesson1 } from './chapter5/lesson1';

export const chapter5: Chapter = {
  id: "ch5",
  title: "Chương 5: Tiêu đề chương mới",
  lessons: [lesson1]
};
```

4. Mở file `src/data/lessons/index.ts`.
5. Import chương mới và thêm vào mảng `OPTIMIZATION_DATA`:

```typescript
import { chapter1 } from './chapter1';
// ...
import { chapter5 } from './chapter5'; // Import chương mới

export const OPTIMIZATION_DATA: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5 // Thêm vào đây
];
```

## 💻 Công nghệ sử dụng

- **React 18** & **Vite**
- **Tailwind CSS v4** (Styling)
- **Lucide React** (Icons)
- **Framer Motion** (Animations)
- **React Markdown** & **Rehype KaTeX** (Render Markdown & Toán học)

---

## 📱 Hướng dẫn Build APK cho Android

Vì đây là một ứng dụng web (React/Vite), cách tốt nhất và nhanh nhất để đóng gói nó thành file APK cài đặt trên Android là sử dụng **Capacitor**.

Dưới đây là các bước thực hiện:

### Yêu cầu hệ thống
- Đã cài đặt Node.js và npm.
- Đã cài đặt **Android Studio** (để build ra file APK).

### Các bước thực hiện

**1. Cài đặt Capacitor vào dự án**

Mở terminal tại thư mục gốc của dự án và chạy các lệnh sau:

```bash
npm install @capacitor/core
npm install -D @capacitor/cli
```

**2. Khởi tạo Capacitor**

```bash
npx cap init
```
- Khi được hỏi tên ứng dụng (App name): Nhập tên bạn muốn (VD: `Optimization Master`).
- Khi được hỏi App Package ID: Nhập ID theo định dạng domain ngược (VD: `com.yourname.optimization`).
- Khi được hỏi thư mục build (Web asset directory): Nhập `dist`.

**3. Build ứng dụng web**

Trước khi đưa vào Android, bạn cần build mã nguồn React ra HTML/CSS/JS tĩnh:

```bash
npm run build
```

**4. Cài đặt nền tảng Android cho Capacitor**

```bash
npm install @capacitor/android
npx cap add android
```

**5. Đồng bộ code web vào thư mục Android**

Mỗi khi bạn thay đổi code React và chạy `npm run build`, bạn cần chạy lệnh này để copy thư mục `dist` vào project Android:

```bash
npx cap sync
```

**6. Build APK (2 Cách)**

**Cách 1: Sử dụng Android Studio (Khuyến nghị cho người mới)**
Mở project Android vừa được tạo bằng Android Studio:

```bash
npx cap open android
```

- Trong Android Studio, đợi Gradle đồng bộ xong.
- Để build file APK: Chọn menu **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
- Sau khi build xong, Android Studio sẽ hiện thông báo ở góc dưới bên phải. Nhấn vào **locate** để mở thư mục chứa file `.apk`.

**Cách 2: Build trực tiếp bằng Command Line (Không cần mở Android Studio)**
Nếu bạn đã cài đặt Android SDK và cấu hình biến môi trường đầy đủ, bạn có thể build trực tiếp từ terminal:

```bash
cd android
./gradlew assembleDebug
```
*(Trên Windows, dùng lệnh `gradlew assembleDebug`)*

File APK sẽ được tạo ra tại đường dẫn: `android/app/build/outputs/apk/debug/app-debug.apk`

- Bạn có thể copy file `.apk` này vào điện thoại Android và cài đặt.

### Cập nhật ứng dụng sau này
Khi bạn thay đổi code React (ví dụ thêm bài học mới), bạn chỉ cần làm 3 bước:
1. `npm run build`
2. `npx cap sync`
3. Build lại APK bằng một trong hai cách trên.

---
*Được xây dựng để giúp việc học Toán Tối ưu trở nên dễ dàng và thú vị hơn!*
