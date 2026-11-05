/* =========================================
   WEB NEMBAK CEWE - PENGATURAN MUDAH
   Ubah bagian CONFIG sesuai kebutuhanmu.
========================================= */
const CONFIG = {
  namaPengirim: "Faiz",
  namaPenerima: "kamu",
  pin: "2026", // Ganti dengan PIN pilihanmu (4 angka)
  petunjukPin: "Petunjuk: tanggal yang punya arti ♡",
  pertanyaan: "Maukah kamu jadi seseorang yang spesial buat aku?"
};

const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
let pinValue = "";
let pageIndex = 0;

const letterPages = [
  {
    title: "Boleh aku jujur?",
    text: "Sebenarnya ada sesuatu yang sudah lama ingin aku sampaikan. Aku mungkin bukan orang yang paling pandai merangkai kata, tapi kali ini aku ingin mencoba jujur tentang apa yang aku rasakan."
  },
  {
    title: "Tentang kamu...",
    text: "Ada hal sederhana dari dirimu yang selalu berhasil membuat hariku terasa lebih menyenangkan. Aku suka cara kamu menjadi dirimu sendiri. Semakin mengenalmu, semakin aku ingin mengenalmu lebih jauh."
  },
  {
    title: "Ini perasaanku",
    text: "Aku nggak tahu bagaimana perasaanmu, dan aku nggak ingin membuatmu merasa terbebani. Aku cuma ingin menyampaikan isi hatiku dengan tulus. Apa pun jawabanmu nanti, aku akan tetap menghargainya."
  }
];

$("#recipientName").textContent = CONFIG.namaPenerima;
$("#senderName").textContent = CONFIG.namaPengirim + " ♡";
$("#pinHint").textContent = CONFIG.petunjukPin;
$("#questionTitle").innerHTML = CONFIG.pertanyaan.replace("jadi seseorang", "<em>jadi seseorang</em>");

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
}
function updateDots() {
  $("#pinDots").querySelectorAll("i").forEach((dot, index) => {
    dot.classList.toggle("filled", index < pinValue.length);
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
    $("#pinHint").textContent = "PIN belum tepat. Coba sekali lagi, ya ♡";
    $("#pinHint").style.color = "#d94f78";
    resetPin();
  }
}
function renderLetter() {
  const page = letterPages[pageIndex];
  $("#letterTitle").textContent = page.title;
  $("#letterText").textContent = page.text;
  $("#letterCount").textContent = `0${pageIndex + 1} / 0${letterPages.length}`;
  $("#nextLetterBtn").innerHTML = pageIndex === letterPages.length - 1 ? "Lanjut ke pertanyaan <span>♡</span>" : "Lanjut <span>→</span>";
}

$("#startBtn").addEventListener("click", () => showScreen("pinScreen"));
$("#keypad").addEventListener("click", (event) => {
  const key = event.target.closest("button")?.dataset.key;
  if (!key) return;
  if (key === "clear") pinValue = pinValue.slice(0, -1);
  else if (key === "enter") { checkPin(); return; }
  else if (pinValue.length < 4) pinValue += key;
  updateDots();
  if (pinValue.length === 4) setTimeout(checkPin, 220);
});
document.addEventListener("keydown", (event) => {
  if (!$("#pinScreen").classList.contains("active")) return;
  if (/^[0-9]$/.test(event.key) && pinValue.length < 4) pinValue += event.key;
  else if (event.key === "Backspace") pinValue = pinValue.slice(0, -1);
  else if (event.key === "Enter") { checkPin(); return; }
  updateDots();
  if (pinValue.length === 4) setTimeout(checkPin, 220);
});
document.querySelectorAll("[data-back]").forEach(button => {
  button.addEventListener("click", () => { resetPin(); showScreen(button.dataset.back); });
});
$("#nextLetterBtn").addEventListener("click", () => {
  if (pageIndex < letterPages.length - 1) {
    pageIndex++;
    renderLetter();
  } else showScreen("questionScreen");
});
$("#yesBtn").addEventListener("click", () => {
  showScreen("yesScreen");
  launchHearts();
});
$("#noBtn").addEventListener("click", () => showScreen("noScreen"));
$("#finishBtn").addEventListener("click", () => showScreen("welcomeScreen"));

$("#copyReplyBtn").addEventListener("click", async () => {
  const message = $("#replyInput").value.trim();
  if (!message) {
    $("#copyStatus").textContent = "Tulis pesanmu dulu, ya ♡";
    return;
  }
  try {
    await navigator.clipboard.writeText(message);
    $("#copyStatus").textContent = "Pesan berhasil disalin ♡";
  } catch {
    $("#replyInput").select();
    $("#copyStatus").textContent = "Tekan lama teks lalu pilih Salin.";
  }
});

function launchHearts() {
  const symbols = ["♡", "♥", "✦", "✿"];
  for (let i = 0; i < 18; i++) {
    const item = document.createElement("span");
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:105vh;z-index:10;color:#fff;font-size:${16+Math.random()*22}px;pointer-events:none;transition:transform ${2+Math.random()*2}s linear,opacity 3s;`;
    document.body.appendChild(item);
    requestAnimationFrame(() => {
      item.style.transform = `translateY(-115vh) rotate(${Math.random()*240-120}deg)`;
      item.style.opacity = "0";
    });
    setTimeout(() => item.remove(), 4200);
  }
}
