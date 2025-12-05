// Background Music Handler
const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("music-btn");
let isPlaying = false;

// Auto-play after first user interaction
function enableAutoPlay() {
    if (!isPlaying) {
        bgm.muted = false;
        bgm.volume = 0.4;
        bgm.play().catch(() => {});
        isPlaying = true;
        updateButton();
    }
    document.removeEventListener("click", enableAutoPlay);
}

document.addEventListener("click", enableAutoPlay, { once: true });

// Toggle button play/pause
musicBtn.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play();
        isPlaying = true;
    } else {
        bgm.pause();
        isPlaying = false;
    }
    updateButton();
});

// Update button UI
function updateButton() {
    musicBtn.textContent = isPlaying ? "🔊 Music" : "🔇 Music";
}
