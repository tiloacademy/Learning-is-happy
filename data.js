// CẤU TRÚC MÔN HỌC VÀ CHỦ ĐIỂM
const CURRICULUM = {
    "Toán học": ["Phép cộng trong phạm vi 10 000", "Phép trừ trong phạm vi 10 000", "Tìm các thành phần của phép nhân, phép chia trong phạm vi 10 000", "Chu vi hình chữ nhật, hình vuông", "Trung điểm của đoạn thẳng", "Tâm, bán kính, đường kính của hình tròn"],
    "Tiếng Việt": ["Ôn tập về từ chỉ sự vật", "Mở rộng vốn từ: Măng non", "Ôn tập về từ chỉ hoạt động", "Phân biệt r / d / gi", "Ôn tập về từ chỉ đặc điểm", "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", "Mở rộng vốn từ: Gia đình", "Câu kể", "Ôn tập câu Ở đâu, Vì sao, Khi nào", "Viết đoạn văn tả đồ dùng"],
    "Tiếng Anh": ["Structures: Greeting", "Vocabulary: Hello and Goodbye", "Phonics: /h/ and /b/", "Structures: Introduce yourself", "Vocabulary: Names and ages", "Phonics: /m/ and /n/", "Structures: Introducing a friend or a teacher", "Vocabulary: Friends and teachers", "Phonics: th - /ð/ and /θ/", "Structures: What's this?"],
    "Kỹ năng sống": ["Tiền ra đời như thế nào?", "Em có bao nhiêu tiền?", "Những chiếc lọ thông minh", "Khi nào em đủ? Khi nào em thiếu?", "Quản lý tiền và ghi chép thông minh", "Bí mật hóa đơn siêu thị"]
};

// NGÂN HÀNG CÂU HỎI (Bạn sẽ thêm các câu hỏi vào đây)
const QUESTION_BANK = [
    {
        topic: "Tìm các thành phần của phép nhân, phép chia trong phạm vi 10 000",
        question: "Tìm x, biết: x × 3 = 612",
        options: ["A. x = 24", "B. x = 204", "C. x = 1836", "D. x = 240"],
        answer: 1 
    },
    {
        topic: "Chu vi hình chữ nhật, hình vuông",
        question: "Một mảnh đất hình vuông có chu vi là 36 m. Cứ cách 1m đóng 1 cọc tre xung quanh. Hỏi cần bao nhiêu cọc?",
        options: ["A. 36 cọc", "B. 9 cọc", "C. 37 cọc", "D. 18 cọc"],
        answer: 0 
    },
    {
        topic: "Ôn tập về từ chỉ sự vật",
        question: "Từ nào dưới đây KHÔNG phải là từ chỉ sự vật?",
        options: ["A. Bàn ghế", "B. Sách vở", "C. Nhảy múa", "D. Bút thước"],
        answer: 2
    }
];
