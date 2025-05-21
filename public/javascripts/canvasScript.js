// Liste der Bilder
const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg"
];

// Funktion, um Durchschnittsfarbe eines Bildes zu berechnen
function calculateAverageColor(imageData) {
    const data = imageData.data;
    let r = 0, g = 0, b = 0;

    // Pixel-Werte aufsummieren
    for (let i = 0; i < data.length; i += 4) {
        r += data[i];     // Rot
        g += data[i + 1]; // Grün
        b += data[i + 2]; // Blau
    }

    // Durchschnitt berechnen
    const pixelCount = data.length / 4;
    return {
        r: Math.floor(r / pixelCount),
        g: Math.floor(g / pixelCount),
        b: Math.floor(b / pixelCount)
    };
}

// Bilder laden und im Canvas anzeigen
function loadImages() {
    const container = document.getElementById("image-container");

    images.forEach((src) => {
        // Canvas erstellen
        const canvas = document.createElement("canvas");
        canvas.width = 200;  // Breite des Canvas
        canvas.height = 200; // Höhe des Canvas

        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = src;

        img.onload = function () {
            // Bild im Canvas zeichnen
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Durchschnittsfarbe berechnen
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const avgColor = calculateAverageColor(imageData);

            // Hintergrundfarbe des Canvas setzen
            canvas.style.backgroundColor = `rgb(${avgColor.r}, ${avgColor.g}, ${avgColor.b})`;
        };

        // Canvas dem Container hinzufügen
        container.appendChild(canvas);
    });
}

// Bilder laden, wenn die Seite geladen wurde
window.onload = loadImages;