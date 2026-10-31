
const typing = document.getElementById("typing");

const message = "Mungkin aku tidak selalu pandai mengungkapkan perasaan. Tapi ada satu hal yang ingin kamu tahu, kehadiranmu membuat hari-hariku terasa lebih berwarna. Terima kasih sudah mau menjadi bagian dari ceritaku.";

let index = 0;

function typeText() {
    if (index < message.length) {
        typing.textContent += message.charAt(index);
        index++;

        setTimeout(typeText, 45);
    }
}

typeText();

// Tombol pesan spesial
const openBtn = document.getElementById("openBtn");
const secret = document.getElementById("secret");

openBtn.addEventListener("click", function() {
    secret.classList.toggle("hidden");

    if (secret.classList.contains("hidden")) {
        openBtn.textContent = "Buka Pesan Spesial 💌";
    } else {
        openBtn.textContent = "Tutup Pesan ❤️";
    }
});

// Animasi hati
const hearts = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.textContent = ["❤️", "💗", "💕", "💖"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 600);
