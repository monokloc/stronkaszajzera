document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const authorBox = document.querySelector(".author-box");

    const showBoxes = () => {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add("show");
            }, index * 300);
        });

        // Pojawienie się ramki autora z opóźnieniem
        setTimeout(() => {
            authorBox.classList.add("show");
        }, 900);
    };

    showBoxes();
});

function expandImage(img) {
    const fullscreenDiv = document.getElementById("fullscreen-img");
    const expandedImg = document.getElementById("expanded-img");

    expandedImg.src = img.src; 
    fullscreenDiv.style.display = "flex"; 
}

function closeImage() {
    document.getElementById("fullscreen-img").style.display = "none";
}

const songs = [
    { name: "Piosenka 1", src: "song1.mp3" },
    { name: "Piosenka 2", src: "song2.mp3" },
    { name: "Piosenka 3", src: "song3.mp3" },
    { name: "Piosenka 4", src: "song4.mp3" },
    { name: "Piosenka 5", src: "song5.mp3" }
];

const audioPlayer = document.getElementById("audioPlayer");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");
const prevSongBtn = document.getElementById("prevSong");
const nextSongBtn = document.getElementById("nextSong");

let currentSongIndex = Math.floor(Math.random() * songs.length);
let isPlaying = false;

// Funkcja odtwarzania piosenki
function playSong(index) {
    audioPlayer.src = songs[index].src;
    audioPlayer.play().then(() => {
        isPlaying = true;
    }).catch(error => {
        console.log("Autoplay zablokowany przez przeglądarkę. Kliknij gdziekolwiek, aby uruchomić.");
    });
}

// Przycisk poprzedniej piosenki
prevSongBtn.addEventListener("click", function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

// Przycisk następnej piosenki
nextSongBtn.addEventListener("click", function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

// Obsługa wyciszania
muteBtn.addEventListener("click", function() {
    audioPlayer.muted = !audioPlayer.muted;
    muteBtn.textContent = audioPlayer.muted ? "🔇" : "🔊";
});

// Obsługa zmiany głośności
volumeSlider.addEventListener("input", function() {
    audioPlayer.volume = this.value;
});

// Odtwarzanie po pierwszym kliknięciu użytkownika
document.body.addEventListener("click", function() {
    if (!isPlaying) {
        playSong(currentSongIndex);
    }
}, { once: true });
