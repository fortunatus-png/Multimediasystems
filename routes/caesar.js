var express = require('express');
var router = express.Router();

// Caesar-Cipher
router.get('/process', function (req, res, next) {

    const { action, letters, shift } = req.session.data || {};

    if (!letters) {
        res.send('Keine Daten gefunden.');
        return;
    }

    let processedText = "";
    if (action === "encrypt") {
        processedText = caesarCipher(letters, parseInt(shift, 10));
    } else if (action === "decrypt") {
        processedText = caesarCipher(letters, -parseInt(shift, 10));
    }

    res.render("caesar", {
        result: { action, text: letters, shift, processedText }
    });
});

// Brute-Force-Entschlüsselung
router.get("/bruteforce", function (req, res, next) {
    const { letters } = req.session.data || {};

    if (!letters) {
        res.send('Keien Daten gefunden.');
        return;
    }

    // Häufigkeit der Buchstaben ermitteln
    const letterFrequencies = {};
    let maxFrequency = 0;
    let mostFrequentLetter = "";
    // Häufigsten Buchstaben finden
    for (let char of letters.toLowerCase()) {
        if (char >= "a" && char <= "z") {
            letterFrequencies[char] = (letterFrequencies[char] || 0) + 1;
            if (letterFrequencies[char] > maxFrequency) {
                maxFrequency = letterFrequencies[char];
                mostFrequentLetter = char;
            }
        }
    }
    // Schlüssel berechnen
    const calculatedKey = (mostFrequentLetter.charCodeAt(0) - "e".charCodeAt(0) + 26) % 26;
    const decryptedText = caesarCipher(letters, -calculatedKey);

    res.render("caesar", {
        result: {
            action: "bruteforce",
            text: letters,
            shift: calculatedKey,
            processedText: decryptedText
        }
    });
});

// Hilfsfunktion: Caesar-Cipher(Text ver-/entschlüsseln)
function caesarCipher(letters, shift) {
    return letters
        .split("") // Text in ein Array von Zeichen aufteilen
        .map((char) => {
            if (char >= "A" && char <= "Z") {
                return String.fromCharCode(((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65);
            } else if (char >= "a" && char <= "z") {
                return String.fromCharCode(((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97);
            } else {
                return char; // Sonderzeichen unverändert lassen
            }
        })
        .join(""); // Array zurück in einen String konvertieren
}

module.exports = router;