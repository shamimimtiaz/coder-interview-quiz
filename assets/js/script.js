/*When start button is clicked=> 
-hide instructions screen    
-start timer function
- show questions 
-let user select answer
-show correct answer
log result for user.
for each incorrect answer -10sec
finish loop when wither timer=0 or questions =0
give user the score and option to log score
view high scores (arrange)
option to restart
*/
//Questions copied from https://www.examtiger.com/mcq/css-mcq-on-stylesheet/ this is the question array with answers
var currentQuestionIndex = 0;
var score=0;
const startButton = document.getElementById("start-btn")
const nextButton= document.getElementById("next-btn")
const instructionsContainer = document.getElementById("instruction")
const quesContainer = document.getElementById("quesContainer")
const questionQuizz =document.getElementById("questions")
const ansButtonElement =document.getElementById("answer-button")
const quizTimer = document.getElementById("timeKeeper")
const highScores = document.getElementById("viewHighScores")
const correctAnswerShow = document.getElementById("correctAnswer")

var highScoreLog =[];
startButton.addEventListener("click", hideInstructions);
highScores.addEventListener("click", showHighScores);

//Step 1 after Start button click
function hideInstructions (){
    instructionsContainer.style.display ="none"; //make instructions dissapear
    quesContainer.style.visibility = "visible";//make question container appear
    startButton.style.display="none";//hide the start button
    
    counTimer();//timer
    quizzQuestions(); //Show questions
}

//how to decrease time by 10seconds

function counTimer(){
    console.log("timer function");
    var totalTime = 30;
    var id=setInterval(timerFunction, 1000);
    function timerFunction(){
        if(totalTime==0){
            clearInterval(id);
            showHighScores();
        }else {totalTime--;
            quizTimer.textContent="Time : " +totalTime;
            }
        }
    }
//timer function ended

//How to show questions and answers

var questions = [
    {ques:"Can we align a Block element by setting the left and right margins ?", ans1:"Yes we can", ans2:"Not Possible", ans3:"Maybe possible with JQuery", ans4:"Probably", correct:"ans2"},
    {ques:"If we want define style for an unique element, then which css selector will we use ?", ans1:"Id",ans2:"Text",ans3:"class",ans4:"name", correct:"ans1"},
    {ques:"If we don't want to allow a floating div to the left side of an element, which css property will we use ?", ans1:"margin",ans2:"clear",ans3:"float",ans4:"padding", correct:"ans2"},
    {ques:"The default value of position attribute is _________.", ans1:"fixed",ans2:"absolute",ans3:"inherit",ans4:"relative", correct:"ans4"},
    {ques:"Which CSS property is used to control the text size of an element ?", ans1:"font-style",ans2:"text-size",ans3:"font-size",ans4:"text-style", correct:"ans3"}
];
    var questionLenghtIndex=questions.length-1;

    function quizzQuestions(){
    
    if(questionLenghtIndex===currentQuestionIndex){
        showHighScores();
    }else {
        renderQuestionAns(currentQuestionIndex);  
    }
}
//END: How to show questions and answers


//function to show the question and answer

function renderQuestionAns(currentQuestionIndex){
    questionQuizz.textContent = "Question: "+(questions[currentQuestionIndex].ques);
    document.getElementById("ans1").textContent = questions[currentQuestionIndex].ans1;
    document.getElementById("ans2").textContent = questions[currentQuestionIndex].ans2;
    document.getElementById("ans3").textContent = questions[currentQuestionIndex].ans3;
    document.getElementById("ans4").textContent = questions[currentQuestionIndex].ans4;
  //  correctAnswer();
}

//END: function to show the question and answer

//Correct Answer checking
function correctAnswer(answer){
    correct = questions[currentQuestionIndex].correct;
    console.log("ques no "+currentQuestionIndex);
    console.log("the correct answer "+correct);
    console.log("what i clicked " + answer);
    if(answer === correct && currentQuestionIndex !== questionLenghtIndex){
        alert("Correct Answer");
        score++;
        currentQuestionIndex++;
        renderQuestionAns(currentQuestionIndex);
    } else if (answer !== correct && currentQuestionIndex !== questionLenghtIndex){
        alert("wrong answer");
        currentQuestionIndex++;
        renderQuestionAns(currentQuestionIndex);
    }else{
        console.log("You scored " +score+"  out of 5");
    }
};

//view high scores (arrange)
function showHighScores(){
    instructionsContainer.style.display ="none"; //make instructions dissapear
    quesContainer.style.display = "none";//make question container appear  
    nextButton.style.display="none";//hide the start button
    document.getElementById("titleBar").style.display = "none";
    document.getElementById("currentHighScore").style.visibility="visible";
    document.getElementById("finalScore").textContent = "You Scored " + score + " out of 5";
    startButton.textContent = "RESTART";
    console.log("show high scores");
    startButton.addEventListener("click", hideInstructions);
}
