var express = require('express');
var router = express.Router();

// Häufigkeitsverteilung und Informationsgehalt berechnen
router.post('/', function (req, res, next) {

    let text = req.body.letters.toLowerCase();
    let stringLength = 0;
    const absoluteFrequency = {};

    // Absolute Häufigkeit berechnen
    for (let char of text) {
        if (/[a-z]/.test(char)) {
            absoluteFrequency[char] = (absoluteFrequency[char] || 0) + 1;
            stringLength++;
        }
    }

    // Relative Häufigkeit und Informationsgehalt berechnen
    const results = [];
    for (let letter in absoluteFrequency) {
        const relativeFrequency = absoluteFrequency[letter] / stringLength;
        const infoContent = -Math.log2(relativeFrequency);
        results.push({
            letter,
            absoluteFrequency: absoluteFrequency[letter],
            relativeFrequency: relativeFrequency.toFixed(3),
            infoContent: infoContent.toFixed(3)
        });
    }

    const { action, letters, shift } = req.body;
    // Daten in der Session speichern
    req.session.data = { action, letters, shift };

    switch (action) {
        case "info": // Häufigkeitsverteilung
            res.render("info", { data: results });
            break;
        case "encrypt":
        case "decrypt":
            res.redirect("/caesar/process");
            break;
        case "bruteforce":
            res.redirect("/caesar/bruteforce");
            break;
        default:
            res.send("Ungültige Aktion.");
    }

});

module.exports = router;
