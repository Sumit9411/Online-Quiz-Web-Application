# Online Quiz Web Application

A lightweight, interactive Quiz Platform built with HTML, CSS (Bootstrap 5), and jQuery. This application tests users with multiple-choice questions, featuring a countdown timer, real-time scoring, and instant answer feedback.

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📸 Screenshots

![Quiz Interface](https://via.placeholder.com/800x400?text=Quiz+Interface+Screenshot)
*The main quiz interface with timer and options.*

## ✨ Features

* **Dynamic Question Loading:** Questions are injected via JavaScript, making the app scalable and easy to update.
* **Countdown Timer:** A 15-second timer per question adds urgency.
* **Real-time Feedback:**
    * **Correct Answers:** Highlighted in Green.
    * **Incorrect Answers:** Highlighted in Red (with the correct answer revealed).
* **Progress Tracking:** A visual progress bar updates as the user advances.
* **Score Calculation:** immediate score updates displayed in the header.
* **Responsive Design:** Fully responsive layout using Bootstrap 5.

## 🛠️ Technologies Used

* **HTML5:** Structural framework.
* **CSS3:** Custom styling for card animations and button states.
* **Bootstrap 5:** Responsive grid system and utility classes.
* **jQuery (3.6.0):** DOM manipulation, event handling, and logic.

## 🚀 How to Run

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/online-quiz-app.git](https://github.com/your-username/online-quiz-app.git)
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd online-quiz-app
    ```
3.  **Launch the App:**
    Simply open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, Safari). No server installation is required.

## ⚙️ Configuration

To add or change questions, open `index.html` (or your script file) and locate the `quizData` array in the JavaScript section:

```javascript
const quizData = [
    {
        question: "Your new question here?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 0 // Index of the correct answer (0 = Option A)
    },
    // Add more objects here
];
