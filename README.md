# ⚖️ Nyāya Knowledge Validation Framework

> **Where classical Nyāya reasoning meets modern web technology — explore, test, and validate knowledge through four traditional Pramāṇas.**

The **Nyāya Knowledge Validation Framework** is a web-based knowledge validation application inspired by the Nyāya school of Indian philosophy. It combines a predefined knowledge base with client-side JavaScript logic to evaluate user-selected statements and present a structured validation report.

The framework evaluates available statements through four classical **Nyāya Pramāṇas** — **Pratyakṣa (Observation), Anumāna (Inference), Upamāna (Comparison), and Śabda (Authoritative Testimony)** — and produces a confidence score with a final verdict such as **VALID, PARTIALLY VALID, or INVALID**.

---

## 🌐 Live Demo

**Try the application:**  
https://winster000.github.io/Nyaya-Knowledge-Validation-Framework/

**GitHub Repository:**  
https://github.com/WINSTER000/Nyaya-Knowledge-Validation-Framework

---

## ✨ Overview

Nyāya is one of the six classical schools of Indian philosophy and places strong emphasis on reliable means of acquiring knowledge (*Pramāṇa*).

This project translates that concept into an interactive web application.

Users can select or enter a knowledge statement, run the validation process, and receive a structured report explaining the statement through all four Pramāṇas.

The interface also provides a dashboard, validation history, sample statements, random examples, and a light/dark visual theme.

---

## 🧠 The Four Nyāya Pramāṇas

| Pramāṇa | Meaning | Role in the Framework |
|---|---|---|
| 👁️ **Pratyakṣa** | Direct Observation | Evaluates knowledge obtained through direct perception or observation. |
| 💡 **Anumāna** | Inference | Evaluates conclusions derived through reasoning from known information. |
| ⚖️ **Upamāna** | Comparison & Analogy | Evaluates knowledge gained through similarity or comparison with something familiar. |
| 📖 **Śabda** | Authoritative Testimony | Evaluates knowledge obtained from a reliable source, expert, witness, or authoritative text. |

Every matched statement is presented with an explanation for each of these four perspectives.

---

## 🚀 Key Features

### 🔍 Knowledge Validation
- Select a statement from the predefined knowledge base.
- Validate it using the four Nyāya Pramāṇas.
- Generate a detailed validation report.
- Display a confidence score.
- Return one of three verdicts:
  - ✅ **VALID**
  - ⚠️ **PARTIALLY VALID**
  - ❌ **INVALID**
- Show a clear **Knowledge Not Found** result when a statement is unavailable.

The validation process searches the predefined knowledge base and generates the report from the matched record. fileciteturn1file4L546-L589

### 📊 Validation Dashboard
The application tracks:
- Total searches
- Valid results
- Invalid results

These dashboard values are derived from the stored validation history. fileciteturn1file3L478-L530

### 📜 Validation History
- Stores recent validation results in browser Local Storage.
- Displays previous statements and their verdicts.
- Keeps the latest 10 validation records.
- Allows users to clear their history.

fileciteturn1file4L705-L744

### 📚 Sample Statements
Users can open a collection of predefined sample statements and select one to automatically populate the validator.

fileciteturn1file0L71-L89

### 🎲 Random Samples
A random sample can be selected for quick experimentation without manually choosing a statement. fileciteturn1file0L9-L20

### 🌗 Theme Support
The interface includes a dark-mode-first visual design with a parchment-inspired light mode.

The visual system uses deep indigo backgrounds, gold accents, vermilion highlights, sage tones, and typography based on Cormorant Garamond, Poppins, and JetBrains Mono. fileciteturn1file7L977-L1007

### 📱 Responsive Interface
Bootstrap 5 is used for responsive layouts, cards, buttons, forms, and other interface components. fileciteturn1file1L151-L173

---

# 🖥️ Screenshots

### 🏛️ Main Dashboard

![Nyāya Knowledge Validation Framework](screenshots/home.jpg)

The main interface introduces the framework, presents the four Pramāṇas, displays validation statistics, and provides access to the knowledge validator.

