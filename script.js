const start = new Date("2026-02-01T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - start;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timer = document.getElementById("countdown");

    if (timer) {
        timer.innerHTML =
        `${days} Days ❤️ ${hours} Hours 💙 ${minutes} Minutes 💖 ${seconds} Seconds`;
    }
}

setInterval(updateTimer,1000);
updateTimer();
