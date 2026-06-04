// CẤU TRÚC MÔN HỌC VÀ CHỦ ĐIỂM
const CURRICULUM = {
    "Toán học": ["Phép cộng trong phạm vi 10 000", "Phép trừ trong phạm vi 10 000", "Tìm các thành phần của phép nhân, phép chia trong phạm vi 10 000", "Chu vi hình chữ nhật, hình vuông", "Trung điểm của đoạn thẳng", "Tâm, bán kính, đường kính của hình tròn", "Bảng nhân 7, Bảng chia 7"],
    "Toán Tiếng Anh": ["Multiplication tables of 7, 8 and 9", "Division tables of 7, 8 and 9"],
    "Tiếng Việt": ["Ôn tập về từ chỉ sự vật", "Mở rộng vốn từ: Măng non", "Ôn tập về từ chỉ hoạt động", "Phân biệt r / d / gi", "Ôn tập về từ chỉ đặc điểm", "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", "Mở rộng vốn từ: Gia đình", "Câu kể", "Ôn tập câu Ở đâu, Vì sao, Khi nào", "Viết đoạn văn tả đồ dùng"],
    "Tiếng Anh": ["Structures: Greeting", "Vocabulary: Hello and Goodbye", "Phonics: /h/ and /b/", "Structures: Introduce yourself", "Vocabulary: Names and ages", "Phonics: /m/ and /n/", "Structures: Introducing a friend or a teacher", "Vocabulary: Friends and teachers", "Phonics: th - /ð/ and /θ/", "Structures: What's this?"],
    "Kỹ năng sống": ["Tiền ra đời như thế nào?", "Em có bao nhiêu tiền?", "Những chiếc lọ thông minh", "Khi nào em đủ? Khi nào em thiếu?", "Quản lý tiền và ghi chép thông minh", "Bí mật hóa đơn siêu thị"]
};

