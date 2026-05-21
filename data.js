// CẤU TRÚC MÔN HỌC VÀ CHỦ ĐIỂM
const CURRICULUM = {
    "Toán học": ["Phép cộng trong phạm vi 10 000", "Phép trừ trong phạm vi 10 000", "Tìm các thành phần của phép nhân, phép chia trong phạm vi 10 000", "Chu vi hình chữ nhật, hình vuông", "Trung điểm của đoạn thẳng", "Tâm, bán kính, đường kính của hình tròn"],
    "Tiếng Việt": ["Ôn tập về từ chỉ sự vật", "Mở rộng vốn từ: Măng non", "Ôn tập về từ chỉ hoạt động", "Phân biệt r / d / gi", "Ôn tập về từ chỉ đặc điểm", "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", "Mở rộng vốn từ: Gia đình", "Câu kể", "Ôn tập câu Ở đâu, Vì sao, Khi nào", "Viết đoạn văn tả đồ dùng"],
    "Tiếng Anh": ["Structures: Greeting", "Vocabulary: Hello and Goodbye", "Phonics: /h/ and /b/", "Structures: Introduce yourself", "Vocabulary: Names and ages", "Phonics: /m/ and /n/", "Structures: Introducing a friend or a teacher", "Vocabulary: Friends and teachers", "Phonics: th - /ð/ and /θ/", "Structures: What's this?"],
    "Kỹ năng sống": ["Tiền ra đời như thế nào?", "Em có bao nhiêu tiền?", "Những chiếc lọ thông minh", "Khi nào em đủ? Khi nào em thiếu?", "Quản lý tiền và ghi chép thông minh", "Bí mật hóa đơn siêu thị"]
};

