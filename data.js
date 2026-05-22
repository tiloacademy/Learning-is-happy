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
    { topic: "Trung điểm của đoạn thẳng", type: "fib", question: "Đường từ nhà đến trường là 1 km. Một trạm xe buýt ở chính giữa đoạn đường. Trạm xe buýt cách nhà bao nhiêu mét?", answer: "500" }

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
    { topic: "Tâm, bán kính, đường kính của hình tròn", type: "fib", question: "Đường tròn tâm O có bán kính là kết quả của phép chia 8424 : 4 (đơn vị cm). Đường kính của đường tròn đó là bao nhiêu cm?", answer: "4212" }
];
