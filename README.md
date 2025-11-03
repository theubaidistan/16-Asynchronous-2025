# 🌍 Asynchronous JavaScript Explorer 🚀

[![Status](https://img.shields.io/badge/status-live-success.svg)](https://16-asynchronous-2025.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/Made%20With-JavaScript-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://16-asynchronous-2025.vercel.app/)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-green.svg)](#contributing)

> 🎯 **A simple, interactive web project demonstrating Asynchronous JavaScript concepts using Country & Flag data fetching.**

---

## 🖼️ Preview

![Web App Screenshot](./preview.png)
_Minimal, responsive UI showcasing fetched countries and flags_

---

## 🧑‍💻 Code Example

![Code Sample](./code-sample.png)

```js
// Fetch countries and display flags
async function loadCountries() {
  try {
    showLoading();
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    displayCountries(data);
  } catch (error) {
    showError(error);
  } finally {
    hideLoading();
  }
}
```

---

## 🧠 Overview

**Asynchronous JavaScript Explorer** is a learning project built to visualize and understand **async workflows** — from API fetching to promise handling and error states.  
It uses country and flag APIs to show real-world async logic in action with a clean, minimal user interface.

🔗 **Live Demo:** [https://16-asynchronous-2025.vercel.app/](https://16-asynchronous-2025.vercel.app/)

---

## ✨ Features

✅ Fetch and display country names & flags dynamically  
✅ Demonstrate `fetch()`, `async/await`, and `Promise` chaining  
✅ Handle loading and error states  
✅ Modern and responsive UI  
✅ Fully deployed on **Vercel**

---

## 🧩 Tech Stack

| Technology            | Description                           |
| --------------------- | ------------------------------------- |
| **HTML5**             | Structure of the app                  |
| **CSS3**              | Styling and layout                    |
| **JavaScript (ES6+)** | Core logic and asynchronous functions |
| **Vercel**            | Hosting and deployment                |

---

## ⚙️ Getting Started

### 🪄 Prerequisites

Ensure you have:

- Node.js and npm installed
- Git for cloning the repository
- A modern browser (Chrome, Edge, Firefox, etc.)

### 📥 Installation

```bash
# Clone the repo
git clone https://github.com/theubaidistan/16-asynchronous-2025.git

# Navigate into project folder
cd 16-asynchronous-2025

# (Optional) Install dependencies
npm install
```

# Start a live server (if using VS Code, use Live Server extension)

npm run dev

Then open:
👉 http://localhost:3000

📦 16-asynchronous-2025/
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 script.js
┣ 📜 README.md
┗ 📜 .gitignore

---

## 🧠 Learning Goals

Through this project, you’ll learn to:

- Understand Promises and async/await
- Handle API requests & responses
- Manage loading/error states
- Integrate fetch() with DOM manipulation
- Debug and test asynchronous code

---

## 🚀 Future Enhancements

- 🔍 Add search/filter for countries
- 💾 Implement caching to reduce API calls
- 🔄 Add retry and timeout logic
- 🎨 Improve UI with animations
- 🌐 Add region-based sorting or dark mode

---

## 📜 License

This project is licensed under the MIT License — free to use, modify, and share.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a PR or an issue on GitHub.

---

## 💬 Author

👨‍💻 Debug Dominator  
📍 Built with ❤️ and JavaScript  
🔗 [Live Demo](https://16-asynchronous-2025.vercel.app/)

> “Mastering async JavaScript is the key to building fast, responsive, and modern web applications.”
