
/* =========================================
   WEB NEMBAK CEWE ❤️
   JAVASCRIPT - VERSION 2.0
========================================= */

/* =========================================
   1. PENGATURAN WEBSITE
========================================= */

const CONFIG = {
  namaPengirim: "Faiz",
  namaPenerima: "awaa",

  // PIN rahasia 4 angka
  pin: "2026",

  petunjukPin: "Petunjuk: tahun ini ♡",

  pertanyaan: "Maukah kamu jadi seseorang yang spesial buat aku?"
};


/* =========================================
   2. ELEMENT WEBSITE
========================================= */

const $ = (selector) => document.querySelector(selector);

const screens = [...document.querySelectorAll(".screen")];

let pinValue = "";
let pageIndex = 0;


/* =========================================
   3. ISI SURAT
========================================= */

const letterPages = [
  {
    title: "Boleh aku jujur?",
    text: `Sebenarnya ada sesuatu yang ingin aku sampaikan.

Aku mungkin bukan orang yang paling pandai merangkai kata, tapi kali ini aku ingin mencoba jujur tentang apa yang aku rasakan.`
  },

  {
    title: "Tentang kamu...",
    text: `Ada hal sederhana dari dirimu yang selalu berhasil membuat hariku terasa lebih menyenangkan.

Aku suka cara kamu menjadi dirimu sendiri. Semakin mengenalmu, semakin aku ingin mengenalmu lebih jauh.`
  },

  {
    title: "Ini perasaanku",
    text: `Aku nggak tahu bagaimana perasaanmu, dan aku nggak ingin membuatmu merasa terbebani.

Aku cuma ingin menyampaikan isi hatiku dengan tulus.

Apa pun jawabanmu nanti, aku akan tetap menghargainya.`
  }
];


/* =========================================
   4. MENGATUR IDENTITAS
========================================= */

$("#recipientName").textContent = CONFIG.namaPenerima;

$("#senderName").textContent =
  CONFIG.namaPengirim + " ♡";

$("#pinHint").textContent = CONFIG.petunjukPin;

$("#questionTitle").textContent =
  CONFIG.pertanyaan;


/* =========================================
   5. PINDAH HALAMAN
========================================= */

function showScreen(id) {

  screens.forEach(screen => {

    screen.classList.toggle(
      "active",
      screen.id === id
    );

  });

}


/* =========================================
   6. SISTEM PIN
========================================= */

function updateDots() {

  $("#pinDots")
    .querySelectorAll("i")
    .forEach((dot, index) => {

      dot.classList.toggle(
        "filled",
        index < pinValue.length
      );

    });

}


function resetPin() {

  pinValue = "";

  updateDots();

}


function checkPin() {

  if (pinValue === CONFIG.pin) {

    resetPin();

    pageIndex = 0;

    renderLetter();

    showScreen("letterScreen");

  } else {

    $("#pinHint").textContent =
      "PIN belum tepat. Coba sekali lagi, ya ♡";

    $("#pinHint").style.color = "#d94f78";

    resetPin();

  }

}


/* =========================================
   7. KEYPAD PIN
========================================= */

$("#startBtn").addEventListener("click", () => {

  showScreen("pinScreen");

});


$("#keypad").addEventListener("click", (event) => {

  const key = event.target.closest("button")?.dataset.key;

  if (!key) return;

  if (key === "clear") {

    pinValue = pinValue.slice(0, -1);

  }

  else if (key === "enter") {

    checkPin();

    return;

  }

  else if (pinValue.length < 4) {

    pinValue += key;

  }

  updateDots();

  if (pinValue.length === 4) {

    setTimeout(checkPin, 220);

  }

});


/* PIN DARI KEYBOARD */

document.addEventListener("keydown", (event) => {

  if (!$("#pinScreen").classList.contains("active")) {
    return;
  }

  if (/^[0-9]$/.test(event.key) && pinValue.length < 4) {

    pinValue += event.key;

  }

  else if (event.key === "Backspace") {

    pinValue = pinValue.slice(0, -1);

  }

  else if (event.key === "Enter") {

    checkPin();

    return;

  }

  updateDots();

  if (pinValue.length === 4) {

    setTimeout(checkPin, 220);

  }

});