### 🔎 Knowledge Validator

![Knowledge Validator](screenshots/validator.jpg)

Users can select a statement and validate it through the four Nyāya Pramāṇas. The interface also provides reset, random sample, and sample-selection controls. fileciteturn1file2L282-L348

### 📋 Validation Report

![Nyāya Validation Report](screenshots/validation-report.jpg)

Each matched statement produces a structured report containing:
- The original statement
- Pratyakṣa explanation
- Anumāna explanation
- Upamāna explanation
- Śabda explanation
- Confidence score
- Final verdict

fileciteturn1file4L601-L691

### 🕘 Recent Validation History

![Validation History](screenshots/validation-history.jpg)

The history panel keeps track of recent validations and their verdicts using browser Local Storage. fileciteturn1file0L40-L69

### 📚 Sample Statements

![Sample Statements](screenshots/sample-statements.jpg)

Sample statements provide a quick way to explore the validation system without manually entering a statement.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Structure and semantic page layout |
| **CSS3** | Custom visual design, themes, animations, and responsive styling |
| **JavaScript** | Validation logic, knowledge-base search, UI interaction, history, and dashboard calculations |
| **Bootstrap 5** | Responsive grid, cards, buttons, forms, and UI components |
| **Bootstrap Icons** | Interface icons |
| **Google Fonts** | Cormorant Garamond, Poppins, and JetBrains Mono |
| **Local Storage API** | Persistent client-side validation history |

The project loads Bootstrap 5.3.7, Bootstrap Icons, Google Fonts, the custom stylesheet, `database.js`, and `script.js`. fileciteturn1file1L151-L173 fileciteturn1file0L132-L137

---

## 🧩 How It Works

```text
                  ┌─────────────────────────┐
                  │       User Selects      │
                  │    Knowledge Statement  │
                  └────────────┬────────────┘
                               │
                               ▼
                  ┌─────────────────────────┐
                  │     Knowledge Base      │
                  │       database.js       │
                  └────────────┬────────────┘
                               │
                               ▼
                  ┌─────────────────────────┐
                  │   JavaScript Matching   │
                  │      & Validation       │
                  └────────────┬────────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
        Pratyakṣa          Anumāna          Upamāna
        Observation        Inference        Comparison
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                         Śabda / Testimony
                               │
                               ▼
                  ┌─────────────────────────┐
                  │   Confidence + Verdict │
                  └────────────┬────────────┘
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
             VALID      PARTIALLY VALID    INVALID
                               │
                               ▼
                       Local Storage
                      Validation History
```

---

## 🔬 Validation Logic

The application uses a predefined JavaScript knowledge base rather than an external database or AI model.

When validation is triggered:

1. The selected statement is normalized.
2. JavaScript searches the knowledge base for a matching statement.
3. If no matching record exists, the application displays **Knowledge Not Found**.
4. If a record is found, its four Pramāṇa explanations are displayed.
5. The record's confidence score is rendered as a progress bar.
6. The corresponding verdict is displayed.
7. The validation record is saved to browser Local Storage.

The matching process uses the statement stored in the knowledge base and checks whether the selected input is contained within the stored statement. fileciteturn1file4L546-L557

---

## 💾 Local Storage

The framework does not require a backend database for its validation history.

Instead, the browser's **Local Storage API** is used to preserve recent validation records.

This means:

- No login is required.
- No server-side database is required.
- History remains available after refreshing the page.
- History is specific to the browser/device.
- Clearing browser storage can remove the saved history.
- The application keeps a maximum of 10 recent records.

fileciteturn1file4L705-L717

---

## 📁 Project Structure

```text
Nyaya-Knowledge-Validation-Framework/
│
├── index.html
├── style.css
├── script.js
├── database.js
├── README.md
│
└── screenshots/
    ├── home.jpg
    ├── validator.jpg
    ├── validation-report.jpg
    ├── validation-history.jpg
    └── sample-statements.jpg
```

### File Responsibilities

