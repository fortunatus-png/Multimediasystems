const express = require("express");
const router = express.Router();

// Route zur Berechnung der DCT
router.post("/", (req, res) => {
    try {
        // Matrix aus dem Request-Body einlesen
        const inputMatrix = req.body.dct;
        if (!inputMatrix) {
            return res.send("Bitte geben Sie eine gültige 8x8-Matrix ein.");
        }

        // Eingabe-Matrix in ein 2D-Array umwandeln
        const matrix = parseMatrix(inputMatrix);
        if (!matrix || matrix.length !== 8 || matrix.some(row => row.length !== 8)) {
            return res.send("Die Matrix muss 8x8 Werte enthalten.");
        }

        // Berechnung der DCT
        const dctMatrix = calculateDCT(matrix);

        // Ergebnismatrix rendern
        res.render("dct", { dctMatrix });
    } catch (error) {
        console.error(error);
        res.send("Ein Fehler ist aufgetreten: " + error.message);
    }
});

// Eingabe-Matrix parsen
function parseMatrix(input) {
    return input
        .trim()
        .split(",") // Zeilen durch Komma trennen
        .map(row => row.trim().split(/\s+/).map(Number)); // Werte durch Leerzeichen trennen
}

// DCT berechnen
function calculateDCT(matrix) {
    const dctMatrix = Array.from({ length: 8 }, () => Array(8).fill(0));

    for (let u = 0; u < 8; u++) {
        for (let v = 0; v < 8; v++) {
            let sum = 0;

            // Berechnung der DCT-Formel
            for (let x = 0; x < 8; x++) {
                for (let y = 0; y < 8; y++) {
                    sum +=
                        matrix[x][y] *
                        Math.cos(((2 * x + 1) * u * Math.PI) / 16) *
                        Math.cos(((2 * y + 1) * v * Math.PI) / 16);
                }
            }

            // Skalierungsfaktor
            const cu = u === 0 ? 1 / Math.sqrt(2) : 1;
            const cv = v === 0 ? 1 / Math.sqrt(2) : 1;
            dctMatrix[u][v] = (1 / 4) * cu * cv * sum;
        }
    }
    return dctMatrix;
}

module.exports = router;
