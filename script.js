
// ===================================
// KONFIGURASI
// ===================================

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw7-QJ8UO-RHelbfZcZnoyYCLwyVBVtDdMqpFFmoXNDZnsxluDIf4zQfd6y1q3a4jUs/exec";

const NAMA_PENERIMA = "Salma Karisa";

// ===================================
// ELEMENT HTML
// ===================================

const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const result = document.getElementById("result");

const openLetter = document.getElementById("openLetter");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const joke = document.getElementById("joke");
const statusText = document.getElementById("status");

let attempts = 0;
let saving = false;

// ===================================
// CANDaan TOMBOL
// ===================================

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

// ===================================
// BUKA SURAT
// ===================================

openLetter.addEventListener("click", () => {
  opening.classList.add("hidden");
  letter.classList.remove("hidden");
});

// ===================================
// TOMBOL GAK MAU
// ===================================

noBtn.addEventListener("click", () => {

  if (saving) return;

  if (attempts < 10) {

    joke.textContent = jokes[attempts];

    attempts++;

    // Setelah 10 kali, tombol berhenti menghindar
    if (attempts === 10) {

      noBtn.style.position = "relative";
      noBtn.style.left = "auto";
      noBtn.style.top = "auto";

      noBtn.textContent = "Sekarang bisa ditekan 😭";

      return;
    }

    const area = document.getElementById("buttons");

    const maxX = Math.max(
      0,
      area.clientWidth - noBtn.offsetWidth
    );

    const maxY = Math.max(
      0,
      area.clientHeight - noBtn.offsetHeight
    );

    noBtn.style.position = "absolute";

    noBtn.style.left =
      Math.random() * maxX + "px";

    noBtn.style.top =
      Math.random() * maxY + "px";

  } else {

    saveChoice("Gak mau");

  }

});

// ===================================
// TOMBOL MAU
// ===================================

yesBtn.addEventListener("click", () => {
  saveChoice("Mau");
});

// ===================================
// KIRIM PILIHAN KE GOOGLE SHEETS
// ===================================

function saveChoice(choice) {

  if (saving) return;

  saving = true;

  yesBtn.disabled = true;
  noBtn.disabled = true;

  joke.textContent = "";
  statusText.textContent = "Menyimpan pilihan... ❤️";

  const data = {
    nama: NAMA_PENERIMA,
    pilihan: choice
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(data)
  })

  .then(() => {

    // no-cors tidak memungkinkan browser membaca
    // respons server. Ini berarti permintaan telah
    // dikirim, bukan bukti bahwa baris sudah tersimpan.

    showResult(choice);

  })

  .catch(error => {

    console.error("Pengiriman gagal:", error);

    saving = false;

    yesBtn.disabled = false;
    noBtn.disabled = false;

    statusText.textContent =
      "Koneksi bermasalah. Silakan coba lagi.";

  });

}

// ===================================
// TAMPILKAN HASIL
// ===================================

function showResult(choice) {

  letter.classList.add("hidden");
  result.classList.remove("hidden");

  const title =
    document.getElementById("resultTitle");

  const message =
    document.getElementById("resultMessage");

  if (choice === "Mau") {

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

// ===================================
// ANIMASI HATI
// ===================================

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
