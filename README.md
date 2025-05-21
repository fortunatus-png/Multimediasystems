## 🧠 Portfolio-Projekt: Text-, Bild- und Audioverarbeitung mit Node.js

Dies ist eine Web-Applikation, die im Rahmen mehrerer Übungsaufgaben im Hochschulmodul entwickelt wurde.  
Die Anwendung basiert auf **Node.js** und **Express** und wurde schrittweise um neue Routen für Text-, Bild- und Audioverarbeitung erweitert.

---

## 📚 Übersicht

### 1. Textanalyse

#### `/info`
- Eingabe eines beliebigen Textes 
- Berechnung:
  - **Absolute Häufigkeit** & **Relative Häufigkeit** (p(x)) jedes Buchstabens
  - **Informationsgehalt** mit: `I(x) = log₂(1 / p(x))`
- Ausgabe als formatierte **Tabelle**

#### `/caesar`
- Caesar-Verschlüsselung & Entschlüsselung mit frei wählbarem Schlüssel
- Sonderzeichen bleiben erhalten
- Brute-Force-Entschlüsselung durch Häufigkeitsanalyse

---

### 2. Bildverarbeitung

#### `/dct`
- Eingabe einer 8x8-Matrix
- Berechnung der **diskreten Kosinustransformation (DCT)**
- Ergebnis: transformierte Matrix in Tabellenform

#### `/images`
- Anzeige mehrerer Bilder im `<canvas>`

---

### 3. Audiovisualisierung

#### `/audio`
- Laden und Abspielen einer Audiodatei (MP3)
- Start der Wiedergabe über Button

---

## ▶️ Installation & Start

```bash
npm install
npm start

---
Dann im Browser öffnen: http://localhost:3000