**`index.html`**
- Defines the application structure.
- Contains the navigation, hero section, Pramāṇa cards, dashboard, validator, result area, history, samples, and footer. fileciteturn1file1L179-L203 fileciteturn1file0L40-L130

**`style.css`**
- Controls the complete visual design.
- Provides dark/light themes.
- Defines colors, typography, cards, buttons, layouts, animations, and responsive styling. fileciteturn1file7L977-L1007

**`database.js`**
- Contains the predefined knowledge base used by the validation system.

**`script.js`**
- Handles statement validation.
- Generates validation reports.
- Manages Local Storage history.
- Updates dashboard statistics.
- Handles samples, random selection, and interactive behavior. fileciteturn1file4L546-L557 fileciteturn1file4L705-L744

---

## ▶️ Run Locally

No backend server or package installation is required for the basic application.

### 1. Clone the repository

```bash
git clone https://github.com/WINSTER000/Nyaya-Knowledge-Validation-Framework.git
cd Nyaya-Knowledge-Validation-Framework
```

### 2. Open the application

You can open:

```text
index.html
```

directly in a modern web browser.

### 3. Recommended: Use a local server

If you use Visual Studio Code, install the **Live Server** extension and open:

```text
Right Click → Open with Live Server
```

Or, if Python is installed:

```bash
python -m http.server 5500
```

Then visit:

```text
http://localhost:5500
```

---

## 🌐 Deployment

The project is a client-side static web application and can be deployed on:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static web hosting service

The current project is already available through GitHub Pages:

**https://winster000.github.io/Nyaya-Knowledge-Validation-Framework/**

---

## 🎯 Learning Objectives

This project demonstrates practical applications of:

- Frontend web development
- HTML document structure
- CSS-based UI/UX design
- Bootstrap responsive design
- JavaScript programming
- Array searching and data matching
- Event handling
- Dynamic DOM manipulation
- Browser Local Storage
- Client-side data persistence
- Conditional logic
- Dashboard calculations
- Interactive user interfaces
- Knowledge-base driven applications

---

## ⚠️ Limitations

The current framework is intentionally based on a **predefined knowledge base**.

Therefore:

- It does not independently determine the truth of arbitrary real-world claims.
- Statements outside the knowledge base cannot be validated.
- The validation output depends on the records and scores defined in `database.js`.
- Local Storage history is limited to the user's browser/device.
- The application does not currently use a server-side database.
- The system should be viewed as an educational/demonstration framework rather than an authoritative truth engine.

---

## 🚀 Future Improvements

Possible future enhancements include:

- 🤖 AI-assisted knowledge validation
- 🧠 Natural language processing
- 🔎 Semantic rather than substring-based matching
- 🌐 A larger external knowledge base
- 🗄️ Backend database integration
- 👤 User accounts and synchronized history
- 📊 Advanced analytics dashboard
- 📚 Source/reference links for each validation
- 🧩 More sophisticated Nyāya reasoning rules
- 🌍 Multilingual support
- 📱 Progressive Web App support
- 🔐 User-specific validation history
- 📈 Validation trends and statistics

---

## 🎓 Indian Knowledge Systems

The project demonstrates how concepts from **Indian Knowledge Systems (IKS)** can be represented through modern computing concepts.

Rather than treating traditional reasoning as only a theoretical subject, this framework uses a digital interface to demonstrate how structured knowledge, predefined rules, searching, classification, and reasoning can be represented programmatically.

---

## 🤝 Contributing

Contributions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Test the application.
5. Commit your changes:

```bash
git add .
git commit -m "Add: your feature"
```

6. Push the branch:

```bash
git push origin feature/your-feature
```

7. Open a Pull Request.

---

## 👨‍💻 Author

**WINSTER000**

GitHub:  
https://github.com/WINSTER000

---

## 📜 License

No explicit open-source license is currently specified in the repository.

If you intend to distribute the project or accept external contributions, consider adding an appropriate license.

---

<p align="center">

### 🧠 ज्ञानं प्रमाणेन परीक्ष्यते

**Knowledge is examined through reliable means of knowing.**

Made with ❤️ for exploring Indian Knowledge Systems through modern technology.

</p>
