
const typing = document.getElementById("typing");

const message = "Aku sebenarnya tidak pernah tahu bagaimana cara terbaik untuk mengungkapkan semua perasaan ini. Ada begitu banyak hal yang ingin aku sampaikan, tetapi terkadang semuanya terasa sulit untuk dirangkai menjadi kata-kata. Bukan karena aku tidak tahu apa yang aku rasakan, melainkan karena perasaan ini jauh lebih besar daripada apa yang bisa aku jelaskan.

Aku ingin kamu tahu bahwa kehadiranmu memiliki arti tersendiri dalam hidupku. Mungkin bagimu, hal-hal kecil yang kamu lakukan hanyalah sesuatu yang biasa. Namun, tanpa kamu sadari, hal sederhana seperti percakapan singkat, perhatian kecil, candaan, bahkan sekadar mengetahui bahwa kamu baik-baik saja bisa membuat hariku terasa lebih indah.

Aku tidak tahu sejak kapan perasaan ini mulai tumbuh. Semuanya terasa begitu saja. Awalnya mungkin hanya rasa nyaman, kemudian berubah menjadi keinginan untuk mengenalmu lebih jauh, mendengar ceritamu, mengetahui bagaimana harimu berjalan, dan menjadi seseorang yang bisa kamu ajak berbagi cerita.

Aku tidak ingin mengatakan bahwa aku adalah seseorang yang sempurna. Aku juga punya banyak kekurangan, terkadang sulit memahami keadaan, terkadang terlalu banyak berpikir, dan mungkin tidak selalu bisa menunjukkan perasaan dengan cara yang tepat. Namun, satu hal yang ingin aku pastikan adalah bahwa apa yang aku rasakan bukanlah sesuatu yang hanya datang untuk sementara.

Aku tidak membutuhkan hubungan yang selalu dipenuhi hal-hal mewah atau janji-janji yang terdengar indah. Bagiku, kebersamaan yang sederhana sudah cukup berarti. Saling menghargai, saling memahami, saling mendengarkan, dan tetap memilih untuk berkomunikasi ketika keadaan sedang tidak baik-baik saja.

Jika suatu hari kamu merasa lelah, aku berharap kamu tidak merasa harus selalu terlihat kuat. Kamu boleh bercerita, boleh mengeluh, boleh menjadi dirimu sendiri tanpa harus berpura-pura baik-baik saja. Aku ingin mengenalmu bukan hanya ketika kamu sedang bahagia, tetapi juga ketika kamu sedang menghadapi hari-hari yang sulit.

Aku juga tidak ingin memaksakan perasaan ini kepadamu. Aku tidak ingin membuatmu merasa terbebani hanya karena aku memiliki rasa yang begitu besar. Perasaan seharusnya memberikan kebahagiaan, bukan menjadi sesuatu yang membuat seseorang merasa terpaksa.

Aku hanya ingin jujur tentang apa yang ada di dalam hatiku. Bahwa ada seseorang yang selalu berharap kamu mendapatkan hal-hal baik dalam hidupmu. Seseorang yang ingin melihatmu tersenyum, berhasil meraih impianmu, dan menemukan kebahagiaan dalam setiap perjalanan yang kamu lalui.

Terima kasih karena sudah hadir, meskipun mungkin kamu tidak pernah menyadari sebesar apa arti kehadiranmu bagiku. Terima kasih untuk setiap percakapan, setiap tawa, setiap cerita, dan setiap momen sederhana yang perlahan menjadi kenangan berharga.

Aku tidak tahu bagaimana cerita kita akan berjalan ke depannya. Aku juga tidak bisa menjanjikan bahwa semuanya akan selalu mudah. Namun, aku berharap apa pun yang terjadi, kita tetap bisa saling menghargai dan tidak pernah menganggap remeh perasaan satu sama lain.

Pada akhirnya, aku hanya ingin kamu tahu satu hal: aku menyukaimu bukan karena kamu harus menjadi seseorang yang sempurna, tetapi karena menjadi dirimu sendiri sudah cukup membuatmu begitu istimewa di mataku.

Jika memang ada kesempatan untuk berjalan bersama, aku ingin menjalaninya dengan tulus, perlahan, dan tanpa terburu-buru.

Dari seseorang yang mungkin tidak selalu pandai mengungkapkan perasaan, tetapi memiliki begitu banyak hal yang ingin disampaikan kepadamu.";

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