// NGÂN HÀNG CÂU HỎI (Bạn sẽ thêm các câu hỏi vào đây)
const QUESTION_BANK = [
   /* =================================================================
       CHỦ ĐIỂM: TRUNG ĐIỂM CỦA ĐOẠN THẲNG (50 CÂU HỎI)
       ================================================================= */
    
    // --- 13 CÂU TRẮC NGHIỆM - CƠ BẢN ---
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đoạn thẳng AB dài 10 cm. M là trung điểm của AB. Độ dài đoạn AM là:", options: ["A. 20 cm", "B. 5 cm", "C. 10 cm", "D. 2 cm"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "N là trung điểm của đoạn CD. Biết CN = 8 cm. Độ dài đoạn CD là:", options: ["A. 8 cm", "B. 4 cm", "C. 16 cm", "D. 24 cm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "O là trung điểm của PQ. Biết OQ = 15 cm. Độ dài đoạn PO là:", options: ["A. 15 cm", "B. 30 cm", "C. 5 cm", "D. 10 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Để I là trung điểm của đoạn thẳng RS thì:", options: ["A. I nằm giữa R và S", "B. IR = IS", "C. I nằm ngoài đoạn RS", "D. Cả A và B đều đúng"], answer: 3 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đoạn thẳng MN = 24 cm. K là trung điểm của MN. Độ dài KM là:", options: ["A. 12 cm", "B. 48 cm", "C. 8 cm", "D. 6 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Trung điểm của một đoạn thẳng chia đoạn thẳng đó thành mấy phần bằng nhau?", options: ["A. 3 phần", "B. 2 phần", "C. 4 phần", "D. Không chia phần nào"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Một sợi dây dài 20 cm được cắt làm đôi. Chiều dài mỗi nửa là:", options: ["A. 10 cm", "B. 40 cm", "C. 5 cm", "D. 15 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Quãng đường từ nhà đến trường dài 500 m. An đi được nửa đường thì đứng lại nghỉ. Quãng đường An đã đi là:", options: ["A. 1000 m", "B. 500 m", "C. 250 m", "D. 100 m"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Cây cầu dài 40 m. Người ta cắm một lá cờ ở chính giữa cầu. Cờ cách đầu cầu bao nhiêu mét?", options: ["A. 10 m", "B. 20 m", "C. 30 m", "D. 40 m"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Thanh gỗ dài 18 cm được cưa làm đôi. Mỗi đoạn dài:", options: ["A. 36 cm", "B. 10 cm", "C. 8 cm", "D. 9 cm"], answer: 3 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Băng giấy dài 14 cm. Gập đôi băng giấy lại sao cho 2 đầu mép chạm nhau. Độ dài của băng giấy lúc gấp là:", options: ["A. 7 cm", "B. 14 cm", "C. 28 cm", "D. 6 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Bố có một hàng rào dài 30 m. Bố đã sơn được một nửa hàng rào. Số mét rào bố đã sơn là:", options: ["A. 60 m", "B. 15 m", "C. 10 m", "D. 20 m"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Cây sào dài 16 m. Chú Nam sơn màu đỏ đúng một nửa cây sào. Chiều dài phần sơn đỏ là:", options: ["A. 32 m", "B. 4 m", "C. 8 m", "D. 10 m"], answer: 2 },

    // --- 12 CÂU TRẮC NGHIỆM - NÂNG CAO (Đổi đơn vị, Tính 2 bước) ---
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đoạn thẳng AB dài 1 dm 6 cm. M là trung điểm của AB. Độ dài AM là:", options: ["A. 3 cm", "B. 8 cm", "C. 16 cm", "D. 32 cm"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "CD = 2 dm. N là trung điểm của CD. Độ dài CN là:", options: ["A. 10 cm", "B. 1 dm", "C. Cả A và B đều đúng", "D. 4 dm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "PQ = 400 mm. O là trung điểm của PQ. Độ dài PO là bao nhiêu xăng-ti-mét?", options: ["A. 20 cm", "B. 200 cm", "C. 2 cm", "D. 40 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đoạn thẳng AB dài 32 cm. M là trung điểm của AB, N là trung điểm của AM. Độ dài đoạn AN là:", options: ["A. 16 cm", "B. 8 cm", "C. 4 cm", "D. 12 cm"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "M là trung điểm của đoạn thẳng AB. Biết AM = 1 dm 2 cm. Độ dài đoạn AB bằng bao nhiêu cm?", options: ["A. 24 cm", "B. 12 cm", "C. 6 cm", "D. 48 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "CD = 1 m. N là trung điểm của CD. Chiều dài đoạn CN tính bằng xăng-ti-mét là:", options: ["A. 10 cm", "B. 5 cm", "C. 50 cm", "D. 100 cm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Cuộn ruy băng dài 1 m. Mẹ cắt đúng điểm chính giữa. Mỗi nửa ruy băng dài bao nhiêu xăng-ti-mét?", options: ["A. 10 cm", "B. 50 cm", "C. 100 cm", "D. 20 cm"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Con kiến bò trên cành cây dài 1 dm 8 cm. Bò đến chính giữa thì dừng lại. Kiến đã bò được bao nhiêu xăng-ti-mét?", options: ["A. 9 cm", "B. 18 cm", "C. 36 cm", "D. 8 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Bố cưa khúc gỗ dài 2 m 4 dm thành hai phần bằng nhau. Mỗi phần dài bao nhiêu đề-xi-mét?", options: ["A. 12 dm", "B. 24 dm", "C. 48 dm", "D. 14 dm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đường từ nhà An đến trường dài 2 km. Một cửa hàng nằm ở chính giữa quãng đường. Cửa hàng cách nhà An bao nhiêu mét?", options: ["A. 1000 m", "B. 200 m", "C. 4000 m", "D. 100 m"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Tấm vải dài 40 dm. Mẹ cắt đôi lấy 1 mảnh, rồi lại gập đôi mảnh đó cắt lấy 1 mảnh nhỏ nhất. Mảnh nhỏ nhất dài bao nhiêu đề-xi-mét?", options: ["A. 20 dm", "B. 5 dm", "C. 10 dm", "D. 4 dm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Hộp bút dài 2 dm. Bạn Long dán một chiếc tem ở chính giữa hộp. Tem cách mép hộp bao nhiêu xăng-ti-mét?", options: ["A. 10 cm", "B. 1 cm", "C. 5 cm", "D. 20 cm"], answer: 0 },

    // --- 12 CÂU TỰ LUẬN ĐIỀN SỐ - CƠ BẢN ---
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng EF dài 12 cm. I là trung điểm của EF. Độ dài EI là bao nhiêu cm? (Chỉ điền số)", answer: "6" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng GH dài 40 cm. K là trung điểm của GH. Độ dài KH là bao nhiêu cm? (Chỉ điền số)", answer: "20" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "M là trung điểm của đoạn thẳng XY. Biết XM = 9 cm. Độ dài XY là bao nhiêu cm? (Chỉ điền số)", answer: "18" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "N là trung điểm của đoạn UV. Biết NV = 15 cm. Độ dài UN là bao nhiêu cm? (Chỉ điền số)", answer: "15" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng AB có trung điểm M. Khi cắt ở điểm M thì được đoạn AM dài 7 cm. Cả đoạn AB dài bao nhiêu cm? (Chỉ điền số)", answer: "14" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng dài 50 cm. Trung điểm của đoạn thẳng đó nằm cách mỗi đầu mút bao nhiêu cm? (Chỉ điền số)", answer: "25" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Dây thép dài 22 cm uốn gập đôi lại. Độ dài mỗi nửa của dây thép là bao nhiêu cm? (Chỉ điền số)", answer: "11" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Cây sào dài 60 cm, bác thợ cưa làm 2 đoạn bằng nhau. Một đoạn dài bao nhiêu cm? (Chỉ điền số)", answer: "30" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Con bọ ngựa nằm ở chính giữa cành cây dài 28 cm. Bọ ngựa cách gốc cành cây bao nhiêu cm? (Chỉ điền số)", answer: "14" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Sợi len dài 20 cm, em cắt một nửa để buộc quà. Em đã dùng bao nhiêu cm len? (Chỉ điền số)", answer: "10" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Quãng đường dài 800 m. Nửa quãng đường đó dài bao nhiêu mét? (Chỉ điền số)", answer: "400" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Bạn An chạy nửa vòng sân. Biết cả vòng sân dài 120 m. Bạn An đã chạy được bao nhiêu mét? (Chỉ điền số)", answer: "60" },

    // --- 13 CÂU TỰ LUẬN ĐIỀN SỐ - NÂNG CAO (Đổi đơn vị, Tính 2 bước) ---
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng AB dài 1 m 20 cm. M là trung điểm của AB. Độ dài đoạn AM là bao nhiêu cm? (Chỉ điền số)", answer: "60" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng CD dài 3 dm. K là trung điểm của CD. Độ dài CK là bao nhiêu cm? (Chỉ điền số)", answer: "15" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "I là trung điểm của đoạn RS. Biết IS = 2 dm 5 cm. Độ dài RS là bao nhiêu cm? (Chỉ điền số)", answer: "50" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "M là trung điểm của AB. N là trung điểm của AM. Biết AB = 40 cm. Độ dài AN là bao nhiêu cm? (Chỉ điền số)", answer: "10" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "P là trung điểm của MN. Q là trung điểm của PN. Biết MN = 80 cm. Độ dài QN là bao nhiêu cm? (Chỉ điền số)", answer: "20" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng XY dài 2 m. M là trung điểm của XY. Độ dài XM là bao nhiêu cm? (Chỉ điền số)", answer: "100" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "O là trung điểm của đoạn thẳng HK dài 1 dm 4 cm. Đoạn HO dài bao nhiêu cm? (Chỉ điền số)", answer: "7" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Một cuộn cáp dài 1 km. Người thợ rải được một nửa cuộn cáp thì nghỉ. Người đó đã rải được bao nhiêu mét? (Chỉ điền số)", answer: "500" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Thanh sắt dài 1 m 6 dm. Người ta cắt đôi thanh sắt. Mỗi đoạn dài bao nhiêu đề-xi-mét? (Chỉ điền số)", answer: "8" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Tấm ván dài 10 dm. Cưa đôi lấy 1 nửa, lại cưa đôi nửa đó. Mảnh ván bé nhất dài bao nhiêu xăng-ti-mét? (Chỉ điền số)", answer: "25" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Một ống nước dài 2 m được cắt đúng ở vị trí chính giữa. Một nửa của ống nước dài bao nhiêu cm? (Chỉ điền số)", answer: "100" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Băng giấy dài 3 dm 6 cm được cắt làm 2 phần bằng nhau. Mỗi phần dài bao nhiêu cm? (Chỉ điền số)", answer: "18" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đường từ nhà đến trường là 1 km. Một trạm xe buýt ở chính giữa đoạn đường. Trạm xe buýt cách nhà bao nhiêu mét? (Chỉ điền số)", answer: "500" }
];
