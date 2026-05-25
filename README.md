# 🎬 Multimedia Systems

A full-stack multimedia application combining Node.js backend with EJS templating and vanilla JavaScript frontend for dynamic content management, featuring text analysis, image processing, and audio visualization capabilities.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [License](#license)

---

## 📖 About

**Multimedia Systems** is an educational portfolio project developed as part of university coursework in multimedia systems. The application demonstrates practical implementation of multimedia processing techniques through a modern web interface.

This project showcases:
- **Server-side rendering** with EJS templates
- **Interactive client-side functionality** with vanilla JavaScript
- **Real-time multimedia processing** (text, images, and audio)
- **Mathematical algorithms** for data analysis and transformation

---

## ✨ Features

### 1. Text Analysis (`/info`)
- Analyze any input text for character frequency
- Calculate **absolute and relative frequency** of letters
- Compute **information content** using: `I(x) = log₂(1 / p(x))`
- Display results in formatted tables
- Perfect for understanding information theory concepts

### 2. Caesar Cipher (`/caesar`)
- Encrypt and decrypt text using Caesar cipher
- Adjustable shift key for customization
- Preserves special characters and formatting
- Brute-force decryption via frequency analysis
- Educational tool for cryptography learning

### 3. Image Processing (`/dct`)
- Input 8×8 pixel matrices
- Calculate **Discrete Cosine Transformation (DCT)**
- View transformed matrix results
- Foundation for image compression techniques

### 4. Image Display (`/images`)
- Render and display multiple images using HTML5 `<canvas>`
- Multimedia content visualization

### 5. Audio Playback (`/audio`)
- Load and play MP3 audio files
- Simple audio player interface

---

## 🛠️ Tech Stack

| Technology | Purpose | Percentage |
|---|---|---|
| **JavaScript** | Core application logic & interactivity | 61% |
| **EJS** | Server-side template rendering | 32.7% |
| **CSS** | Styling & responsive design | 6.3% |
| **Node.js** | JavaScript runtime environment | Backend |
| **Express.js** | Web framework & routing | Backend |

---

## 📦 Prerequisites

Before running this project, ensure you have installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

Verify installation:
```bash
node --version
npm --version
```

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fortunatus-png/Multimediasystems.git
   cd Multimediasystems
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Access the application**
   - Open your browser and navigate to: `http://localhost:3000`
   - You should see the Multimedia Systems homepage

---

## 💻 Usage

### Text Analysis
1. Navigate to `/info`
2. Enter any text in the input field
3. View character frequency analysis and information content calculations

### Caesar Cipher
1. Go to `/caesar`
2. Enter text and choose a shift key (1-25)
3. Encrypt or decrypt your message
4. Use frequency analysis for brute-force decryption

### Discrete Cosine Transform (DCT)
1. Visit `/dct`
2. Input an 8×8 matrix of pixel values
3. View the DCT transformation results

### Image Display
1. Go to `/images`
2. View rendered images on HTML5 canvas

### Audio Player
1. Navigate to `/audio`
2. Load and play MP3 audio files

---

## 📁 Project Structure

```
Multimediasystems/
├── views/                 # EJS templates
│   ├── index.ejs         # Homepage
│   ├── info.ejs          # Text analysis page
│   ├── caesar.ejs        # Caesar cipher page
│   ├── dct.ejs           # DCT calculator page
│   ├── images.ejs        # Image display page
│   └── audio.ejs         # Audio player page
├── public/               # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # Client-side JavaScript
│   └── images/           # Static images
├── routes/               # Express route handlers
├── server.js             # Main application file
├── package.json          # Project dependencies
└── README.md             # This file
```

---

## 🌐 API Routes

| Route | Method | Description |
|---|---|---|
| `/` | GET | Homepage - navigation hub |
| `/info` | GET | Text analysis page |
| `/info` | POST | Process text analysis |
| `/caesar` | GET | Caesar cipher page |
| `/caesar` | POST | Encrypt/decrypt text |
| `/dct` | GET | DCT calculator page |
| `/dct` | POST | Calculate DCT transformation |
| `/images` | GET | Image display page |
| `/audio` | GET | Audio player page |

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- **Server-side rendering** with template engines
- **Client-side interactivity** using vanilla JavaScript
- **Mathematical algorithms** (frequency analysis, DCT, information theory)
- **Multimedia handling** (images, audio, text processing)
- **Full-stack web development** with Node.js and Express
- **Responsive design** principles

---

## 📝 License

This project is part of academic coursework. For usage rights and licensing information, please contact the repository owner.



---

**Last Updated:** May 2026  
**Status:** Active Development
