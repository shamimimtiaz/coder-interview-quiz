/*When start button is clicked=> 
-hide instructions screen    
-start timer function
- show questions 
-let user select answer
show correct answer
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
    //stop timer when button "view high scores" is pressed
function counTimer(){
    console.log("timer function");
    var totalTime = 15;
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
//LEFT TO DO : ensure we input the correct questions and answers

var questions = [
    {ques:"question 1", ans1:"ansA", ans2:"ansB", ans3:"ansC", ans4:"ansD", correct:"ans4"},
    {ques:"question 2", ans1:"ans2A",ans2:"ans2B",ans3:"ans2C",ans4:"ans2D", correct:"ans2"},
    {ques:"question 3", ans1:"ans3A",ans2:"ans3B",ans3:"ans3C",ans4:"ans3D", correct:"ans3"}];
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
    console.log("the correct answer"+correct);
    console.log("what i clicked" + answer);
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
        console.log("loop completed");
        console.log(score);
    }
};

//view high scores (arrange)
function showHighScores(){
    instructionsContainer.style.display ="none"; //make instructions dissapear
    quesContainer.style.display = "none";//make question container appear  
    nextButton.style.display="none";//hide the start button
    startButton.textContent = "RESTART";
    console.log("show high scores");
    startButton.addEventListener("click", hideInstructions);
    var hgScore = document.createElement("p"); 
}