/* =========================================
   8. TOMBOL KEMBALI
========================================= */

document.querySelectorAll("[data-back]")
  .forEach(button => {

    button.addEventListener("click", () => {

      resetPin();

      showScreen(button.dataset.back);

    });

  });


/* =========================================
   9. SISTEM SURAT
========================================= */

function renderLetter() {

  const page = letterPages[pageIndex];

  $("#letterTitle").textContent = page.title;

  $("#letterText").textContent = page.text;

  $("#letterCount").textContent =
    `0${pageIndex + 1} / 0${letterPages.length}`;

  $("#nextLetterBtn").innerHTML =
    pageIndex === letterPages.length - 1
      ? 'Lanjut ke pertanyaan <span>♡</span>'
      : 'Lanjut <span>→</span>';

}


$("#nextLetterBtn").addEventListener("click", () => {

  if (pageIndex < letterPages.length - 1) {

    pageIndex++;

    renderLetter();

  }

  else {

    showScreen("questionScreen");

  }

});


/* =========================================
   10. TOMBOL YES
========================================= */

$("#yesBtn").addEventListener("click", () => {

  showScreen("yesScreen");

  launchHearts();

});


/* =========================================
   11. TOMBOL NO - KABUR!
========================================= */

const noBtn = $("#noBtn");

const answerArea = $(".answer-buttons");

function moveNoButton(event) {

  event.preventDefault();

  const area = answerArea.getBoundingClientRect();

  const button = noBtn.getBoundingClientRect();

  const maxX = Math.max(
    0,
    (area.width - button.width) / 2 - 5
  );

  const maxY = 65;

  const randomX =
    Math.random() * maxX * 2 - maxX;

  const randomY =
    Math.random() * maxY * 2 - maxY;

  noBtn.style.transform =
    `translate(${randomX}px, ${randomY}px)`;

}


// Kabur saat didekati mouse
noBtn.addEventListener(
  "pointerenter",
  moveNoButton
);


// Kabur saat disentuh di HP
noBtn.addEventListener(
  "pointerdown",
  moveNoButton
);


/* =========================================
   12. ANIMASI HATI
========================================= */

function launchHearts() {

  const symbols = ["♡", "♥", "✦", "✿"];

  for (let i = 0; i < 25; i++) {

    const item = document.createElement("span");

    item.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: 105vh;
      z-index: 10;
      color: #fff;
      font-size: ${16 + Math.random() * 22}px;
      pointer-events: none;
      transition:
        transform ${2 + Math.random() * 2}s linear,
        opacity 3s;
    `;

    document.body.appendChild(item);

    requestAnimationFrame(() => {

      item.style.transform =
        `translateY(-115vh) rotate(${Math.random() * 240 - 120}deg)`;

      item.style.opacity = "0";

    });

    setTimeout(() => {

      item.remove();

    }, 4200);

  }

}


/* =========================================
   13. HALAMAN JAWABAN NO
========================================= */

// Tetap menghargai keputusan penerima.
$("#finishBtn").addEventListener("click", () => {

  showScreen("welcomeScreen");

});


/* =========================================
   14. SALIN PESAN
========================================= */

$("#copyReplyBtn").addEventListener("click", async () => {

  const message = $("#replyInput").value.trim();

  if (!message) {

    $("#copyStatus").textContent =
      "Tulis pesanmu dulu, ya ♡";

    return;

  }

  try {

    await navigator.clipboard.writeText(message);

    $("#copyStatus").textContent =
      "Pesan berhasil disalin ♡";

  }

  catch {

    $("#replyInput").select();

    $("#copyStatus").textContent =
      "Tekan lama teks lalu pilih Salin.";

  }

});


/* =========================================
   15. SELESAI
========================================= */

console.log("Web Nembak Cewe berhasil dijalankan ❤️");
