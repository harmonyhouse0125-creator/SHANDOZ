document.addEventListener("DOMContentLoaded", () => {

    const bgm = document.getElementById("bgm");
    const musicBtn = document.getElementById("music-btn");
    let isPlaying = false;

    // Auto-play setelah klik pertama
    function enableAutoPlay() {
        bgm.muted = false;
        bgm.volume = 0.4;
        bgm.play().catch(()=>{});
        isPlaying = true;
        updateButton();
        document.removeEventListener("click", enableAutoPlay);
    }

    document.addEventListener("click", enableAutoPlay, { once: true });

    // Toggle manual
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

    // Ubah teks tombol
    function updateButton() {
        musicBtn.textContent = isPlaying ? "🔊 Music" : "🔇 Music";
    }

});
