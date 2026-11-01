
const jokeBtn = document.getElementById("jokeBtn");
const jokeBox = document.getElementById("jokeBox");
const jokeText = document.getElementById("jokeText");

const jokes = [
    "Kenapa kalender selalu terlihat tenang? Karena dia tahu semua masalah ada tanggal kedaluwarsanya. 😂",

    "Apa bedanya kamu sama WiFi? Kalau WiFi bikin koneksi, kalau kamu bikin aku kehilangan fokus. 😭❤️",

    "Kenapa bulan nggak pernah kesepian? Karena selalu ditemani bintang. Kalau aku? Ya ditemani pikiran tentang kamu. 🤣",

    "Aku tadi mau cari obat buat memperbaiki mood kamu, tapi apoteknya bilang stok senyum kamu harus dipulihkan sendiri. 🥺",

    "Kalau kamu jadi tugas sekolah, aku nggak akan pernah bilang susah. Soalnya aku mau terus belajar memahami kamu. ❤️",

    "Kenapa HP nggak pernah bisa bohong? Karena semua perasaannya tersimpan di history. WKWK. 😂"
];

let lastJoke = -1;

jokeBtn.addEventListener("click", function() {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
    } while (randomIndex === lastJoke);

    lastJoke = randomIndex;

    jokeText.textContent = jokes[randomIndex];

    jokeBox.classList.remove("hidden");

    jokeBtn.textContent = "Hiburan Lagi 😂";
});

// Tombol sudah tersenyum
const yesBtn = document.getElementById("yesBtn");
const notYetBtn = document.getElementById("notYetBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", function() {
    response.textContent =
        "YAY! 🥹❤️ Makasih sudah mau tersenyum lagi. Tapi ingat, aku tetap harus memperbaiki kesalahanku, bukan cuma mengandalkan senyuman kamu. ILY!";

    response.classList.remove("hidden");

    createHeart();
});

// Tombol masih kesal
notYetBtn.addEventListener("click", function() {
    response.textContent =
        "Hehe, nggak apa-apa. 🥺 Aku nggak akan maksa kamu buat langsung memaafkan aku. Ambil waktu yang kamu butuhkan, ya. Aku tetap menghargai perasaan kamu. ❤️";

    response.classList.remove("hidden");
});

// Animasi hati
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = ["❤️", "💗", "💕", "💖"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "22px";
    heart.style.animationDuration = "5s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 900);