// NGÂN HÀNG CÂU HỎI (Bạn sẽ thêm các câu hỏi vào đây)
const QUESTION_BANK = [
   /* =================================================================
       CHỦ ĐIỂM: TRUNG ĐIỂM CỦA ĐOẠN THẲNG (ĐỦ 50 CÂU)
       ================================================================= */
    
    // --- 25 CÂU TRẮC NGHIỆM (MCQ) ---
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đoạn thẳng AB dài 10 cm. M là trung điểm của AB. Độ dài đoạn AM là:", options: ["A. 20 cm", "B. 5 cm", "C. 10 cm", "D. 2 cm"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "N là trung điểm của đoạn CD. Biết CN = 8 cm. Độ dài đoạn CD là:", options: ["A. 8 cm", "B. 4 cm", "C. 16 cm", "D. 24 cm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "O là trung điểm của PQ. Biết OQ = 15 cm. Độ dài đoạn PO là:", options: ["A. 15 cm", "B. 30 cm", "C. 5 cm", "D. 10 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đoạn thẳng MN = 24 cm. K là trung điểm của MN. Độ dài KM là:", options: ["A. 12 cm", "B. 48 cm", "C. 8 cm", "D. 6 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Một sợi dây dài 20 cm được cắt làm đôi. Chiều dài mỗi nửa là:", options: ["A. 10 cm", "B. 40 cm", "C. 5 cm", "D. 15 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Quãng đường từ nhà đến trường dài 500 m. An đi được nửa đường thì đứng lại nghỉ. Quãng đường An đã đi là:", options: ["A. 1000 m", "B. 500 m", "C. 250 m", "D. 100 m"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Cây cầu dài 40 m. Người ta cắm một lá cờ ở chính giữa cầu. Cờ cách đầu cầu là:", options: ["A. 10 m", "B. 20 m", "C. 30 m", "D. 40 m"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Thanh gỗ dài 18 cm được cưa làm đôi. Mỗi đoạn dài:", options: ["A. 36 cm", "B. 10 cm", "C. 8 cm", "D. 9 cm"], answer: 3 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Băng giấy dài 14 cm. Gập đôi băng giấy lại sao cho 2 đầu mép chạm nhau. Độ dài của băng giấy lúc gấp là:", options: ["A. 7 cm", "B. 14 cm", "C. 28 cm", "D. 6 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Bố có một hàng rào dài 30 m. Bố đã sơn được một nửa hàng rào. Số mét rào bố đã sơn là:", options: ["A. 60 m", "B. 15 m", "C. 10 m", "D. 20 m"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Cây sào dài 16 m. Chú Nam sơn màu đỏ đúng một nửa cây sào. Chiều dài phần sơn đỏ là:", options: ["A. 32 m", "B. 4 m", "C. 8 m", "D. 10 m"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Sợi len dài 12 cm. Tiểu Long cắt đôi để làm thủ công. Mỗi đoạn len dài:", options: ["A. 24 cm", "B. 12 cm", "C. 6 cm", "D. 4 cm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đoạn thẳng AB dài 1 dm 6 cm. M là trung điểm của AB. Độ dài AM là:", options: ["A. 3 cm", "B. 8 cm", "C. 16 cm", "D. 32 cm"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "CD = 2 dm. N là trung điểm của CD. Độ dài CN là:", options: ["A. 10 cm", "B. 1 dm", "C. Cả A và B đều đúng", "D. 4 dm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "PQ = 400 mm. O là trung điểm của PQ. Độ dài PO là:", options: ["A. 20 cm", "B. 200 cm", "C. 2 cm", "D. 40 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đoạn thẳng AB dài 32 cm. M là trung điểm của AB, N là trung điểm của AM. Độ dài đoạn AN là:", options: ["A. 16 cm", "B. 8 cm", "C. 4 cm", "D. 12 cm"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "M là trung điểm của đoạn thẳng AB. Biết AM = 1 dm 2 cm. Độ dài đoạn AB là:", options: ["A. 24 cm", "B. 12 cm", "C. 6 cm", "D. 48 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "CD = 1 m. N là trung điểm của CD. Độ dài đoạn CN là:", options: ["A. 10 cm", "B. 5 cm", "C. 50 cm", "D. 100 cm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Cuộn ruy băng dài 1 m. Mẹ cắt đúng điểm chính giữa. Mỗi nửa ruy băng dài:", options: ["A. 10 cm", "B. 50 cm", "C. 100 cm", "D. 20 cm"], answer: 1 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Con kiến bò trên cành cây dài 1 dm 8 cm. Bò đến chính giữa thì dừng lại. Kiến đã bò được:", options: ["A. 9 cm", "B. 18 cm", "C. 36 cm", "D. 8 cm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Bố cưa khúc gỗ dài 2 m 4 dm thành hai phần bằng nhau. Mỗi phần dài:", options: ["A. 12 dm", "B. 24 dm", "C. 48 dm", "D. 14 dm"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Đường từ nhà An đến trường dài 2 km. Một cửa hàng nằm ở chính giữa quãng đường. Cửa hàng cách nhà An là:", options: ["A. 1000 m", "B. 200 m", "C. 4000 m", "D. 100 m"], answer: 0 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Tấm vải dài 40 dm. Mẹ cắt đôi lấy 1 mảnh, rồi lại gập đôi mảnh đó cắt lấy 1 mảnh nhỏ nhất. Mảnh nhỏ nhất dài:", options: ["A. 20 dm", "B. 5 dm", "C. 10 dm", "D. 4 dm"], answer: 2 },
    { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Hộp bút dài 2 dm. Bạn Long dán một chiếc tem ở chính giữa hộp. Tem cách mép hộp là:", options: ["A. 10 cm", "B. 1 cm", "C. 5 cm", "D. 20 cm"], answer: 0 },
   { topic: "Trung điểm của đoạn thẳng", type: "mcq", question: "Trên bản đồ, đoạn đường từ tỉnh A đến tỉnh B dài 8 dm. Một trạm O nằm chính giữa đường. Khoảng cách từ tỉnh A đến trạm O trên bản đồ là:", options: ["A. 40 cm", "B. 4 cm", "C. 400 cm", "D. 16 cm"], answer: 0 },
    // --- 25 CÂU TỰ LUẬN ĐIỀN SỐ (FIB) ---
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng EF dài 12 cm. I là trung điểm của EF. Độ dài EI là bao nhiêu cm?", answer: "6" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng GH dài 40 cm. K là trung điểm của GH. Độ dài KH là bao nhiêu cm?", answer: "20" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "M là trung điểm của đoạn thẳng XY. Biết XM = 9 cm. Độ dài XY là bao nhiêu cm?", answer: "18" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "N là trung điểm của đoạn UV. Biết NV = 15 cm. Độ dài UN là bao nhiêu cm?", answer: "15" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng AB có trung điểm M. Khi cắt ở điểm M thì được đoạn AM dài 7 cm. Cả đoạn AB dài bao nhiêu cm?", answer: "14" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng dài 50 cm. Trung điểm của đoạn thẳng đó nằm cách mỗi đầu mút bao nhiêu cm?", answer: "25" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Dây thép dài 22 cm uốn gập đôi lại. Độ dài mỗi nửa của dây thép là bao nhiêu cm?", answer: "11" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Cây sào dài 60 cm, bác thợ cưa làm 2 đoạn bằng nhau. Một đoạn dài bao nhiêu cm?", answer: "30" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Con bọ ngựa nằm ở chính giữa cành cây dài 28 cm. Bọ ngựa cách gốc cành cây bao nhiêu cm?", answer: "14" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Sợi len dài 20 cm, em cắt một nửa để buộc quà. Em đã dùng bao nhiêu xăng-ti-mét len?", answer: "10" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Quãng đường dài 800 m. Nửa quãng đường đó dài bao nhiêu mét?", answer: "400" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Bạn An chạy nửa vòng sân. Biết cả vòng sân dài 120 m. Bạn An đã chạy được bao nhiêu mét?", answer: "60" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng AB dài 1 m 20 cm. M là trung điểm của AB. Độ dài đoạn AM là bao nhiêu xăng-ti-mét?", answer: "60" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng CD dài 3 dm. K là trung điểm của CD. Độ dài CK là bao nhiêu xăng-ti-mét?", answer: "15" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "I là trung điểm của đoạn RS. Biết IS = 2 dm 5 cm. Độ dài RS là bao nhiêu xăng-ti-mét?", answer: "50" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "M là trung điểm của AB. N là trung điểm của AM. Biết AB = 40 cm. Độ dài AN là bao nhiêu xăng-ti-mét?", answer: "10" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "P là trung điểm của MN. Q là trung điểm của PN. Biết MN = 80 cm. Độ dài QN là bao nhiêu xăng-ti-mét?", answer: "20" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đoạn thẳng XY dài 2 m. M là trung điểm của XY. Độ dài XM là bao nhiêu xăng-ti-mét?", answer: "100" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "O là trung điểm của đoạn thẳng HK dài 1 dm 4 cm. Đoạn HO là bao nhiêu xăng-ti-mét?", answer: "7" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Một cuộn cáp dài 1 km. Người thợ rải được một nửa cuộn cáp thì nghỉ. Người đó đã rải được bao nhiêu mét?", answer: "500" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Thanh sắt dài 1 m 6 dm. Người ta cắt đôi thanh sắt. Mỗi đoạn dài bao nhiêu đề-xi-mét?", answer: "8" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Tấm ván dài 10 dm. Cưa đôi lấy 1 nửa, lại cưa đôi nửa đó. Mảnh ván bé nhất dài bao nhiêu xăng-ti-mét?", answer: "25" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Một ống nước dài 2 m được cắt đúng ở vị trí chính giữa. Một nửa của ống nước dài bao nhiêu xăng-ti-mét?", answer: "100" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Băng giấy dài 3 dm 6 cm được cắt làm 2 phần bằng nhau. Mỗi phần dài bao nhiêu xăng-ti-mét?", answer: "18" },
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đường từ nhà đến trường là 1 km. Một trạm xe buýt ở chính giữa đoạn đường. Trạm xe buýt cách nhà bao nhiêu mét?", answer: "500" }, 

    /* =================================================================
       CHỦ ĐIỂM: TÂM, BÁN KÍNH, ĐƯỜNG KÍNH CỦA HÌNH TRÒN (60 CÂU)
       ================================================================= */

    // -----------------------------------------------------------------
    // PHẦN 1: 10 CÂU TÍCH HỢP KIẾN THỨC "TRUNG ĐIỂM"
    // -----------------------------------------------------------------
    // MCQ
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Tâm O của hình tròn là ... của đường kính AB. Từ thích hợp điền vào chỗ chấm là:", options: ["A. Một phần", "B. Trung điểm", "C. Điểm bất kỳ", "D. Bán kính"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Đoạn thẳng AB dài 1200 mm là đường kính hình tròn. Biết M là trung điểm AB. Độ dài đoạn AM (bán kính) là:", options: ["A. 2400 mm", "B. 60 cm", "C. 600 cm", "D. 240 cm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Chiếc bánh pizza hình tròn bị cắt bởi một nhát dao tạo thành đường kính AB dài 24 cm. Tâm O là trung điểm AB. Bán kính của chiếc bánh là:", options: ["A. 48 cm", "B. 12 cm", "C. 6 cm", "D. 20 cm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Bác thợ mộc có một thanh gỗ làm đường kính bánh xe dài 1 m 8 dm. Bác đánh dấu trung điểm O làm tâm. Bán kính bánh xe dài:", options: ["A. 90 cm", "B. 9 dm", "C. Cả A và B đều đúng", "D. 36 cm"], answer: 2 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "I là trung điểm của đường kính CD của hình tròn tâm I. Biết bán kính CI = 1500 mm. Đường kính CD dài:", options: ["A. 750 mm", "B. 300 mm", "C. 3000 cm", "D. 300 cm"], answer: 3 },
    // FIB
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Cho đường tròn tâm O, đường kính MN = 48 cm. Vì O là trung điểm của MN nên bán kính ON dài bao nhiêu cm?", answer: "24" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một hình tròn có tâm O là trung điểm của đường kính HK. Biết bán kính OH = 2500 mm. Độ dài đường kính HK là bao nhiêu mét?", answer: "5" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Bố cắt một chiếc bánh kem dọc theo đường kính AB đo được 30 cm. Tâm O là trung điểm AB. Khoảng cách từ tâm O đến mép bánh là bao nhiêu cm?", answer: "15" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Đường kính đi qua tâm O của một chiếc đĩa tròn là đoạn thẳng PQ. Biết tâm O là trung điểm của PQ và OQ = 1 dm 5 cm. Đường kính của chiếc đĩa là bao nhiêu cm?", answer: "30" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một hồ nước hình tròn có tâm I là trung điểm của đường kính AB. Biết khoảng cách từ tâm I đến bờ hồ là 4500 mm. Đường kính của hồ nước dài bao nhiêu cm?", answer: "900" },

    // -----------------------------------------------------------------
    // PHẦN 2: 10 CÂU TÍCH HỢP KIẾN THỨC "HÌNH VUÔNG"
    // -----------------------------------------------------------------
    // MCQ
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Một hình vuông có cạnh bằng đường kính của hình tròn tâm O. Cạnh hình vuông dài 18 cm. Bán kính hình tròn là:", options: ["A. 36 cm", "B. 18 cm", "C. 9 cm", "D. 4 cm"], answer: 2 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Chu vi hình vuông là 3200 mm. Một hình tròn có đường kính bằng cạnh hình vuông đó. Bán kính hình tròn là:", options: ["A. 40 cm", "B. 160 cm", "C. 80 cm", "D. 400 cm"], answer: 0 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Khung cửa sổ hình vuông có cạnh 80 cm. Bố lắp một tấm kính hình tròn vừa khít vào khung (đường kính bằng cạnh hình vuông). Bán kính tấm kính là:", options: ["A. 160 cm", "B. 40 cm", "C. 80 cm", "D. 20 cm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Sân chơi hình vuông có chu vi 80 m. Người ta vẽ một vòng tròn lớn nhất trong sân (đường kính bằng cạnh sân). Bán kính vòng tròn là:", options: ["A. 20 m", "B. 40 m", "C. 10 m", "D. 5 m"], answer: 2 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Một hình tròn có bán kính 1250 mm. Một hình vuông có cạnh bằng đường kính hình tròn đó. Cạnh hình vuông dài:", options: ["A. 250 cm", "B. 2500 cm", "C. 625 mm", "D. 25 cm"], answer: 0 },
    // FIB
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Hình vuông có cạnh 42 cm. Đường kính của hình tròn tâm O bằng cạnh hình vuông. Bán kính hình tròn là bao nhiêu cm?", answer: "21" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Bán kính một bồn hoa hình tròn là 1500 cm. Đường kính bồn hoa này bằng cạnh của một cái sân hình vuông. Chu vi của sân hình vuông đó là bao nhiêu mét?", answer: "120" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một chiếc bánh chưng hình vuông có cạnh 16 cm. Đường kính của một chiếc đĩa tròn bằng đúng cạnh chiếc bánh chưng. Bán kính của chiếc đĩa là bao nhiêu cm?", answer: "8" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một viên gạch hình vuông có chu vi 1600 mm. Chú thợ xây vẽ một đường tròn có đường kính bằng cạnh viên gạch. Bán kính đường tròn đó là bao nhiêu cm?", answer: "20" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một bức tranh hình vuông có cạnh bằng đường kính của một chiếc gương tròn. Biết bán kính gương là 20 cm. Chu vi của bức tranh hình vuông là bao nhiêu cm?", answer: "160" },

    // -----------------------------------------------------------------
    // PHẦN 3: 20 CÂU TRẮC NGHIỆM TỔNG HỢP (CƠ BẢN & NÂNG CAO)
    // -----------------------------------------------------------------
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Đặc điểm nào sau đây của hình tròn là đúng?", options: ["A. Có nhiều tâm khác nhau", "B. Bán kính gấp đôi đường kính", "C. Đường kính gấp đôi bán kính", "D. Các bán kính không bằng nhau"], answer: 2 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Bán kính hình tròn dài 15 cm. Đường kính hình tròn đó là:", options: ["A. 30 cm", "B. 15 cm", "C. 5 cm", "D. 20 cm"], answer: 0 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Đường kính hình tròn dài 40 cm. Bán kính hình tròn đó là:", options: ["A. 80 cm", "B. 20 cm", "C. 10 cm", "D. 60 cm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Bánh xe đạp của bé Tiểu Long có đường kính 50 cm. Bán kính của bánh xe là:", options: ["A. 100 cm", "B. 25 cm", "C. 20 cm", "D. 30 cm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Mặt đồng hồ hình tròn có bán kính 12 cm. Kim phút dài bằng bán kính, đường kính của mặt đồng hồ là:", options: ["A. 6 cm", "B. 12 cm", "C. 36 cm", "D. 24 cm"], answer: 3 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Bán kính hình tròn là 1250 mm. Đường kính hình tròn là:", options: ["A. 250 cm", "B. 2500 cm", "C. 25 cm", "D. 500 cm"], answer: 0 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Đường kính một hình tròn dài 5 m 4 dm. Bán kính hình tròn đó là:", options: ["A. 108 dm", "B. 27 dm", "C. 27 m", "D. 207 dm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Một bồn hoa hình tròn có đường kính 4800 mm. Bác lao công trồng một cây hoa ở chính giữa bồn (tâm O). Khoảng cách từ cây hoa đến mép bồn là:", options: ["A. 240 cm", "B. 960 cm", "C. 2400 cm", "D. 480 cm"], answer: 0 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Đường kính của một cái nong đan bằng tre là 120 cm. Bán kính cái nong đó là:", options: ["A. 24 dm", "B. 60 dm", "C. 6 dm", "D. 12 dm"], answer: 2 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Tổng của một bán kính và một đường kính của cùng một hình tròn là 36 cm. Bán kính hình tròn đó là:", options: ["A. 18 cm", "B. 9 cm", "C. 12 cm", "D. 24 cm"], answer: 2 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Cho hình tròn tâm O, bán kính OA = 8 cm. Độ dài đoạn OB (B là một điểm nằm trên đường tròn) là:", options: ["A. 16 cm", "B. 4 cm", "C. 8 cm", "D. 24 cm"], answer: 2 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Đường kính của một hình tròn là 1456 mm. Bán kính của hình tròn đó là:", options: ["A. 2912 mm", "B. 728 mm", "C. 782 mm", "D. 708 mm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Chiếc mâm bằng đồng nặng 2000 gam có đường kính 60 cm. Khoảng cách từ tâm đến viền mâm là:", options: ["A. 12 dm", "B. 6 dm", "C. 3 dm", "D. 30 dm"], answer: 2 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Đáy của một bình nước hình tròn có bán kính 5 cm. Đường kính của đáy bình là:", options: ["A. 10 cm", "B. 2 cm", "C. 15 cm", "D. 25 cm"], answer: 0 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Nắp của bình chứa 5 lít nước có đường kính 140 mm. Bán kính của nắp bình nước là:", options: ["A. 280 cm", "B. 70 cm", "C. 28 cm", "D. 7 cm"], answer: 3 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Hai hình tròn có bán kính lần lượt là 10 cm và 15 cm. Tổng đường kính của hai hình tròn là:", options: ["A. 25 cm", "B. 50 cm", "C. 100 cm", "D. 75 cm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Một sân trượt patin hình tròn có bán kính 2500 mm. Cả chiều dài đường kính sân trượt patin là:", options: ["A. 5 mét", "B. 50 mét", "C. 500 mét", "D. 1250 mét"], answer: 0 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Cho bán kính của đường tròn là đoạn thẳng dài 1 km 200 m. Đường kính của đường tròn đó dài:", options: ["A. 2400 m", "B. 600 m", "C. 2000 m", "D. 2200 m"], answer: 0 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Bố mua một chiếc thảm tròn đường kính 200 cm. Bán kính chiếc thảm là:", options: ["A. 400 cm", "B. 100 cm", "C. 50 cm", "D. 100 dm"], answer: 1 },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "mcq", question: "Một can dầu 10 lít có đáy hình tròn đường kính 2 dm 8 cm. Bán kính đáy can dầu đó là:", options: ["A. 56 cm", "B. 14 dm", "C. 14 cm", "D. 1 dm 2 cm"], answer: 2 },

    // -----------------------------------------------------------------
    // PHẦN 4: 20 CÂU TỰ LUẬN ĐIỀN SỐ TỔNG HỢP (CƠ BẢN & NÂNG CAO)
    // -----------------------------------------------------------------
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Bán kính hình tròn dài 33 cm. Đường kính hình tròn đó dài bao nhiêu cm?", answer: "66" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Đường kính hình tròn dài 84 cm. Bán kính hình tròn đó dài bao nhiêu cm?", answer: "42" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một hình tròn tâm O có bán kính OA = 12 cm. Lấy điểm B trên đường tròn. Độ dài đoạn OB là bao nhiêu cm?", answer: "12" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một hình tròn có bán kính 1400 mm. Đường kính hình tròn đó là bao nhiêu cm?", answer: "280" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Đường kính hình tròn là 4 m 6 dm. Bán kính hình tròn đó là bao nhiêu dm?", answer: "23" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Tổng độ dài của hai bán kính trong một hình tròn là 4500 mm. Đường kính của hình tròn đó là bao nhiêu cm?", answer: "450" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Hiệu giữa đường kính và bán kính của một hình tròn là 1250 cm. Đường kính của hình tròn đó dài bao nhiêu mét?", answer: "25" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Cái mâm đĩa than của ông nội có đường kính 30 cm. Khoảng cách từ tâm đĩa đến mép ngoài của đĩa là bao nhiêu cm?", answer: "15" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Nắp chai nước suối hình tròn có bán kính 2 cm. Đường kính nắp chai là bao nhiêu cm?", answer: "4" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một chiếc hồ bơi hình tròn chứa đầy 4000 lít nước, có bán kính 3000 mm. Đường kính của hồ bơi đó là bao nhiêu mét?", answer: "6" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Cuộn dây cáp nặng 5 kg được quấn vào một lõi hình tròn có đường kính 180 cm. Bán kính của lõi cuốn dây đó là bao nhiêu đề-xi-mét?", answer: "9" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Bán kính đường tròn tâm O là số liền trước của 10 (đơn vị cm). Đường kính đường tròn đó là bao nhiêu cm?", answer: "18" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một đường tròn có bán kính dài bằng giá trị biểu thức: 1205 × 4 (đơn vị mm). Đường kính của đường tròn là bao nhiêu mm?", answer: "9640" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Lưỡi cưa mộc hình tròn có đường kính 44 cm. Khoảng cách từ tâm trục quay đến răng cưa ngoài cùng (bán kính) là bao nhiêu cm?", answer: "22" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Một chiếc gương soi hình tròn có bán kính 4 dm 5 cm. Đường kính của chiếc gương soi đó là bao nhiêu xăng-ti-mét?", answer: "90" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Đường kính hình tròn là số chẵn lớn nhất có 4 chữ số (đơn vị mm). Bán kính hình tròn đó là bao nhiêu mm?", answer: "4999" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Nắp cống hình tròn bằng gang nặng 50 kg có bán kính 350 mm. Đường kính của nắp cống đó là bao nhiêu cm?", answer: "70" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Chiếc chảo chống dính có đường kính 28 cm. Bán kính của lòng chảo là bao nhiêu cm?", answer: "14" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Khay trà bằng gỗ có đường kính 4 dm 2 cm. Bán kính của khay trà là bao nhiêu xăng-ti-mét?", answer: "21" },
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Đường tròn tâm O có bán kính là kết quả của phép chia 8424 : 4 (đơn vị cm). Đường kính của đường tròn đó là bao nhiêu cm?", answer: "4212" }, // ĐÃ THÊM DẤU PHẨY VÀO ĐÂY
    
    /* =================================================================
       CHỦ ĐIỂM: BẢNG NHÂN 7, BẢNG CHIA 7 (9 CÂU CHUẨN ẢNH VIOEDU)
       ================================================================= */
       
    // Bức ảnh 1 (Dropdown điền phép tính)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "inline_dropdown", 
        question: "Bạn hãy chọn đáp án thích hợp để điền vào chỗ trống.", 
        text: "___ : 7 = 4", 
        dropdowns: [["35", "14", "42", "28"]], 
        answer: ["28"] 
    },

    // Bức ảnh 2 (Điền số - Tìm tích)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "fib", 
        question: "Bạn hãy điền số thích hợp vào ô trống.<br>Phép nhân có thừa số thứ nhất là 7, thừa số thứ hai là 2 thì có tích bằng ...", 
        answer: "14" 
    },

    // Bức ảnh 3 (Trắc nghiệm - Chia gạo)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "mcq", 
        question: "Bạn hãy chọn đáp án đúng.<br>Bà chia 14kg gạo thành 7 túi nặng như nhau. Hỏi mỗi túi nặng bao nhiêu ki-lô-gam?", 
        options: ["3kg", "4kg", "5kg", "2kg"], 
        answer: 3 
    },

    // Bức ảnh 4 (Điền số - Toán đố 2 bước)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "fib", 
        question: "Bạn điền số thích hợp vào ô trống.<br>Một khu vui chơi thiếu nhi có 7 xe hai bánh, số xe ba bánh gấp 4 lần số xe hai bánh. Hỏi khu vui chơi đó có bao nhiêu xe ba bánh?<br>Trả lời: ... xe ba bánh.", 
        answer: "28" 
    },

    // Bức ảnh 5 (Điền số - Hàng đơn vị)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "fib", 
        question: "Bạn hãy điền số thích hợp vào ô trống.<br>Kết quả phép tính 7 × 6 - 15 có chữ số hàng đơn vị là ...", 
        answer: "7" 
    },

    // Bức ảnh 6 (Trắc nghiệm - Chia gạo 21kg)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "mcq", 
        question: "Bạn hãy chọn đáp án đúng.<br>Bà chia 21kg gạo thành 7 túi nặng như nhau. Hỏi mỗi túi nặng bao nhiêu ki-lô-gam?", 
        options: ["4kg", "2kg", "3kg", "5kg"], 
        answer: 2 
    },

    // Bức ảnh 7 (Trắc nghiệm - Trồng cây có đổi đơn vị)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "mcq", 
        question: "Bạn hãy chọn đáp án đúng.<br>Trên một đoạn đường dài 49m, người ta trồng cây, hai cây liên tiếp nhau 70dm, hai đầu đường đều có trồng cây. Hỏi trên đoạn đường có tất cả bao nhiêu cây?", 
        options: ["8 cây", "9 cây", "10 cây", "7 cây"], 
        answer: 0 
    },

    // Bức ảnh 8 (Sắp xếp kéo thả dọc)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "drag_drop_sort", 
        question: "Cho các phép tính sau<br>35 : 7 ; 15 - 7 ; 42 : 7 ; 49 : 7 - 4.<br>Sắp xếp các phép tính theo thứ tự kết quả tăng dần.", 
        items: ["15 - 7", "49 : 7 - 4", "35 : 7", "42 : 7"], 
        answer: ["49 : 7 - 4", "35 : 7", "42 : 7", "15 - 7"] 
    },

    // Bức ảnh 9 (Trắc nghiệm - Dãy chữ lặp lại)
    { 
        topic: "Bảng nhân 7, Bảng chia 7", 
        type: "mcq", 
        question: "Bạn hãy chọn đáp án đúng.<br>Một bạn viết liên tiếp một nhóm chữ gồm 7 chữ cái N, C, M, D, A, G, U thành dãy theo quy luật lặp lại của nhóm chữ đó. Biết rằng chữ cái thứ 52 là chữ N, chữ cái thứ 40 là chữ C, chữ cái thứ 35 là chữ M, chữ cái thứ 57 là chữ D, chữ cái thứ 13 là chữ A, chữ cái thứ 46 là chữ G.<br>Thứ tự sắp xếp đúng thứ tự của các chữ cái trong nhóm chữ là:", 
        options: [
            "C ; U ; M ; D ; A ; N ; G", 
            "D ; U ; N ; G ; C ; A ; M", 
            "N ; G ; A ; M ; D ; U ; C", 
            "C ; U ; N ; G ; D ; A ; M"
        ], 
        answer: 1 
    },

    /* =================================================================
       CHỦ ĐIỂM TOÁN TIẾNG ANH: DIVISION & MULTIPLICATION TABLES OF 7, 8, 9
       ================================================================= */

    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the product:<br>9 × 4 = ...", answer: "36" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Fill the correct number in the blank.<br>How many days are there in 4 weeks?", answer: "28" },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Fill the correct number in the blank.<br>Class 3A has 35 students, arranged in rows. Each row has 7 students.<br>How many rows are there in class 3A?", answer: "5" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "Choose the correct answer.<br>Students of class 3B are arranged in 8 rows, each row has 4 students. How many students are there in class 3B?", options: ["42", "12", "32", "40"], answer: 2 },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "Choose the correct answer.<br>If 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 = 63<br>then 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 = ...", options: ["52", "9", "54", "6"], answer: 2 },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "Choose the correct answer.<br>An's family has 63 chickens. The number of roosters is 1/7 of the total number of chickens, and the number of hens is 4 times the number of roosters. The rest are chicks.<br>How many chicks does An's family have?", options: ["18 chicks", "9 chicks", "36 chicks", "45 chicks"], answer: 0 },
    // Basic Calculations & Missing Factors
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the product:<br>8 × 7 = ...", answer: "56" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the product:<br>9 × 6 = ...", answer: "54" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the product:<br>7 × 7 = ...", answer: "49" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the product:<br>8 × 9 = ...", answer: "72" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the product:<br>9 × 9 = ...", answer: "81" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct number to fill in the blank.", text: "___ × 8 = 64", dropdowns: [["6", "7", "8", "9"]], answer: ["8"] },
    { topic: "Multiplication tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct number to fill in the blank.", text: "7 × ___ = 42", dropdowns: [["6", "7", "8", "9"]], answer: ["6"] },
    { topic: "Multiplication tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct number to fill in the blank.", text: "___ × 9 = 45", dropdowns: [["4", "5", "6", "7"]], answer: ["5"] },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "Which of the following expressions is equal to 56?", options: ["8 × 6", "9 × 7", "7 × 8", "9 × 5"], answer: 2 },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "Find the product of 9 and 8.", options: ["72", "64", "81", "63"], answer: 0 },
    
    // Basic Word Problems
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "Each box has 8 crayons. How many crayons are there in 6 boxes?", options: ["48 crayons", "42 crayons", "54 crayons", "56 crayons"], answer: 0 },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "A spider has 8 legs. How many legs do 7 spiders have in total?", options: ["49 legs", "56 legs", "64 legs", "63 legs"], answer: 1 },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "There are 7 days in a week. How many days are there in 9 weeks?", options: ["56 days", "63 days", "70 days", "72 days"], answer: 1 },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Fill the correct number in the blank.<br>How many days are there in 4 weeks?", answer: "28" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "Choose the correct answer.<br>Students of class 3B are arranged in 8 rows, each row has 4 students. How many students are there in class 3B?", options: ["42", "12", "32", "40"], answer: 2 },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "There are 9 rows of chairs in a classroom. Each row has 5 chairs. How many chairs are there in total?<br>Answer: ... chairs", answer: "45" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "A shirt has 8 buttons. How many buttons are there on 9 shirts?<br>Answer: ... buttons", answer: "72" },
    
    // Advanced: Multi-step, Comparison, Logic
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Calculate the value of the expression:<br>8 × 6 + 12 = ...", answer: "60" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "fib", question: "Calculate the value of the expression:<br>9 × 7 - 20 = ...", answer: "43" },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "Which of the following expressions has the GREATEST value?", options: ["8 × 7", "9 × 6", "7 × 9", "8 × 8"], answer: 3 },
    { topic: "Multiplication tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct sign (>, <, =) to fill in the blank.", text: "8 × 5 ___ 9 × 4", dropdowns: [[">", "<", "="]], answer: [">"] },
    { topic: "Multiplication tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct sign (>, <, =) to fill in the blank.", text: "7 × 8 ___ 9 × 6", dropdowns: [[">", "<", "="]], answer: [">"] },
    { topic: "Multiplication tables of 7, 8 and 9", type: "match", question: "Match the expression with its correct product:", left: ["7 × 6", "8 × 4", "9 × 3"], right: ["42", "32", "27"], answer: {"7 × 6": "42", "8 × 4": "32", "9 × 3": "27"} },
    { topic: "Multiplication tables of 7, 8 and 9", type: "match", question: "Match the expression with its correct product:", left: ["8 × 8", "9 × 5", "7 × 9"], right: ["64", "45", "63"], answer: {"8 × 8": "64", "9 × 5": "45", "7 × 9": "63"} },
    { topic: "Multiplication tables of 7, 8 and 9", type: "drag_drop_sort", question: "Sort the products from SMALLEST to LARGEST:", items: ["7 × 5", "8 × 3", "9 × 2", "7 × 4"], answer: ["9 × 2", "8 × 3", "7 × 4", "7 × 5"] },
    { topic: "Multiplication tables of 7, 8 and 9", type: "drag_drop_sort", question: "Sort the products from LARGEST to SMALLEST:", items: ["9 × 8", "8 × 8", "7 × 9", "9 × 9"], answer: ["9 × 9", "9 × 8", "8 × 8", "7 × 9"] },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "An's mother bought 4 bags of apples and 5 bags of oranges. Each bag contains 8 fruits. How many fruits did she buy in total?", options: ["72 fruits", "64 fruits", "81 fruits", "56 fruits"], answer: 0 },
    { topic: "Multiplication tables of 7, 8 and 9", type: "mcq", question: "Lan reads 9 pages of a book every day. How many pages does she read in a full week?", options: ["54 pages", "63 pages", "72 pages", "81 pages"], answer: 1 },
    { topic: "Multiplication tables of 7, 8 and 9", type: "multi_select", question: "Which of the following equations are CORRECT? (Select all that apply)", options: ["8 × 7 = 56", "9 × 6 = 56", "7 × 8 = 56", "9 × 9 = 82"], answer: [0, 2] },
    { topic: "Multiplication tables of 7, 8 and 9", type: "multi_select", question: "Select all expressions that have a product GREATER THAN 50:", options: ["7 × 8", "9 × 5", "8 × 8", "7 × 6"], answer: [0, 2] },

    // -----------------------------------------------------------------
    // DIVISION TABLES OF 7, 8 AND 9 (30 QUESTIONS)
    // -----------------------------------------------------------------
    
    // Basic Calculations & Missing Elements
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the quotient:<br>56 : 8 = ...", answer: "7" },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the quotient:<br>63 : 9 = ...", answer: "7" },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the quotient:<br>48 : 8 = ...", answer: "6" },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the quotient:<br>72 : 9 = ...", answer: "8" },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Fill the suitable number in the blank.<br>Find the quotient:<br>49 : 7 = ...", answer: "7" },
    { topic: "Division tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct number to fill in the blank.", text: "81 : ___ = 9", dropdowns: [["7", "8", "9", "10"]], answer: ["9"] },
    { topic: "Division tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct number to fill in the blank.", text: "___ : 8 = 5", dropdowns: [["32", "40", "48", "56"]], answer: ["40"] },
    { topic: "Division tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct number to fill in the blank.", text: "54 : ___ = 6", dropdowns: [["7", "8", "9", "6"]], answer: ["9"] },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "Find the quotient of 64 and 8.", options: ["6", "7", "8", "9"], answer: 2 },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "Find the quotient of 42 and 7.", options: ["6", "7", "8", "9"], answer: 0 },
    
    // Basic Word Problems
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "72 students are divided equally into 8 groups. How many students are there in each group?", options: ["7 students", "8 students", "9 students", "10 students"], answer: 2 },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "54 apples are placed equally into 9 baskets. How many apples are in each basket?", options: ["5 apples", "6 apples", "7 apples", "8 apples"], answer: 1 },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "A ribbon is 56 cm long. It is cut into 7 equal pieces. How long is each piece?", options: ["7 cm", "8 cm", "9 cm", "6 cm"], answer: 1 },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "A teacher has 45 notebooks. She gives them equally to 9 students. How many notebooks does each student get?<br>Answer: ... notebooks", answer: "5" },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "There are 64 chairs arranged equally in 8 rows. How many chairs are in each row?<br>Answer: ... chairs", answer: "8" },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Fill the correct number in the blank.<br>Class 3A has 35 students, arranged in rows. Each row has 7 students.<br>How many rows are there in class 3A?", answer: "5" },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "Choose the correct answer.<br>If 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 = 63<br>then 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 = ...", options: ["52", "9", "54", "6"], answer: 2 },
    
    // Advanced: Multi-step, Comparison, Fractions
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Calculate the value of the expression:<br>72 : 8 + 15 = ...", answer: "24" },
    { topic: "Division tables of 7, 8 and 9", type: "fib", question: "Calculate the value of the expression:<br>81 : 9 × 5 = ...", answer: "45" },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "Which of the following expressions has the SMALLEST value?", options: ["56 : 7", "63 : 9", "48 : 8", "36 : 9"], answer: 3 },
    { topic: "Division tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct sign (>, <, =) to fill in the blank.", text: "64 : 8 ___ 54 : 9", dropdowns: [[">", "<", "="]], answer: [">"] },
    { topic: "Division tables of 7, 8 and 9", type: "inline_dropdown", question: "Choose the correct sign (>, <, =) to fill in the blank.", text: "72 : 9 ___ 56 : 7", dropdowns: [[">", "<", "="]], answer: ["="] },
    { topic: "Division tables of 7, 8 and 9", type: "match", question: "Match the division expression with its correct quotient:", left: ["56 : 8", "81 : 9", "40 : 8"], right: ["7", "9", "5"], answer: {"56 : 8": "7", "81 : 9": "9", "40 : 8": "5"} },
    { topic: "Division tables of 7, 8 and 9", type: "match", question: "Match the division expression with its correct quotient:", left: ["63 : 7", "48 : 8", "27 : 9"], right: ["9", "6", "3"], answer: {"63 : 7": "9", "48 : 8": "6", "27 : 9": "3"} },
    { topic: "Division tables of 7, 8 and 9", type: "drag_drop_sort", question: "Sort the quotients from SMALLEST to LARGEST:", items: ["32 : 8", "45 : 9", "42 : 7", "56 : 8"], answer: ["32 : 8", "45 : 9", "42 : 7", "56 : 8"] },
    { topic: "Division tables of 7, 8 and 9", type: "drag_drop_sort", question: "Sort the quotients from LARGEST to SMALLEST:", items: ["72 : 8", "63 : 9", "48 : 8", "36 : 9"], answer: ["72 : 8", "63 : 9", "48 : 8", "36 : 9"] },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "What is 1/8 of 64 kg?", options: ["6 kg", "7 kg", "8 kg", "9 kg"], answer: 2 },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "What is 1/9 of 54 liters?", options: ["5 liters", "6 liters", "7 liters", "8 liters"], answer: 1 },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "Choose the correct answer.<br>An's family has 63 chickens. The number of roosters is 1/7 of the total number of chickens, and the number of hens is 4 times the number of roosters. The rest are chicks.<br>How many chicks does An's family have?", options: ["18 chicks", "9 chicks", "36 chicks", "45 chicks"], answer: 0 },
    { topic: "Division tables of 7, 8 and 9", type: "mcq", question: "If 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 + 🍎 = 72<br>then 🍎 + 🍎 + 🍎 = ...", options: ["27", "18", "36", "45"], answer: 0 },


    /* =================================================================
       CHỦ ĐIỂM: MỞ RỘNG VỐN TỪ: MĂNG NON (TỔNG HỢP 91 CÂU)
       ================================================================= */

    // -----------------------------------------------------------------
    // PHẦN 1: 31 CÂU HỎI BÁM SÁT 100% ẢNH MẪU VIOEDU (ĐÃ ÁP DỤNG 4 DẠNG)
    // -----------------------------------------------------------------
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Ngày Quốc tế Thiếu nhi là ngày nào trong năm?", options: ["A. Ngày 21 tháng 6", "B. Ngày 30 tháng 4", "C. Ngày 20 tháng 11", "D. Ngày 1 tháng 6"], answer: 3 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn từ chỉ hoạt động của trẻ em có trong câu sau: 'Các bạn nhỏ tham gia sáng tác thơ kỉ niệm Ngày Nhà giáo Việt Nam.'", options: ["A. kỉ niệm", "B. tham gia, sáng tác thơ", "C. Ngày Nhà giáo", "D. bạn nhỏ"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn từ để điền vào chỗ trống để hoàn thành câu: Thiếu nhi rèn luyện .... và biết .... vì mọi người.", options: ["A. đạo đức / sống", "B. buồn / tinh thần", "C. tinh thần / chơi", "D. đạo đức / buồn"], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn từ thích hợp điền vào chỗ trống để được câu đúng: Mỗi đứa trẻ được .... đều trở thành một đứa trẻ bị ....... Không gì ác độc hơn là nuông chiều trẻ. (Alfred Adler)", options: ["A. chiều chuộng / yêu thương", "B. ghét bỏ / chiều chuộng", "C. chiều chuộng / ghét bỏ", "D. yêu thương / ghét bỏ"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn từ thích hợp điền vào chỗ trống để hoàn thành câu danh ngôn sau: Một đứa trẻ sống trong .... sẽ tìm được tình yêu và cái đẹp.", options: ["A. đau khổ", "B. khó khăn", "C. hạnh phúc", "D. giàu sang"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Trong các từ dưới đây, từ nào chứa tiếng 'hiền' có nghĩa KHÁC với các từ còn lại?", options: ["A. hiền hậu", "B. hiền lành", "C. hiền từ", "D. hiền thê"], answer: 3 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn những từ ngữ chỉ trẻ em với thái độ tôn trọng:", options: ["A. nhóc con, trẻ ranh", "B. thiếu nhi, trẻ em, trẻ thơ", "C. nhóc con, trẻ thơ", "D. trẻ em, trẻ ranh"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "order", question: "Em hãy click vào các từ bên dưới để sắp xếp tạo thành câu hợp lí:", words: ["năm học mới.", "khai giảng", "chúng em", "Tháng chín,", "vui đón", "ngày lễ"], answer: "Tháng chín, chúng em vui đón ngày lễ khai giảng năm học mới." },
    { topic: "Mở rộng vốn từ: Măng non", type: "match", question: "Em hãy nối các nội dung ở cột bên trái với cột bên phải để được câu hợp lý:", left: ["Chúng em", "Thiếu nhi", "Chích bông"], right: ["là bạn của trẻ em.", "là măng non đất nước.", "là học sinh tiểu học."], answer: {"Chúng em": "là học sinh tiểu học.", "Thiếu nhi": "là măng non đất nước.", "Chích bông": "là bạn của trẻ em."} },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Thành ngữ nào dưới đây không nói về trẻ em?", options: ["A. Uốn cây từ thuở còn non. Dạy con từ thuở con còn ngây thơ.", "B. Vạch áo cho người xem lưng.", "C. Trẻ em hôm nay thế giới ngày mai.", "D. Trẻ em như búp trên cành. Biết ăn biết ngủ biết học hành là ngoan."], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "order", question: "Em hãy click sắp xếp các từ ngữ sau để tạo thành câu hợp lí:", words: ["chơi đuổi bắt.", "chúng em", "cùng nhau", "Giờ ra chơi,"], answer: "Giờ ra chơi, chúng em cùng nhau chơi đuổi bắt." },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Câu ca dao, tục ngữ nào dưới đây không phải nói về trẻ em?", options: ["A. Gần mực thì đen, gần đèn thì sáng.", "B. Trẻ người non dạ.", "C. Tre già măng mọc.", "D. Yêu trẻ, trẻ đến nhà. Kính già, già để tuổi cho."], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "order", question: "Em hãy sắp xếp để hoàn thành thông tin về Đội Thiếu niên Tiền phong Hồ Chí Minh:", words: ["Đội Thiếu niên Tiền phong Hồ Chí Minh", "thiếu niên nhi đồng", "Chủ tịch Hồ Chí Minh", "hướng dẫn."], answer: "Đội Thiếu niên Tiền phong Hồ Chí Minh thiếu niên nhi đồng Chủ tịch Hồ Chí Minh hướng dẫn." },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Hãy chọn từ phù hợp điền vào chỗ trống để hoàn thành câu văn sau: Thiếu nhi là ..... của đất nước.", options: ["A. nỗi buồn", "B. quá khứ", "C. tương lai", "D. vất vả"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Em hãy điền từ phù hợp để hoàn thành 5 điều Bác Hồ dạy: 1. Yêu Tổ quốc, yêu .........", answer: "đồng bào" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Em hãy điền từ phù hợp để hoàn thành 5 điều Bác Hồ dạy: 2. Học tập tốt, ......... tốt.", answer: "lao động" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Em hãy điền từ phù hợp để hoàn thành 5 điều Bác Hồ dạy: 3. Đoàn kết tốt, ......... tốt.", answer: "kỉ luật" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Em hãy điền từ phù hợp để hoàn thành 5 điều Bác Hồ dạy: 5. Khiêm tốn, ......... , dũng cảm.", answer: "thật thà" },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn các từ ngữ chỉ tính nết của trẻ em trong các từ sau đây: Ngoan ngoãn, ngây thơ, lễ phép, hiền từ, nghiêm khắc.", options: ["A. Ngoan ngoãn, hiền từ, nghiêm khắc", "B. Ngoan ngoãn, ngây thơ, lễ phép", "C. hiền từ, nghiêm khắc", "D. ngây thơ, hiền từ, nghiêm khắc"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn các từ ngữ chỉ tình cảm của người lớn đối với trẻ em trong các từ sau đây: Thương yêu, kính trọng, kính mến, yêu mến, yêu quý.", options: ["A. kính trọng, kính mến", "B. Thương yêu, yêu mến, yêu quý", "C. Thương yêu, kính trọng, kính mến", "D. kính mến, yêu mến, yêu quý"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn từ thích hợp điền vào chỗ trống để được câu đúng: Ba tháng biết ...., bảy tháng biết ...., chín tháng lò dò ....", options: ["A. bò / lẫy / chạy đi", "B. chạy đi / lẫy / bò", "C. lẫy / bò / chạy đi", "D. lẫy / chạy đi / bò"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "order", question: "Em hãy sắp xếp các từ sau để thành câu hoàn chỉnh:", words: ["Trẻ", "cả nhà", "lên ba,", "học nói."], answer: "Trẻ lên ba, cả nhà học nói." },
    { topic: "Mở rộng vốn từ: Măng non", type: "match", question: "Nối các từ ở cột bên trái với từ ở cột bên phải để tạo thành cụm từ có nghĩa hợp lý:", left: ["Thiếu niên", "Nhi đồng"], right: ["chăm ngoan", "anh hùng"], answer: {"Thiếu niên": "anh hùng", "Nhi đồng": "chăm ngoan"} },
    { topic: "Mở rộng vốn từ: Măng non", type: "match", question: "Hãy nối các từ ngữ vào nhóm phù hợp:", left: ["Tổ chức bảo vệ trẻ em", "Hoạt động chăm sóc trẻ em"], right: ["Quỹ Nhi đồng, Hội bảo vệ quyền trẻ em", "săn sóc, che chở, chăm chút"], answer: {"Tổ chức bảo vệ trẻ em": "Quỹ Nhi đồng, Hội bảo vệ quyền trẻ em", "Hoạt động chăm sóc trẻ em": "săn sóc, che chở, chăm chút"} },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn từ thích hợp để điền vào câu sau: Cô giáo ........ học sinh học tập bằng những lời ân cần và dịu dàng.", options: ["A. dạy", "B. giảng giải", "C. giảng dạy", "D. động viên"], answer: 3 },
    { topic: "Mở rộng vốn từ: Măng non", type: "order", question: "Em sắp xếp các từ sau để tạo thành câu hợp lí:", words: ["thiếu niên Việt Nam.", "tập hợp và rèn luyện", "tổ chức", "là", "Đội Thiếu niên Tiền phong Hồ Chí Minh"], answer: "Đội Thiếu niên Tiền phong Hồ Chí Minh là tổ chức tập hợp và rèn luyện thiếu niên Việt Nam." },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn từ thích hợp điền vào chỗ trống để hoàn thành câu danh ngôn sau: Một đứa bé không phải là một chiếc lọ hoa để đổ cho đầy nước mà là một .... cần được thắp sáng. (-abelais.-)", options: ["A. cái bát", "B. ngọn lửa", "C. cái cây", "D. vì sao"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Em hãy điền từ ngữ thích hợp vào chỗ trống để hoàn chỉnh câu thành ngữ, tục ngữ sau: Kính thầy yêu .......", answer: "bạn" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Em hãy điền từ ngữ thích hợp vào chỗ trống để hoàn chỉnh câu thành ngữ, tục ngữ sau: Con ngoan trò .......", answer: "giỏi" },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Em hãy chọn từ thích hợp điền vào chỗ trống để hoàn thành khổ thơ sau: Chị đã qua tuổi .... / Em hôm nay vào .... / Màu .... dắt em / Bước qua thời thơ dại.", options: ["A. Đoàn / Đội / khăn đỏ", "B. Đội / Đoàn / khăn đỏ", "C. khăn đỏ / Đoàn / Đội", "D. Đoàn / khăn đỏ / Đội"], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Em hãy điền từ còn thiếu để hoàn thành câu tục ngữ nói về trẻ em: Uốn cây từ thuở còn ....... / Dạy con từ thuở hãy còn ngây thơ.", answer: "non" },

    // -----------------------------------------------------------------
    // PHẦN 2: 30 CÂU BỔ SUNG VỀ VĂN HÓA & FOLKLORE (CA DAO, TỤC NGỮ, THƠ)
    // -----------------------------------------------------------------
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Điền từ còn thiếu vào câu tục ngữ: Trẻ cậy cha, già cậy ...", answer: "con" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Điền từ còn thiếu: Con hơn ... là nhà có phúc.", answer: "cha" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Điền từ còn thiếu: Đi hỏi già, về nhà hỏi ...", answer: "trẻ" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Điền từ còn thiếu: Yêu trẻ, trẻ đến ...", answer: "nhà" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Điền từ còn thiếu: Kính già, già để ... cho.", answer: "tuổi" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Lời Bác Hồ: Tuổi nhỏ làm việc nhỏ, tùy theo sức của ... (Điền 1 chữ)", answer: "mình" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Thành ngữ: Trẻ em như tờ giấy ...", answer: "trắng" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Học thầy không tày học ... (Điền 1 chữ)", answer: "bạn" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Một chữ cũng là thầy, nửa chữ cũng là ... (Điền 1 chữ)", answer: "thầy" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Thành ngữ: Măng mọc có ... (Ý nói trẻ em dễ uốn nắn, dễ dạy bảo)", answer: "vát" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Tục ngữ: Sinh con rồi mới sinh cha, Sinh cháu giữ nhà rồi mới sinh ...", answer: "ông" },
    { topic: "Mở rộng vốn từ: Măng non", type: "match", question: "Hãy nối các vế để tạo thành câu tục ngữ hoàn chỉnh:", left: ["Công cha như núi Thái Sơn", "Lời chào", "Tre già"], right: ["măng mọc.", "Nghĩa mẹ như nước trong nguồn chảy ra.", "cao hơn mâm cỗ."], answer: {"Công cha như núi Thái Sơn": "Nghĩa mẹ như nước trong nguồn chảy ra.", "Lời chào": "cao hơn mâm cỗ.", "Tre già": "măng mọc."} },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Tục ngữ: Cây xanh thì lá cũng xanh, Cha mẹ hiền ... để đức cho con.", answer: "lành" },
    { topic: "Mở rộng vốn từ: Măng non", type: "order", question: "Sắp xếp để tạo thành câu thành ngữ:", words: ["học lễ,", "hậu", "Tiên", "học văn."], answer: "Tiên học lễ, hậu học văn." },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Tục ngữ: Lời chào cao hơn mâm ...", answer: "cỗ" },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Câu 'Học ăn, học nói, học gói, học mở' là lời khuyên mang ý nghĩa gì đối với trẻ em?", options: ["A. Dạy cách nấu ăn và gói bánh.", "B. Khuyên trẻ em phải học cách ứng xử, giao tiếp và làm việc cẩn thận từ những điều nhỏ nhất.", "C. Khuyên trẻ em phải học thật giỏi để thi điểm cao.", "D. Dạy trẻ em cách mở quà sinh nhật."], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Trong bài thơ 'Lượm' của nhà thơ Tố Hữu, nhân vật chú bé liên lạc có hình dáng thế nào?", options: ["A. Cao lớn, vạm vỡ", "B. Loắt choắt, cái xắc xinh xinh", "C. Gầy gò, ốm yếu", "D. Chậm chạp, ít nói"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Bài thơ nổi tiếng 'Hạt gạo làng ta' được viết bởi tác giả nào khi ông còn là một cậu bé thiếu nhi?", options: ["A. Tố Hữu", "B. Xuân Diệu", "C. Trần Đăng Khoa", "D. Phạm Hổ"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Nhạc sĩ Phong Nhã đã sáng tác bài hát nào rất nổi tiếng dành cho thiếu nhi?", options: ["A. Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng", "B. Trái đất này là của chúng mình", "C. Chú ếch con", "D. Bụi phấn"], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Ý nghĩa của câu 'Uốn cây từ thuở còn non' là gì?", options: ["A. Cây non rất dễ bẻ gãy.", "B. Phải giáo dục, rèn luyện con người ngay từ khi còn nhỏ thì mới dễ tiếp thu những điều tốt đẹp.", "C. Người lớn tuổi không thể học thêm điều gì mới.", "D. Trẻ em cần được vui chơi nhiều hơn học tập."], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Câu 'Trẻ người non dạ' thường được dùng để nói về ai?", options: ["A. Những người lớn tuổi hay quên.", "B. Trẻ sơ sinh mới chào đời.", "C. Người trẻ tuổi, còn thiếu kinh nghiệm sống, suy nghĩ chưa chín chắn.", "D. Trẻ em ngoan ngoãn, vâng lời bố mẹ."], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Điền từ: Bầu ơi thương lấy bí cùng, tuy rằng khác ... nhưng chung một giàn.", options: ["A. giống", "B. loài", "C. họ", "D. họ hàng"], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Bài thơ: 'Hôm qua em tới trường / Mẹ dắt tay từng bước' là hai câu thơ mở đầu của bài thơ nào quen thuộc với tuổi thơ?", options: ["A. Ngày đầu tiên đi học", "B. Bụi phấn", "C. Đi học", "D. Cháu lên ba"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Thơ Bác Hồ: 'Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các ...'", options: ["A. em", "B. cháu", "C. thiếu nhi", "D. thanh niên"], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "match", question: "Hãy nối các câu thơ sau sao cho đúng:", left: ["Trẻ em như búp trên cành", "Làm anh khó đấy", "Cái trống trường em"], right: ["Phải đâu chuyện đùa", "Mùa hè cũng nghỉ", "Biết ăn biết ngủ biết học hành là ngoan"], answer: {"Trẻ em như búp trên cành": "Biết ăn biết ngủ biết học hành là ngoan", "Làm anh khó đấy": "Phải đâu chuyện đùa", "Cái trống trường em": "Mùa hè cũng nghỉ"} },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Danh ngôn: 'Làm gương tốt cho trẻ là bài học tốt nhất' khuyên người lớn điều gì?", options: ["A. Mua nhiều sách cho trẻ đọc", "B. Trẻ em học hỏi nhanh nhất từ hành động của người lớn, nên người lớn phải làm gương.", "C. Bắt trẻ em phải học tấm gương của các vĩ nhân.", "D. Người lớn không bao giờ làm sai."], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Tục ngữ 'Con có cha như nhà có nóc' nhấn mạnh tầm quan trọng của ai đối với trẻ thơ?", options: ["A. Người mẹ", "B. Người bạn", "C. Người cha", "D. Thầy cô giáo"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Từ 'Măng non' mang ý nghĩa biểu tượng (ẩn dụ) cho đối tượng nào?", options: ["A. Lứa tuổi thanh niên", "B. Những người lớn tuổi", "C. Lứa tuổi thiếu niên, nhi đồng đang lớn lên.", "D. Các mầm cây tre mới nhú vào mùa xuân."], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Ca dao: 'Công cha như núi Thái Sơn / Nghĩa mẹ như nước trong nguồn chảy ra'. Hai câu ca dao này khuyên thiếu nhi điều gì?", options: ["A. Chăm chỉ học tập.", "B. Bảo vệ môi trường.", "C. Phải ghi nhớ và đền đáp công ơn sinh thành, dưỡng dục to lớn của cha mẹ.", "D. Dũng cảm nhận lỗi khi làm sai."], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Câu 'Tre non dễ uốn' đồng nghĩa với câu tục ngữ nào sau đây?", options: ["A. Gần mực thì đen", "B. Uốn cây từ thuở còn non", "C. Tre già măng mọc", "D. Lá lành đùm lá rách"], answer: 1 },

    // -----------------------------------------------------------------
    // PHẦN 3: 30 CÂU BỔ SUNG VỀ TỪ VỰNG, LỊCH SỬ ĐỘI, NGỮ PHÁP
    // -----------------------------------------------------------------
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Người Đội trưởng đầu tiên của Đội Thiếu niên Tiền phong Hồ Chí Minh là ai? (Gợi ý: Tên của anh là Kim ...)", answer: "Đồng" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Anh Kim Đồng tên thật là Nông Văn ... (Điền 1 chữ cái)", answer: "Dèn" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Khẩu hiệu của Đội: 'Vì tổ quốc xã hội chủ nghĩa, vì lý tưởng của Bác Hồ vĩ đại: Sẵn ...!'", answer: "sàng" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Ghép chữ 'nhi' với một chữ khác để tạo thành từ chỉ bệnh viện dành riêng cho trẻ em: Bệnh viện Nhi ...", answer: "đồng" },
    { topic: "Mở rộng vốn từ: Măng non", type: "order", question: "Sắp xếp để tạo thành câu chỉ hoạt động:", words: ["bài tập.", "đang", "Em", "làm"], answer: "Em đang làm bài tập." },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Trong câu 'Em đang làm bài tập', từ chỉ hoạt động là từ nào?", answer: "làm" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Trái nghĩa với từ 'già' là từ gì?", answer: "trẻ" },
    { topic: "Mở rộng vốn từ: Măng non", type: "match", question: "Nối từ chỉ tính nết với từ trái nghĩa của nó:", left: ["Ngoan ngoãn", "Chăm chỉ", "Lễ phép"], right: ["Lười biếng", "Hỗn láo", "Hư hỏng"], answer: {"Ngoan ngoãn": "Hư hỏng", "Chăm chỉ": "Lười biếng", "Lễ phép": "Hỗn láo"} },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Bác Hồ kính yêu có bao nhiêu điều dạy thiếu niên, nhi đồng? (Điền số)", answer: "5" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Từ 'thiếu niên' thường chỉ những người nằm trong khoảng từ 9 đến 15 tuổi. Đúng hay sai? (Gõ Đúng hoặc Sai)", answer: "Đúng" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Điền từ: Giờ ra chơi, sân trường thật nhộn ...", answer: "nhịp" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Một người học sinh tốt phải biết Tôn sư trọng ...", answer: "đạo" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Trong câu 'Mặt trời đỏ rực như quả cầu lửa', từ chỉ đặc điểm là từ 'đỏ ...'", answer: "rực" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Từ 'ngây thơ' có nghĩa tương tự (đồng nghĩa) với từ 'hồn ...'", answer: "nhiên" },
    { topic: "Mở rộng vốn từ: Măng non", type: "fib", question: "Cờ của Đội Thiếu niên Tiền phong có nền màu đỏ và ở giữa có hình Huy hiệu ...", answer: "Đội" },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Phong trào 'Nghìn việc tốt' là phong trào thi đua dành cho đối tượng nào?", options: ["A. Người cao tuổi", "B. Thanh niên", "C. Phụ nữ", "D. Thiếu nhi"], answer: 3 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Từ nào dưới đây đồng nghĩa với từ 'nhi đồng'?", options: ["A. Trẻ em", "B. Người lớn", "C. Thanh niên", "D. Ông bà"], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Từ nào dưới đây KHÔNG phải là từ chỉ tính nết tốt của trẻ em?", options: ["A. Chăm chỉ", "B. Lười biếng", "C. Hiếu thảo", "D. Lễ phép"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Cho câu: 'Thiếu nhi là măng non của đất nước.' Bộ phận 'Thiếu nhi' trả lời cho câu hỏi nào?", options: ["A. Làm gì?", "B. Là gì?", "C. Ai?", "D. Thế nào?"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Cho câu: 'Đội viên đeo khăn quàng đỏ.' Bộ phận 'đeo khăn quàng đỏ' trả lời cho câu hỏi nào?", options: ["A. Ai?", "B. Làm gì?", "C. Là gì?", "D. Thế nào?"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Nghĩa đen của từ 'măng non' là gì?", options: ["A. Trẻ em", "B. Thanh niên", "C. Cây tre đã già", "D. Mầm non của cây tre mới mọc"], answer: 3 },
    { topic: "Mở rộng vốn từ: Măng non", type: "order", question: "Sắp xếp các từ sau thành câu hoàn chỉnh:", words: ["là", "tương lai", "Trẻ em", "của", "đất nước."], answer: "Trẻ em là tương lai của đất nước." },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Câu nào dưới đây nêu lên một trong những Quyền của trẻ em?", options: ["A. Quyền được học tập, vui chơi và chăm sóc sức khỏe.", "B. Quyền được đi làm kiếm tiền từ năm 8 tuổi.", "C. Quyền được bỏ học khi không thích.", "D. Quyền được tự do đi xe máy ngoài đường."], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Câu nào dưới đây nêu lên Bổn phận của trẻ em?", options: ["A. Được người lớn tặng quà.", "B. Yêu quý, kính trọng, hiếu thảo với ông bà, cha mẹ.", "C. Được nhà nước bảo vệ.", "D. Được đi du lịch miễn phí."], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "match", question: "Nối biểu tượng với ý nghĩa tương ứng của Đội TNTP Hồ Chí Minh:", left: ["Khăn quàng đỏ", "Huy hiệu Đội", "Ngày 15/5"], right: ["Ngày thành lập Đội.", "Một phần cờ Tổ quốc.", "Búp măng non mọc trên nền cờ đỏ sao vàng."], answer: {"Khăn quàng đỏ": "Một phần cờ Tổ quốc.", "Huy hiệu Đội": "Búp măng non mọc trên nền cờ đỏ sao vàng.", "Ngày 15/5": "Ngày thành lập Đội."} },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Tổ chức nào có trách nhiệm trực tiếp hướng dẫn và dìu dắt Đội Thiếu niên Tiền phong Hồ Chí Minh?", options: ["A. Hội Chữ thập đỏ", "B. Đoàn Thanh niên Cộng sản Hồ Chí Minh", "C. Hội Nông dân", "D. Hội Phụ nữ"], answer: 1 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Trong các từ sau, từ nào là Tính từ chỉ đặc điểm thể hiện sự thông minh của trẻ em?", options: ["A. lanh lợi, nhanh trí", "B. chậm chạp, lầm lì", "C. xinh xắn, bụ bẫm", "D. hiền lành, nhút nhát"], answer: 0 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Từ ghép nào dưới đây KHÔNG có tiếng 'trẻ' mang nghĩa là trẻ em?", options: ["A. trẻ con", "B. trẻ em", "C. tuổi trẻ", "D. chẻ củi"], answer: 3 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Chọn cặp từ trái nghĩa đúng nhất nói về tính cách của trẻ em:", options: ["A. ngoan ngoãn - hiền lành", "B. chăm chỉ - siêng năng", "C. ngoan ngoãn - hư hỏng", "D. thông minh - nhanh nhẹn"], answer: 2 },
    { topic: "Mở rộng vốn từ: Măng non", type: "mcq", question: "Câu 'Học sinh lớp 3A đang sôi nổi thảo luận bài tập nhóm.' thuộc mẫu câu gì?", options: ["A. Ai là gì?", "B. Ai làm gì?", "C. Ai thế nào?", "D. Khi nào?"], answer: 1 },

    /* =================================================================
       CHỦ ĐIỂM: ÔN TẬP VỀ TỪ CHỈ SỰ VẬT (33 CÂU HỎI)
       ================================================================= */
    
    // --- 3 CÂU LẤY CHÍNH XÁC TỪ FILE WORD CỦA BẠN ---
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Trong câu 'Không khí thật là thoáng đãng.', từ chỉ sự vật là:", options: ["A. thật là", "B. thoáng đãng", "C. Không khí", "D. là"], answer: 2 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "highlight", question: "Em hãy gạch chân những từ ngữ chỉ sự vật trong câu văn sau:", words: ["Bà ngoại ", "rất ", "thích ", "hoa hồng."], answer: [0, 3] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Em hãy cho biết trong câu văn sau có bao nhiêu từ ngữ chỉ sự vật? 'Kiến đang tha mồi về tổ.'", options: ["A. 4 từ", "B. 1 từ", "C. 2 từ", "D. 3 từ"], answer: 3 },

    // --- 15 CÂU CƠ BẢN (Nhận diện Người, Vật, Con vật, Cây cối) ---
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Từ nào dưới đây là từ chỉ sự vật?", options: ["A. Chạy bộ", "B. Sách vở", "C. Xinh đẹp", "D. Vui vẻ"], answer: 1 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "multi_select", question: "Em hãy chọn TẤT CẢ các từ chỉ sự vật trong các từ dưới đây:", options: ["Ngôi nhà", "Bay lượn", "Đám mây", "Ông nội", "Rực rỡ"], answer: [0, 2, 3] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "highlight", question: "Em hãy gạch chân từ chỉ sự vật trong câu sau:", words: ["Con mèo ", "đang ", "ngủ ", "say."], answer: [0] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "highlight", question: "Em hãy gạch chân các từ chỉ sự vật trong câu sau:", words: ["Sân trường ", "rợp ", "bóng mát."], answer: [0, 2] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "inline_dropdown", question: "Em hãy chọn từ chỉ sự vật thích hợp điền vào chỗ trống:", text: "Học sinh dùng ___ để viết bài, dùng ___ để đo độ dài.", dropdowns: [["cái bút", "cái tẩy", "cục gôm"], ["cái bút", "cái thước", "cái kéo"]], answer: ["cái bút", "cái thước"] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Dòng nào dưới đây CHỈ GỒM các từ chỉ sự vật?", options: ["A. chó, mèo, hót, sủa", "B. học sinh, cô giáo, hiền lành", "C. bàn, ghế, bảng đen, phấn", "D. xanh, đỏ, tím, vàng"], answer: 2 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "multi_select", question: "Em hãy chọn các từ chỉ CÂY CỐI (thuộc nhóm từ chỉ sự vật):", options: ["Cây bàng", "Hoa phượng", "Thơm ngát", "Rễ cây", "Cao lớn"], answer: [0, 1, 3] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "match", question: "Em hãy nối các nhóm từ chỉ sự vật với tên gọi phân loại phù hợp:", left: ["Ông, bà, bố, mẹ", "Bút, thước, cặp, tẩy", "Chó, mèo, lợn, gà"], right: ["Từ chỉ con vật", "Từ chỉ người", "Từ chỉ đồ vật"], answer: {"Ông, bà, bố, mẹ": "Từ chỉ người", "Bút, thước, cặp, tẩy": "Từ chỉ đồ vật", "Chó, mèo, lợn, gà": "Từ chỉ con vật"} },
    { topic: "Ôn tập về từ chỉ sự vật", type: "highlight", question: "Em hãy gạch chân các từ chỉ sự vật trong câu sau:", words: ["Những ", "chú chim ", "hót ", "líu lo ", "trên ", "cành cây."], answer: [1, 5] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Từ nào dưới đây KHÔNG PHẢI là từ chỉ sự vật?", options: ["A. Bác sĩ", "B. Dòng sông", "C. Róc rách", "D. Bầu trời"], answer: 2 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Câu 'Bé Mai nhặt rau giúp mẹ.' có bao nhiêu từ chỉ sự vật?", options: ["A. 1 từ", "B. 2 từ", "C. 3 từ", "D. 4 từ"], answer: 2 }, 
    { topic: "Ôn tập về từ chỉ sự vật", type: "multi_select", question: "Em hãy chọn các từ chỉ NGƯỜI (thuộc nhóm từ chỉ sự vật):", options: ["Cô giáo", "Bác nông dân", "Cánh đồng", "Học sinh", "Chăm chỉ"], answer: [0, 1, 3] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "match", question: "Nối các sự vật với môi trường sống thường gặp của chúng:", left: ["Con cá, rùa biển", "Đám mây, mặt trời", "Cây cối, nhà cửa"], right: ["Trên bầu trời", "Dưới nước", "Trên mặt đất"], answer: {"Con cá, rùa biển": "Dưới nước", "Đám mây, mặt trời": "Trên bầu trời", "Cây cối, nhà cửa": "Trên mặt đất"} },
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Trong câu 'Mùa xuân, cây cối đâm chồi nảy lộc.', các từ chỉ sự vật là:", options: ["A. Mùa xuân, đâm, nảy", "B. cây cối, đâm chồi, nảy lộc", "C. Mùa xuân, cây cối, chồi, lộc", "D. Mùa xuân, cây cối, đâm, nảy"], answer: 2 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "inline_dropdown", question: "Chọn từ chỉ sự vật điền vào chỗ trống:", text: "Tiếng ___ gáy sáng đánh thức ___ dậy ra đồng làm việc.", dropdowns: [["con gà trống", "con chó", "con lợn"], ["đàn chim", "bác nông dân", "cây cối"]], answer: ["con gà trống", "bác nông dân"] },

    // --- 15 CÂU NÂNG CAO (Nhận diện Khái niệm trừu tượng, Thời gian, Hiện tượng tự nhiên) ---
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Từ 'Mùa hè' thuộc nhóm từ chỉ gì?", options: ["A. Từ chỉ đặc điểm", "B. Từ chỉ hoạt động", "C. Từ chỉ sự vật", "D. Cả A, B, C đều sai"], answer: 2 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Trong câu 'Cơn mưa rào ập đến rất nhanh.', từ chỉ sự vật (hiện tượng tự nhiên) là:", options: ["A. Cơn mưa rào", "B. ập đến", "C. rất nhanh", "D. mưa rào ập đến"], answer: 0 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "multi_select", question: "Em hãy chọn các từ chỉ HIỆN TƯỢNG TỰ NHIÊN (thuộc nhóm từ chỉ sự vật):", options: ["Gió mùa", "Sấm chớp", "Tỏa nắng", "Chạy nhảy", "Cơn bão"], answer: [0, 1, 4] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "highlight", question: "Gạch chân các từ chỉ sự vật trong câu thơ sau:", words: ["Tiếng suối ", "trong ", "như ", "tiếng hát ", "xa."], answer: [0, 3] }, 
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Câu 'Ánh nắng xuyên qua kẽ lá, sưởi ấm những con suối nhỏ.' có bao nhiêu từ chỉ sự vật?", options: ["A. 2 từ", "B. 3 từ", "C. 4 từ", "D. 5 từ"], answer: 1 }, 
    { topic: "Ôn tập về từ chỉ sự vật", type: "multi_select", question: "Chọn các từ chỉ sự vật trong câu 'Ngoài cánh đồng, lúa đang trổ bông.':", options: ["Ngoài", "cánh đồng", "lúa", "đang trổ", "bông"], answer: [1, 2, 4] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "highlight", question: "Gạch chân các từ chỉ sự vật (bao gồm cả thời gian, cảnh quan) trong câu sau:", words: ["Bầu trời ", "mùa thu ", "xanh thẳm, ", "cao vợi."], answer: [0, 1] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "inline_dropdown", question: "Điền từ chỉ sự vật phù hợp để câu văn sinh động hơn:", text: "Những ___ đang bay lượn rợp trời, mang theo báo hiệu của mùa ___.", dropdowns: [["chú én nhỏ", "cơn gió", "tiếng hót"], ["xuân", "ấm áp", "vui vẻ"]], answer: ["chú én nhỏ", "xuân"] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "match", question: "Phân loại các từ chỉ sự vật (Mức độ Nâng cao):", left: ["Mưa, bão, sấm, chớp", "Xuân, hạ, thu, đông", "Núi, sông, biển, hồ"], right: ["Chỉ các mùa trong năm", "Chỉ địa hình, cảnh quan", "Chỉ hiện tượng tự nhiên"], answer: {"Mưa, bão, sấm, chớp": "Chỉ hiện tượng tự nhiên", "Xuân, hạ, thu, đông": "Chỉ các mùa trong năm", "Núi, sông, biển, hồ": "Chỉ địa hình, cảnh quan"} },
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Từ nào dưới đây CHỈ SỰ VẬT nhưng KHÔNG thể cầm, nắm được?", options: ["A. Quyển sách", "B. Cơn gió", "C. Cây bút", "D. Quả táo"], answer: 1 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "highlight", question: "Gạch chân các từ chỉ sự vật mang ý nghĩa khái niệm/trừu tượng/thời gian trong câu:", words: ["Tuổi thơ ", "của ", "em ", "gắn liền ", "với ", "cánh diều."], answer: [0, 2, 5] }, 
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Dòng nào dưới đây có chứa từ KHÔNG PHẢI từ chỉ sự vật?", options: ["A. Sấm, chớp, mưa, bão", "B. Sông, suối, ao, hồ", "C. Ngoan ngoãn, hiền lành, thông minh", "D. Đường, phố, ngõ, xóm"], answer: 2 },
    { topic: "Ôn tập về từ chỉ sự vật", type: "mcq", question: "Trong câu 'Mẹ mua cho em một chiếc áo mới tuyệt đẹp nhân ngày sinh nhật.', có bao nhiêu từ chỉ sự vật?", options: ["A. 2 từ", "B. 3 từ", "C. 4 từ", "D. 5 từ"], answer: 2 }, 
    { topic: "Ôn tập về từ chỉ sự vật", type: "multi_select", question: "Đánh dấu vào các từ chỉ sự vật (bao gồm từ chỉ thời gian, buổi trong ngày):", options: ["Buổi sáng", "Chiều tà", "Chăm chỉ", "Ngày mai", "Xanh biếc"], answer: [0, 1, 3] },
    { topic: "Ôn tập về từ chỉ sự vật", type: "highlight", question: "Gạch chân 3 từ chỉ sự vật xuất hiện trong câu văn sau:", words: ["Ánh trăng ", "sáng vằng vặc ", "chiếu xuống ", "mặt hồ ", "tạo thành ", "những ", "vệt sáng ", "lấp lánh."], answer: [0, 3, 6] },

