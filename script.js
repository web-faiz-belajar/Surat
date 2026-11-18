
const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const result = document.getElementById("result");

const openLetter = document.getElementById("openLetter");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const joke = document.getElementById("joke");
const counter = document.getElementById("counter");

let attempts = 0;

const jokes = [
  "Eh, jangan yang itu dong 😭",
  "Yakin nih? Pikir lagi wkwk.",
  "Kok ngejar aku sih? 😂",
  "Kesempatan kedua masih ada...",
  "Jangan buru-buru dong 🥺",
  "Aku belum menyerah!",
  "Waduh, hampir ketangkap!",
  "Sedikit lagi nih!",
  "Oke, aku mulai pasrah 😭",
  "Baiklah, kali ini aku diam."
];

// BUKA SURAT
openLetter.addEventListener("click", () => {
  opening.classList.add("hidden");
  letter.classList.remove("hidden");
});

// TOMBOL GAK MAU
noBtn.addEventListener("click", () => {

  if (attempts < 10) {

    attempts++;

    joke.textContent = jokes[attempts - 1];

    counter.textContent =
      `Percobaan: ${attempts}/10`;

    if (attempts === 10) {

      noBtn.textContent = "Sekarang bisa ditekan 😭";

      noBtn.style.position = "static";
      noBtn.style.left = "auto";
      noBtn.style.top = "auto";

      return;
    }

    const area = document.getElementById("buttons");

    const maxX = Math.max(
      0,
      area.clientWidth - noBtn.offsetWidth
    );

    const maxY = 90;

    noBtn.style.position = "absolute";

    noBtn.style.left =
      Math.random() * maxX + "px";

    noBtn.style.top =
      Math.random() * maxY + "px";

  } else {

    showResult(false);

  }
});

// TOMBOL MAU
yesBtn.addEventListener("click", () => {
  showResult(true);
});

// HASIL PILIHAN
function showResult(accepted) {

  letter.classList.add("hidden");
  result.classList.remove("hidden");

  const title =
    document.getElementById("resultTitle");

  const message =
    document.getElementById("resultMessage");

  if (accepted) {

    title.textContent = "Terima kasih ❤️";

    message.textContent =
      "Aku senang kamu mau membuka kesempatan " +
      "untuk berbicara lagi. Aku ingin membuktikan " +
      "perubahan lewat tindakan, bukan sekadar kata-kata.";

  } else {

    title.textContent = "Terima kasih sudah jujur.";

    message.textContent =
      "Aku menghargai keputusanmu. Maaf atas " +
      "kesalahanku dan semoga kamu selalu bahagia.";

  }
}

// ANIMASI HATI
const hearts = document.getElementById("hearts");

setInterval(() => {

  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = "♥";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    (12 + Math.random() * 20) + "px";

  heart.style.animationDuration =
    (5 + Math.random() * 5) + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);

}, 700);
