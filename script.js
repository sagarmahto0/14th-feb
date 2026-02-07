const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const emojiBg = document.querySelector(".emoji-bg");

// YES CLICK 💖
yesBtn.addEventListener("click", () => {
    popup.classList.add("show");
    createEmojis(60);
    createConfetti();
});

// NO button runs away 😜
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Floating Love & Teddy Emojis
function createEmojis(count) {
    const emojis = ["❤️", "💖", "💕", "💘", "🧸"];
    for (let i = 0; i < count; i++) {
        const span = document.createElement("span");
        span.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + "vw";
        span.style.animationDuration = (Math.random() * 3 + 4) + "s";
        emojiBg.appendChild(span);

        setTimeout(() => span.remove(), 7000);
    }
}

// 🎉 Confetti
function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("span");
        confetti.innerHTML = "🎉";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.position = "absolute";
        confetti.style.animation = "float 5s linear infinite";
        emojiBg.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

// Continuous background
setInterval(() => {
    createEmojis(2);
}, 900);
