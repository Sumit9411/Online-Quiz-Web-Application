$(document).ready(function() {
    // 1. Data Source (10 Questions)
    const quizData = [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
            correct: 1
        },
        {
            question: "Which property is used to change the background color in CSS?",
            options: ["color", "bgcolor", "background-color", "bg-color"],
            correct: 2
        },
        {
            question: "Which symbol is used for IDs in jQuery selectors?",
            options: ["#", ".", "$", "&"],
            correct: 0
        },
        {
            question: "How do you declare a variable in JavaScript?",
            options: ["v", "variable", "var", "int"],
            correct: 2
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            options: ["<script>", "<style>", "<css>", "<link>"],
            correct: 1
        },
        {
            question: "Which class provides a responsive fixed width container in Bootstrap?",
            options: ["container-fluid", "container-fixed", "container", "box"],
            correct: 2
        },
        {
            question: "Which HTTP status code implies 'Successful' request?",
            options: ["200", "404", "500", "201"],
            correct: 0
        },
        {
            question: "What is the correct syntax for referring to an external script called 'app.js'?",
            options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<script file='app.js'>"],
            correct: 2
        },
        {
            question: "Which of these is NOT a valid JSON data type?",
            options: ["String", "Number", "Function", "Boolean"],
            correct: 2
        },
        {
            question: "What does CSS stand for?",
            options: ["Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"],
            correct: 3
        }
    ];

    // 2. State Variables
    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 15;
    let timerInterval;

    // Initialize Quiz
    loadQuestion();

    // --- Load Questions Dynamically ---
    function loadQuestion() {
        // Reset State
        clearInterval(timerInterval);
        timeLeft = 15;
        $('#timer').text(timeLeft);
        $('#next-btn').prop('disabled', true).text('Next Question');
        
        // Get Current Question Data
        const currentData = quizData[currentQuestionIndex];
        
        // Update Text
        $('#question').text(`${currentQuestionIndex + 1}. ${currentData.question}`);
        
        // Update Progress Bar
        let progress = ((currentQuestionIndex) / quizData.length) * 100;
        $('#progress-bar').css('width', progress + '%');

        // Generate Options (FIXED HERE)
        $('#options-list').empty();
        currentData.options.forEach((opt, index) => {
            var $button = $('<button>')
                .addClass('btn option-btn')
                .attr('data-index', index)
                .text(opt);
            
            $('#options-list').append($button);
        });

        // Start Timer
        startTimer();
    }

    // --- Implement Countdown Timer ---
    function startTimer() {
        timerInterval = setInterval(function() {
            timeLeft--;
            $('#timer').text(timeLeft);
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                autoDisable(); // Time's up logic
            }
        }, 1000);
    }

    // --- Handle Option Selection ---
    $(document).on('click', '.option-btn', function() {
        clearInterval(timerInterval); // Stop timer
        
        const selectedIndex = $(this).data('index');
        const correctIndex = quizData[currentQuestionIndex].correct;

        // Calculate Score
        if (selectedIndex === correctIndex) {
            score++;
            $('#score-display').text(score);
            $(this).addClass('correct');
        } else {
            $(this).addClass('incorrect');
            // Highlight the correct one
            $(`.option-btn[data-index="${correctIndex}"]`).addClass('correct');
        }

        // Disable Options
        $('.option-btn').prop('disabled', true);
        $('#next-btn').prop('disabled', false);
    });

    // Handle "Next Question" Click
    $('#next-btn').click(function() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showFinalResults();
        }
    });

    // Logic for when time runs out
    function autoDisable() {
        $('.option-btn').prop('disabled', true);
        const correctIndex = quizData[currentQuestionIndex].correct;
        $(`.option-btn[data-index="${correctIndex}"]`).addClass('correct');
        $('#next-btn').prop('disabled', false);
    }

    function showFinalResults() {
        $('#quiz-section').hide();
        $('#score-display').parent().hide();
        $('.timer-badge').hide();
        
        $('#final-score').text(score);
        $('#total-questions').text(quizData.length);
        $('#result-section').fadeIn();
        
        // Fill progress bar to 100%
        $('#progress-bar').css('width', '100%');
    }
});