/* =================================================================
       CHỦ ĐIỂM: ÔN TẬP VỀ TỪ CHỈ ĐẶC ĐIỂM (DỰA TRÊN ẢNH VIOEDU)
       ================================================================= */
    {
        topic: "Ôn tập về từ chỉ đặc điểm",
        type: "highlight",
        question: "Em hãy gạch dưới từ ngữ chỉ đặc điểm trong câu văn sau.<br>Bình minh, mặt trời như chiếc thau đồng đỏ ối chiếu xuống mặt biển.",
        words: ["Bình minh, ", "mặt trời ", "như ", "chiếc thau đồng ", "đỏ ối ", "chiếu xuống ", "mặt biển."],
        answer: [4]
    },
    {
        topic: "Ôn tập về từ chỉ đặc điểm",
        type: "highlight",
        question: "Em hãy gạch chân những từ ngữ chỉ đặc điểm về hình dáng, kích thước trong đoạn văn sau.<br>Nai con có bộ lông màu nâu nhạt, mịn màng, bốn cẳng cao nghều như là đi trên những đôi cà kheo. Cái đầu dài và nhỏ, hai tai vểnh lên.<br>(Nguyệt Ánh)",
        words: ["Nai con ", "có ", "bộ lông ", "màu nâu nhạt, ", "mịn màng, ", "bốn cẳng ", "cao nghều ", "như là ", "đi ", "trên ", "những ", "đôi cà kheo. ", "Cái đầu ", "dài ", "và ", "nhỏ, ", "hai tai ", "vểnh lên. ", "(Nguyệt Ánh)"],
        answer: [6, 13, 15]
    },
    {
        topic: "Ôn tập về từ chỉ đặc điểm",
        type: "inline_dropdown",
        question: "Em hãy chọn từ chỉ đặc điểm phù hợp điền vào chỗ trống để hoàn thành đoạn văn sau:",
        text: "Rừng Tây Nguyên đẹp vì cảnh sắc thiên nhiên. Khi những cơn mưa đầu mùa đổ xuống, bầu trời vẫn ___ . Rừng ___ , ___ tươi. Các đồi gianh vươn lên và cỏ non bò lan ra mặt suối, như choàng cho rừng một chiếc khăn ___ kim cương. Mặt trời xuyên qua kẽ lá, sưởi ấm những con suối ___ .",
        dropdowns: [
            ["tối", "xám xịt", "trong"],
            ["mát mẻ", "đi", "cong"],
            ["xanh", "đỏ", "tốt"],
            ["đỏ", "xanh", "vàng"],
            ["trong veo", "đục ngầu", "cạn khô"]
        ],
        answer: ["xám xịt", "mát mẻ", "xanh", "xanh", "trong veo"]
    },

    /* =================================================================
       CHỦ ĐIỂM: ÔN TẬP VỀ TỪ CHỈ ĐẶC ĐIỂM (30 CÂU TỪ SÁCH CÁNH DIỀU)
       ================================================================= */

    // --- DẠNG 1: GẠCH CHÂN TỪ CHỈ ĐẶC ĐIỂM (HIGHLIGHT) ---
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân các từ chỉ đặc điểm trong hai câu thơ sau (Bài: Lễ khai giảng):", 
        words: ["Sáng ", "đầu thu ", "trong xanh ", "Em ", "mặc ", "quần áo ", "mới"], 
        answer: [2, 6] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân từ chỉ đặc điểm về MÀU SẮC trong câu thơ sau (Bài: Lễ khai giảng):", 
        words: ["Chúng em ", "đi ", "vào lớp ", "Khăn quàng ", "bay ", "đỏ tươi."], 
        answer: [5] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân từ chỉ đặc điểm trong câu văn sau (Bài: Lễ chào cờ đặc biệt):", 
        words: ["Dưới ", "ánh nắng ", "dìu dịu ", "của ", "buổi sáng ", "thứ Hai..."], 
        answer: [2] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân từ chỉ đặc điểm trong câu văn sau (Bài: Lễ chào cờ đặc biệt):", 
        words: ["Tất cả ", "thầy cô ", "và ", "học sinh ", "hát vang ", "giai điệu ", "hào hùng."], 
        answer: [6] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân từ chỉ đặc điểm về HÌNH DÁNG, KÍCH THƯỚC trong câu văn sau (Bài: Nhớ lại buổi đầu đi học):", 
        words: ["Mẹ tôi ", "âu yếm ", "nắm tay ", "tôi ", "đi trên ", "con đường ", "làng ", "dài ", "và ", "hẹp."], 
        answer: [7, 9] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân các từ chỉ đặc điểm trong đoạn thơ sau (Bài: Hai bàn tay em):", 
        words: ["Hoa hồng ", "hồng nụ ", "Cánh ", "tròn ", "ngón ", "xinh."], 
        answer: [1, 3, 5] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân từ chỉ đặc điểm trong khổ thơ sau (Bài: Giặt áo):", 
        words: ["Lấy ", "bọt ", "xà phòng ", "Làm ", "đôi găng ", "trắng ", "Nghìn ", "đốm ", "cầu vồng ", "Tay em ", "lấp lánh."], 
        answer: [5, 10] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân các từ chỉ đặc điểm trong đoạn văn sau (Bài: Con heo đất):", 
        words: ["Thật ra ", "con heo ", "cũng ", "dễ thương. ", "Mũi nó ", "mát lạnh."], 
        answer: [3, 5] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân từ chỉ đặc điểm về TÍNH TÌNH trong đoạn thơ sau (Bài: Hai bàn tay em):", 
        words: ["Giờ em ", "ngồi học ", "Bàn tay ", "siêng năng ", "Nở hoa ", "trên giấy."], 
        answer: [3] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "highlight", 
        question: "Em hãy gạch chân từ chỉ đặc điểm trong câu văn sau (Bài: Ba anh em):", 
        words: ["Từ đó, ", "gia đình ", "ba anh em ", "lại ", "sống ", "với nhau ", "êm ấm ", "như xưa."], 
        answer: [6] 
    },

    // --- DẠNG 2: ĐẾM SỐ LƯỢNG TỪ CHỈ ĐẶC ĐIỂM (MCQ) ---
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Trong câu văn: 'Cảm giác trong sáng ấy nảy nở trong lòng tôi giữa bầu trời quang đãng.' có bao nhiêu từ chỉ đặc điểm?", 
        options: ["1 từ (trong sáng)", "2 từ (trong sáng, quang đãng)", "3 từ", "4 từ"], 
        answer: 1 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Cho đoạn thơ: 'Mùa thu của em / Là xanh cốm mới'. Đoạn thơ trên có mấy từ chỉ đặc điểm?", 
        options: ["1 từ", "2 từ (xanh, mới)", "3 từ", "Không có từ nào"], 
        answer: 1 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Trong câu: 'Nhà rông được dựng bằng gỗ tốt kết hợp với tre, nứa.' có bao nhiêu từ chỉ đặc điểm?", 
        options: ["1 từ (tốt)", "2 từ", "3 từ", "4 từ"], 
        answer: 0 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Câu ca dao: 'Lụa Nam Định đẹp tươi mát rượi / Lược Hàng Đào chải mái tóc xanh' có bao nhiêu từ chỉ đặc điểm?", 
        options: ["2 từ", "3 từ (đẹp, mát rượi, xanh)", "4 từ (đẹp, tươi, mát rượi, xanh)", "5 từ"], 
        answer: 2 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Trong câu chuyện Con heo đất: 'Một cô bé sang nhà dì chơi. Vì đang dỗi mẹ nên em ngồi buồn thiu.' Đoạn văn trên có mấy từ chỉ đặc điểm?", 
        options: ["1 từ (buồn thiu)", "2 từ (nhỏ, buồn thiu)", "3 từ", "4 từ"], 
        answer: 0 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Trong đoạn thơ: 'Tay em đánh răng / Răng trắng hoa nhài' có bao nhiêu từ chỉ đặc điểm?", 
        options: ["1 từ (trắng)", "2 từ", "3 từ", "Không có từ nào"], 
        answer: 0 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Đoạn văn: 'Vừa bưng bát cơm nóng hổi, em lại nghĩ đến mẹ.' có mấy từ chỉ đặc điểm?", 
        options: ["1 từ (nóng hổi)", "2 từ", "3 từ", "4 từ"], 
        answer: 0 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Trong đoạn: 'Đôi mắt lim dim / Ngủ ngon bà nhé!' có bao nhiêu từ chỉ đặc điểm?", 
        options: ["1 từ", "2 từ (lim dim, ngon)", "3 từ", "4 từ"], 
        answer: 1 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Bài thơ Bận có câu: 'Trời thu bận xanh / Sông Hồng bận chảy'. Trong 2 câu thơ này có bao nhiêu từ chỉ đặc điểm?", 
        options: ["1 từ (xanh)", "2 từ (bận, xanh)", "3 từ", "4 từ"], 
        answer: 0 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "mcq", 
        question: "Trong đoạn văn tả nhà rông: 'Làng càng lớn và có nhiều người tài giỏi thì nhà rông càng bề thế, khang trang.' có mấy từ chỉ đặc điểm?", 
        options: ["2 từ", "3 từ", "4 từ (lớn, tài giỏi, bề thế, khang trang)", "5 từ"], 
        answer: 2 
    },

    // --- DẠNG 3: ĐIỀN ĐOẠN VĂN THẢ XUỐNG (INLINE DROPDOWN) ---
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích bài: Mùa thu của em):", 
        text: "Mùa thu của em <br> Là ___ hoa cúc <br> Như nghìn con mắt <br> Mở nhìn trời ___.", 
        dropdowns: [["vàng", "đỏ", "xanh"], ["êm", "cao", "rộng"]], 
        answer: ["vàng", "êm"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích bài: Giặt áo):", 
        text: "___ như mới <br> Áo quần lên dây <br> Em yêu ngắm mãi <br> Trắng hồng đôi tay.", 
        dropdowns: [["Sạch sẽ", "Tinh tươm", "Thơm tho"]], 
        answer: ["Sạch sẽ"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích bài: Ơi chích chòe ơi):", 
        text: "Bàn tay ___ <br> Vẫy quạt thật đều <br> Quạt cho bà ngủ <br> Ngấn nắng ___.", 
        dropdowns: [["nhỏ bé", "bé nhỏ", "xinh xắn"], ["thiu thiu", "iu iu", "lim dim"]], 
        answer: ["bé nhỏ", "thiu thiu"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích truyện: Ba con búp bê):", 
        text: "Sáng hôm sau, Mai reo lên khi thấy ló ra một cái đầu búp bê... một cô bé búp bê ___, ___ xíu, bằng giấy bồi.", 
        dropdowns: [["mũm mĩm", "tròn trịa", "xinh xắn"], ["nhỏ", "bé", "tí"]], 
        answer: ["mũm mĩm", "nhỏ"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích bài: Nhớ lại buổi đầu đi học):", 
        text: "Hằng năm, cứ vào cuối thu, lá ngoài đường rụng nhiều và trên không có những đám mây ___, lòng tôi lại ___ những kỉ niệm.", 
        dropdowns: [["trắng xốp", "bàng bạc", "đen kịt"], ["nao nức", "nôn nao", "rạo rực"]], 
        answer: ["bàng bạc", "nao nức"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích truyện: Ông Trạng giỏi tính toán):", 
        text: "Sứ thần lại xé một trang sách ___, nhờ ông đo xem nó ___ bao nhiêu.", 
        dropdowns: [["mỏng", "dày", "cũ"], ["mỏng", "dày", "nặng"]], 
        answer: ["mỏng", "dày"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích bài: Bảy sắc cầu vồng):", 
        text: "Màu xanh dương bảo mình là sắc ___ của đại dương. Màu tím thì tự hào vì có vẻ đẹp ___ giống như hoa vi-ô-lét.", 
        dropdowns: [["biếc", "ngắt", "thẳm"], ["đằm thắm", "rực rỡ", "kiêu kì"]], 
        answer: ["biếc", "đằm thắm"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích truyện: Ba anh em):", 
        text: "Chỉ còn một cây cổ thụ trong vườn, cành lá ___. Một người em nhất quyết đòi chia nốt.", 
        dropdowns: [["xum xuê", "xác xơ", "héo úa"]], 
        answer: ["xum xuê"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích truyện: Bảy sắc cầu vồng):", 
        text: "Một cây cầu vồng ___ hiện lên trên nền trời. Họa sĩ liền vẽ bức tranh một cây cầu vồng vắt ngang qua cánh đồng lúa ___.", 
        dropdowns: [["rực rỡ", "mờ nhạt", "tươi tắn"], ["vàng rực", "xanh biếc", "chín rộ"]], 
        answer: ["rực rỡ", "vàng rực"] 
    },
    { 
        topic: "Ôn tập về từ chỉ đặc điểm", type: "inline_dropdown", 
        question: "Em hãy chọn từ chỉ đặc điểm thích hợp điền vào chỗ trống (Trích truyện: Người trí thức yêu nước):", 
        text: "Dù băng qua rừng ___ hay suối ___, lúc nào ông cũng giữ bên mình chiếc va li đựng nấm pê-ni-xi-lin.", 
        dropdowns: [["rậm", "hoang", "vắng"], ["sâu", "cạn", "trong"]], 
        answer: ["rậm", "sâu"] 
    },

    /* =================================================================
       CHỦ ĐIỂM: ÔN TẬP CÂU AI LÀ GÌ, AI LÀM GÌ, AI THẾ NÀO
       ================================================================= */
       
    // Hình 1 (image_4de724.png)
    { 
        topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", 
        type: "mcq", 
        question: "Trong các câu sau, câu nào là câu kể Ai thế nào?", 
        options: [
            "Thái độ dũng cảm và sự xả thân vì bạn của con bướm mảnh mai đã khiến tôi cảm động.", 
            "Kẻ tấn công tôi là một con bướm đôi cánh rất đẹp.", 
            "Hoá ra, con bướm kia tấn công tôi là vì sự bình yên của bạn.", 
            "Tôi bước thẳng vào vũng nước để không dẫm phải bạn nó cho dù đôi giày mới mua của tôi sục cả trong bùn."
        ], 
        answer: 0 
    },

    // Hình 2 (image_4de745.png)
    { 
        topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", 
        type: "mcq", 
        question: "Cho câu sau: “Mẹ là người nội trợ trong gia đình.”. Em hãy chọn bộ phận trả lời cho câu hỏi “là gì?”:", 
        options: [
            "Mẹ", 
            "người nội trợ", 
            "là người nội trợ trong gia đình."
        ], 
        answer: 2 
    },

    // Hình 3 (image_4deaa9.png) - MỖI DÒNG THƠ LÀ 1 CỤM
    { 
        topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", 
        type: "highlight", 
        question: "Hãy gạch chân dưới câu kể “Ai là gì?” có trong đoạn thơ sau:", 
        words: [
            "Vì con, mẹ khổ đủ điều\n", 
            "Quanh đôi mắt mẹ đã nhiều nếp nhăn\n", 
            "Con mong mẹ khoẻ dần dần\n", 
            "Ngày ăn ngon miệng, đêm nằm ngủ say.\n", 
            "Rồi ra đọc sách, cấy cày\n", 
            "Mẹ là đất nước, tháng ngày của con.\n", 
            "(Trích Mẹ ốm, Trần Đăng Khoa)"
        ], 
        answer: [5] 
    },

    // Hình 4 (image_4deac1.png)
    { 
        topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", 
        type: "inline_dropdown", 
        question: "Em hãy đọc đoạn văn sau và trả lời câu hỏi.<br>(1) Lúc này Mèo Con khoái chí lắm. (2) Nắng ấm, sân rộng và sạch. (3) Mèo Con chạy giỡn hết góc này đến góc khác, hai tai dựng đứng lên, cái đuôi ngoe nguẩy. (4) Chạy chán, Mèo Con lại nép vào một gốc cau, một sợi lông cũng không động – nó rình một con bướm đang chập chờn bay qua. (5) Bỗng cái đuôi quất mạnh một cái, Mèo Con chồm ra. (6) Hụt rồi!<br><div style='text-align: right'><i>(Trích Cái Tết của mèo con – Nguyễn Đình Thi)</i></div><br>Các câu kể nêu đặc điểm <b>Ai thế nào?</b> có trong đoạn văn là câu số:", 
        text: "___ : ___", 
        dropdowns: [
            ["1", "2", "3", "4", "5", "6"],
            ["1", "2", "3", "4", "5", "6"]
        ], 
        answer: ["1", "2"] 
    },

    // Hình 5 (image_4deac3.png)
    { 
        topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", 
        type: "mcq", 
        question: "Trong đoạn văn sau, có bao nhiêu câu viết theo mẫu câu nêu hoạt động: Ai (con gì? cái gì?) làm gì?<br><br>Sáng hôm qua là ngày tổ em trực nhật, vì thế cả tổ ai cũng đi học sớm hơn mọi ngày. Theo sự phân công của tổ trưởng chúng em bắt tay vào làm việc. Hai bạn Hiếu và Vân quét thật sạch nền lớp. Bạn Trâm lau chùi bàn cô giáo và bảng đen, giặt khăn lau. Hai bạn Phát và Hào kê lại bàn ghế. Em lấy chổi lông gà quét thật sạch bụi trên bàn ghế và giá sách cuối lớp. Bạn Ngọc tổ trưởng quét hành lang, bậc thềm. Chỉ một lúc sau, chúng em đã làm xong mọi việc.", 
        options: ["3 câu", "6 câu", "5 câu", "4 câu"], 
        answer: 2 
    },
    /* =================================================================
       CHỦ ĐIỂM: ÔN TẬP CÂU "AI LÀ GÌ?", "AI LÀM GÌ?", "AI THẾ NÀO?" (30 CÂU)
       ================================================================= */

    // --- DẠNG 1: NHẬN DIỆN MẪU CÂU CƠ BẢN (Trắc nghiệm - MCQ) ---
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "mcq", question: "Câu văn 'Ông Nguyễn Sơn Hà là người khai sinh ra ngành sơn Việt Nam.' thuộc mẫu câu nào?", options: ["A. Ai là gì?", "B. Ai làm gì?", "C. Ai thế nào?", "D. Khi nào?"], answer: 0 },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "mcq", question: "Câu văn 'Giờ ra chơi, cả lớp ùa ra sân trường.' thuộc mẫu câu nào?", options: ["A. Ai là gì?", "B. Ai làm gì?", "C. Ai thế nào?", "D. Vì sao?"], answer: 1 },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "mcq", question: "Câu văn 'Nắng vườn trưa mênh mông.' thuộc mẫu câu nào?", options: ["A. Ai là gì?", "B. Ai làm gì?", "C. Ai thế nào?", "D. Ở đâu?"], answer: 2 },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "mcq", question: "Trong các câu sau, câu nào là câu kể 'Ai thế nào?'", options: ["A. Bác sĩ Đặng Văn Ngữ rời Nhật Bản về nước.", "B. Chiếc va li nấm rất quý giá.", "C. Ông tự tiêm thử liều thuốc đầu tiên.", "D. Ông là một người trí thức yêu nước."], answer: 1 },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "mcq", question: "Trong các câu sau, câu nào là câu kể 'Ai làm gì?'", options: ["A. Lương Thế Vinh là Trạng nguyên nước Việt.", "B. Ông được mọi người nể phục vì học rộng.", "C. Cuốn sách toán đầu tiên rất dễ sử dụng.", "D. Sứ thần xé một trang sách mỏng."], answer: 3 },

    // --- DẠNG 2: TÌM BỘ PHẬN CỦA CÂU (Tự luận - FIB & Inline Dropdown) ---
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "fib", question: "Trong câu 'Hai bàn tay em xinh như hoa đầu cành.', bộ phận trả lời cho câu hỏi 'Ai (cái gì, con gì)?' là:", answer: "Hai bàn tay em" },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "fib", question: "Trong câu 'Đàn chim én đang chao lượn trên bầu trời mùa xuân.', bộ phận trả lời cho câu hỏi 'Làm gì?' là:", answer: "đang chao lượn trên bầu trời mùa xuân" },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "fib", question: "Xác định từ để hỏi cho bộ phận in đậm: 'Lá cờ Tổ quốc bay **phấp phới trong gió**.' (Điền từ: là gì / làm gì / thế nào)", answer: "thế nào" },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "inline_dropdown", question: "Em hãy phân tích câu 'Mùa thu của em là vàng hoa cúc.' bằng cách chọn đáp án đúng:", text: "Bộ phận 'Mùa thu của em' trả lời cho câu hỏi ___. Bộ phận 'là vàng hoa cúc' trả lời cho câu hỏi ___. Câu này thuộc mẫu câu ___.", dropdowns: [["Ai?", "Là gì?", "Làm gì?"], ["Làm gì?", "Là gì?", "Thế nào?"], ["Ai làm gì?", "Ai thế nào?", "Ai là gì?"]], answer: ["Ai?", "Là gì?", "Ai là gì?"] },

    // --- DẠNG 3: GẠCH CHÂN TÌM CÂU TRONG ĐOẠN VĂN/THƠ (Highlight) ---
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "highlight", question: "Em hãy gạch chân TẤT CẢ các câu theo mẫu 'Ai thế nào?' trong đoạn văn sau (Click vào câu để gạch chân):", words: ["Mùa thu đến. ", "Bầu trời trong xanh, cao vợi. ", "Đàn chim én rủ nhau bay về phương nam. ", "Nắng mùa thu dịu dàng trải vàng trên mặt đất. "], answer: [1, 3] },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "highlight", question: "Gạch chân dưới câu kể 'Ai làm gì?' có trong đoạn văn sau (Trích bài Bạn mới - SGK):", words: ["Giờ ra chơi, cả lớp ùa ra sân trường. ", "A-i-a là học sinh mới. ", "Thầy giáo đứng quan sát học trò. "], answer: [0, 2] },
    // Ứng dụng code chẻ dòng \n cho bài thơ
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "highlight", question: "Gạch chân dưới câu kể 'Ai là gì?' có trong đoạn thơ sau (Trích Mùa thu của em - SGK):", words: ["Mùa thu của em\n", "Là xanh cốm mới\n", "Mùi hương như gợi\n", "Từ màu lá sen.\n"], answer: [0, 1] }, 

    // --- DẠNG 4: NỐI CÂU, GHÉP CẶP (Match) ---
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "match", question: "Ghép các chủ ngữ và vị ngữ để tạo thành câu 'Ai là gì?' hợp lý:", left: ["Trường học", "Quyển sách", "Thầy giáo"], right: ["là người cha thứ hai của em.", "là ngôi nhà thứ hai của em.", "là người bạn cung cấp kiến thức."], answer: {"Trường học": "là ngôi nhà thứ hai của em.", "Quyển sách": "là người bạn cung cấp kiến thức.", "Thầy giáo": "là người cha thứ hai của em."} },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "match", question: "Nối các sự vật với hoạt động của chúng (Mẫu Ai làm gì?):", left: ["Bác nông dân", "Con ong", "Mặt trời"], right: ["đang gặt lúa trên đồng.", "đang hút mật trong vườn.", "tỏa tia nắng ấm áp."], answer: {"Bác nông dân": "đang gặt lúa trên đồng.", "Con ong": "đang hút mật trong vườn.", "Mặt trời": "tỏa tia nắng ấm áp."} },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "match", question: "Phân loại các câu văn sau vào đúng mẫu câu của nó:", left: ["Nắng vàng trải khắp nơi.", "Quả cầu giấy xanh xanh.", "Diều là hạt cau."], right: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?"], answer: {"Nắng vàng trải khắp nơi.": "Ai làm gì?", "Quả cầu giấy xanh xanh.": "Ai thế nào?", "Diều là hạt cau.": "Ai là gì?"} },

    // --- DẠNG 5: SẮP XẾP CÂU (Order) ---
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "order", question: "Sắp xếp các từ sau để tạo thành câu 'Ai là gì?' (Trích bài Cánh Diều):", words: ["toán", "Đó", "ở Việt Nam.", "là", "cuốn sách", "đầu tiên"], answer: "Đó là cuốn sách toán đầu tiên ở Việt Nam." },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "order", question: "Sắp xếp các từ sau để tạo thành câu 'Ai làm gì?':", words: ["tự", "thí nghiệm.", "mình", "làm", "Cô bé"], answer: "Cô bé tự mình làm thí nghiệm." },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "order", question: "Sắp xếp các từ sau để tạo thành câu 'Ai thế nào?':", words: ["của", "Đôi mắt", "bé", "đen láy.", "rất"], answer: "Đôi mắt của bé rất đen láy." },

    // --- DẠNG 6: TRẮC NGHIỆM NHIỀU ĐÁP ÁN (Multi Select) ---
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "multi_select", question: "Em hãy chọn TẤT CẢ các câu thuộc mẫu 'Ai thế nào?' trong các câu dưới đây:", options: ["Trăng đêm nay sáng vằng vặc.", "Học sinh xếp hàng tập thể dục.", "Bông hoa mười giờ đỏ rực.", "Bố em là công nhân nhà máy."], answer: [0, 2] },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "multi_select", question: "Những câu nào dưới đây KHÔNG PHẢI là câu 'Ai làm gì?'", options: ["Chú chim sẻ đang hót líu lo.", "Lông chú chim sẻ có màu nâu nhạt.", "Con mèo nhảy phốc lên bàn.", "Con mèo là loài vật bắt chuột rất giỏi."], answer: [1, 3] },

    // --- DẠNG 7: NÂNG CAO VÀ CÁC BẪY TƯ DUY ---
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "mcq", question: "Bẫy tư duy: Trong câu 'Bạn Mai đang chăm chỉ làm bài tập.', mẫu câu đúng của nó là gì? (Chú ý từ 'làm bài tập')", options: ["A. Ai thế nào? (vì có từ 'chăm chỉ')", "B. Ai làm gì? (vì có hoạt động 'làm bài tập')", "C. Ai là gì?", "D. Không thuộc 3 mẫu câu trên"], answer: 1 },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "fib", question: "Cho câu: 'Chiếc đồng hồ reo báo thức ầm ĩ.'. Để chuyển thành mẫu câu 'Ai thế nào?', ta viết: 'Chiếc đồng hồ rất...' (Điền 2 chữ)", answer: "ầm ĩ" },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "inline_dropdown", question: "Phân loại các câu thơ sau (Trích bài thơ Bận - SGK):", text: "Câu 'Trời thu bận xanh' thuộc mẫu câu ___. Câu 'Sông Hồng bận chảy' thuộc mẫu câu ___.", dropdowns: [["Ai là gì?", "Ai làm gì?", "Ai thế nào?"], ["Ai là gì?", "Ai làm gì?", "Ai thế nào?"]], answer: ["Ai thế nào?", "Ai làm gì?"] },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "highlight", question: "Gạch chân câu văn thuộc mẫu 'Ai thế nào?' trong đoạn sau (Trích bài Nhớ lại buổi đầu đi học):", words: ["Buổi mai hôm ấy, một buổi mai đầy sương thu và gió lạnh. ", "Mẹ tôi âu yếm nắm tay tôi đi trên con đường làng dài và hẹp. ", "Con đường này tôi đã quen đi lại lắm lần. ", "Nhưng lần này, tôi tự nhiên thấy lạ. "], answer: [3] },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "mcq", question: "Có bao nhiêu câu 'Ai là gì?' trong đoạn văn sau: 'Nam là học sinh lớp 3A. Khang cũng là học sinh lớp 3A. Cả hai bạn đều là những học sinh giỏi. Hôm nay, hai bạn cùng nhau đi thư viện.'", options: ["A. 1 câu", "B. 2 câu", "C. 3 câu", "D. 4 câu"], answer: 2 },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "mcq", question: "Có bao nhiêu câu 'Ai thế nào?' trong đoạn văn sau: 'Nhà rông thật là đặc sắc. Làng càng lớn thì nhà rông càng bề thế, khang trang. Nhà rông là nơi đón tiếp khách đến làng.' (Trích bài Nhà rông)", options: ["A. 1 câu", "B. 2 câu", "C. 3 câu", "D. 0 câu"], answer: 1 },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "order", question: "Sắp xếp lại các phần để được câu phân tích đúng:", words: ["như ngọn đèn", "Câu 'Trái nhót", "tín hiệu.'", "là câu kể", "Ai là gì?"], answer: "Câu 'Trái nhót như ngọn đèn tín hiệu.' là câu kể Ai là gì?" },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "multi_select", question: "Khẳng định nào sau đây là SAI?", options: ["Câu 'Ai là gì?' dùng để giới thiệu hoặc nhận định.", "Câu 'Ai làm gì?' dùng để kể về màu sắc, hình dáng.", "Bộ phận trả lời câu hỏi 'Ai?' luôn chỉ con người.", "Câu 'Ai thế nào?' dùng để miêu tả đặc điểm, tính chất."], answer: [1, 2] },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "fib", question: "Cho câu 'Bà ngoại đang ngồi nhặt rau ngoài hiên.'. Bộ phận trả lời cho câu hỏi 'Ai?' là từ gì? (Điền 2 chữ)", answer: "Bà ngoại" },
    { topic: "Ôn tập câu Ai là gì, Ai làm gì, Ai thế nào", type: "inline_dropdown", question: "Xác định mẫu câu cho các hoạt động của bạn Bống trong bài Nhật kí của Bống:", text: "- Câu 'Bống chuẩn bị đồ bơi cho hai chị em.' thuộc mẫu ___.<br>- Câu 'Chiếc kính bơi màu hồng rất đẹp.' thuộc mẫu ___.", dropdowns: [["Ai là gì?", "Ai làm gì?", "Ai thế nào?"], ["Ai là gì?", "Ai làm gì?", "Ai thế nào?"]], answer: ["Ai làm gì?", "Ai thế nào?"] },
];
