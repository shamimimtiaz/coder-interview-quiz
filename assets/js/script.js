//HTML elements for DOM manipulation
var mainBody = document.getElementById("mainPage");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var quizCompleteDiv = document.getElementById("quizComplete");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startButton");
var startQuizDiv = document.getElementById("firstPage");
var scoreContainer = document.getElementById("scoreContainer");
var scorePageDiv = document.getElementById("scorePage");
var scoreInputName = document.getElementById("initials");
var scoreDisplayName = document.getElementById("score-initials");
var endGameBtns = document.getElementById("endBtns");
var submitScoreBtn = document.getElementById("submitScore");
var scoreDisplayScore = document.getElementById("score-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//Questions copied from https://www.examtiger.com/mcq/css-mcq-on-stylesheet/ this is the question array with answers
var questions = [
    {q:"If we want define style for an unique element, then which css selector will we use ?",
    optA:"Id",
    optB:"text",
    optC:"class",
    optD:"name",
    correctAns:"a"}, 
    {q:"If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
    optA:"margin",
    optB:"clear",
    optC:"float",
    optD:"padding",
    correctAns:"b"}, 
    {q:"Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?",
    optA:"d-index",
    optB:"s-index",
    optC:"x-index",
    optD:"z-index",
    correctAns:"d"}, 
    {q:"Can we align a Block element by setting the left and right margins ?",
    optA:"Yes we can",
    optB:"not possible",
    optC:"maybe",
    optD:"probably",
    correctAns:"b"}, 
    {q:"If we want to wrap a block of text around an image, which css property will we use ?",
    optA:"wrap",
    optB:"push",
    optC:"float",
    optD:"align",
    correctAns:"c"}]

    // Other global variables
var finalQuestionIndex = questions.length;
var currentQuestionIndex = 0;
var timeLeft = 120;
var timerInterval;
var score = 0;
var correct;
console.log("var declared");

//button to start the quizz
startQuizButton.addEventListener("click",startQuiz);

// Start Quiz function starts the TimeRanges, hides the start button, & displays the first quiz question.
function startQuiz(){
    console.log("start quizz button works");
    quizCompleteDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestions();

    //Quiz function starts the TimeRanges.
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time(in seconds): " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1200);
      mainBody.style.display = "block";
}
//the functions looks at the array of questions and asks the user, also knows the correct ans.
function generateQuizQuestions(){
    quizCompleteDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = questions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.q + "</p>";
    buttonA.innerHTML = currentQuestion.optA;
    buttonB.innerHTML = currentQuestion.optB;
    buttonC.innerHTML = currentQuestion.optC;
    buttonD.innerHTML = currentQuestion.optD;
};
//Show score
function showScore(){
    mainBody.style.display = "none"
    quizCompleteDiv.style.display = "flex";
    clearInterval(timerInterval);
    scoreInputName.value = "";
    finalScoreEl.innerHTML = "You scored " + score + " out of " + questions.length + " correct!";
}

// This function checks the response of the user with the correct answer 
function correctAnswer(answer){
    correct = questions[currentQuestionIndex].correctAns;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        //the answer should be on the page
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestions();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestions();
        //display in the results div that the answer is wrong.
    }else{
        showScore();
    }
}

// This function displays the high scores page
submitScoreBtn.addEventListener("click", function highscore(){
    
    if(scoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = scoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        quizCompleteDiv.style.display = "none";
        scoreContainer.style.display = "flex";
        scorePageDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});
// This function clears the list for the high scores and generates a new high score list 
function generateHighscores(){
    scoreDisplayName.innerHTML = "";
    scoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        scoreDisplayName.appendChild(newNameSpan);
        scoreDisplayScore.appendChild(newScoreSpan);
    }
}

// This function displays the high scores page while hiding every other page
function showHighscore(){
    console.log("show high score function");
    startQuizDiv.style.display = "none"
    quizCompleteDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

// This function clears the local storage for the score board
function clearScore(){
    window.localStorage.clear();
    scoreDisplayName.textContent = "";
    scoreDisplayScore.textContent = "";
}

// This function sets all the variables back to their original values and brings the user buttons to replay of the quiz
function restart(){
    scoreContainer.style.display = "none";
    quizCompleteDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 120;
    score = 0;
    currentQuestionIndex = 0;
}
