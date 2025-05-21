// Elemente referenzieren
const audioElement = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const panningControl = document.getElementById("panning-control");
const canvas = document.getElementById("canvas");
const canvasCtx = canvas.getContext("2d");

// Web Audio API einrichten
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioSource = audioContext.createMediaElementSource(audioElement);
const panner = audioContext.createStereoPanner();
const analyser = audioContext.createAnalyser();

// Audio-Knoten verbinden
audioSource.connect(panner);
panner.connect(analyser);
analyser.connect(audioContext.destination);

// Analyser konfigurieren
analyser.fftSize = 256; // Größe der Fast Fourier Transform (FFT)
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Audio starten
playButton.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume(); // Web Audio API aktivieren, falls sie pausiert ist
    }
    audioElement.play(); // Abspielen
});

// Audio pausieren
pauseButton.addEventListener("click", () => {
    audioElement.pause();
});

// Panning steuern
panningControl.addEventListener("input", (event) => {
    const panValue = parseFloat(event.target.value);
    panner.pan.value = panValue; // Panning zwischen -1 (links) und 1 (rechts)
});

// Animation basierend auf Frequenzdaten
function draw() {
    requestAnimationFrame(draw);

    // Frequenzdaten holen
    analyser.getByteFrequencyData(dataArray);

    // Canvas leeren
    canvasCtx.fillStyle = "rgb(0, 0, 0)";
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    // Balken zeichnen
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        const r = barHeight + 25 * (i / bufferLength);
        const g = 250 * (i / bufferLength);
        const b = 50;

        canvasCtx.fillStyle = `rgb(${r},${g},${b})`;
        canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
    }
}

// Animation starten
draw();
