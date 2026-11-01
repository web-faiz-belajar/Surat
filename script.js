
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 1. AMBIL ELEMEN HTML
    // =========================

    const jokeBtn = document.getElementById("jokeBtn");
    const jokeBox = document.getElementById("jokeBox");
    const jokeText = document.getElementById("jokeText");

    const yesBtn = document.getElementById("yesBtn");
    const notYetBtn = document.getElementById("notYetBtn");
    const response = document.getElementById("response");

    // Periksa apakah elemen ditemukan
    if (!jokeBtn || !jokeBox || !jokeText ||
        !yesBtn || !notYetBtn || !response) {

        console.error("Ada elemen HTML yang tidak ditemukan!");

        return;
    }

    // =========================
    // 2. DATA JOKES
    // =========================

    const jokes = [
        "Kenapa kalender selalu tenang? Karena semua masalah ada tanggal kedaluwarsanya. 😂",

        "Apa bedanya kamu sama WiFi? WiFi bikin koneksi, kamu bikin aku kehilangan fokus. 😭❤️",

        "Kenapa bulan nggak kesepian? Karena selalu ditemani bintang. Kalau aku ditemani pikiran tentang kamu. 🤣",

        "Aku mau cari obat buat mood kamu, tapi apoteknya bilang stok senyum kamu harus dipulihkan sendiri. 🥺",

        "Kalau kamu jadi tugas sekolah, aku nggak akan pernah bilang susah. Karena aku mau terus belajar memahami kamu. ❤️",

        "Kenapa HP nggak pernah bohong? Karena semua perasaannya tersimpan di history. WKWK. 😂"
    ];

    let lastJoke = -1;

    // =========================
    // 3. TOMBOL HIBURAN
    // =========================

    jokeBtn.addEventListener("click", function () {

        let randomIndex;

        do {
            randomIndex = Math.floor(
                Math.random() * jokes.length
            );
        } while (randomIndex === lastJoke);

        lastJoke = randomIndex;

        jokeText.textContent = jokes[randomIndex];

        jokeBox.classList.remove("hidden");

        jokeBtn.textContent = "Hiburan Lagi 😂";

    });

    // =========================
    // 4. TOMBOL SUDAH SENYUM
    // =========================

    yesBtn.addEventListener("click", function () {

        response.textContent =
            "YAY! 🥹❤️ Makasih sudah mau tersenyum lagi. Tapi aku tetap harus memperbaiki kesalahanku, bukan cuma mengandalkan senyuman kamu. ILY!";

        response.classList.remove("hidden");

        createHeart(15);

    });

    // =========================
    // 5. TOMBOL MASIH KESEL
    // =========================

    notYetBtn.addEventListener("click", function () {

        response.textContent =
            "Hehe, nggak apa-apa. 🥺 Aku nggak akan maksa kamu buat langsung memaafkan aku. Ambil waktu yang kamu butuhkan, ya. Aku tetap menghargai perasaan kamu. ❤️";

        response.classList.remove("hidden");

    });

    // =========================
    // 6. ANIMASI HATI
    // =========================

    function createHeart(total = 1) {

        for (let i = 0; i < total; i++) {

            const heart = document.createElement("div");

            heart.className = "heart";

            heart.textContent = [
                "❤️", "💗", "💕", "💖"
            ][Math.floor(Math.random() * 4)];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 20) + "px";

            heart.style.animationDuration =
                (4 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 8000);

        }

    }

    // Hati melayang otomatis
    setInterval(function () {
        createHeart();
    }, 1200);

    console.log("Semua fitur Ungkapan Cinta berhasil dimuat!");

});
