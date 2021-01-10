/*When start button is clicked=> 
-hide instructions screen    
-start timer function
- show questions 
let user select answer
show correct answer
log result for user.
for each incorrect answer -10sec
finish loop when wither timer=0 or questions =0
give user the score and option to log score
view high scores (arrange)
option to restart
*/
//Questions copied from https://www.examtiger.com/mcq/css-mcq-on-stylesheet/ this is the question array with answers
/*var questions = [
    {q:"If we want define style for an unique element, then which css selector will we use ?",
    ans: [{text:"Id", correct:true}, {text:"text", correct:false}, {text:"class",correct:false},{text:"name", correct:false}]}, 
    {q:"If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
    ans: [{text:"margin",correct:false}, {text:"clear",correct:true},{text:"float",correct:false},{text:"padding", correct:false}]},
    {q:"Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?",
    ans: [{text:"d-index", correct:false}, {text:"s-index", correct:false},{text:"x-index",correct:false},{text:"z-index",correct:true}]}, 
    {q:"Can we align a Block element by setting the left and right margins ?",
    ans: [{text:"Yes we can",correct:false},{text:"not possible", correct:true},{text:"maybe",correct:false}, {text:"probably",correct:false}]}, 
    {q:"If we want to wrap a block of text around an image, which css property will we use ?",
    ans: [{text:"wrap",correct:false}, {text:"push",correct:false}, {text:"float",correct:true},{text:"align",correct:false}]}];
*/

const startButton = document.getElementById("start-btn")
const nextButton= document.getElementById("next-btn")
const instructionsContainer = document.getElementById("instruction")
const quesContainer = document.getElementById("quesContainer")
const questionQuizz =document.getElementById("questions")
const ansButtonElement =document.getElementById("answer-button")
const quizTimer = document.getElementById("timeKeeper")

startButton.addEventListener("click", hideInstructions);

function hideInstructions (){
    instructionsContainer.style.display ="none"; //make instructions dissapear
    quesContainer.style.visibility = "visible";//make question container appear
    startButton.style.display="none";//hide the start button
    counTimer();//timer
    quizzQuestions(); //Show questions
}

    //how to decrease time by 10seconds
    //What to do when timer is =o
    //stop timer when button "view high scores" is pressed
function counTimer(){
    var totalTime = 15;
    var id=setInterval(timerFunction, 1000);
    function timerFunction(){
        if(totalTime==0){
            clearInterval(id);
        }else {totalTime--;
            quizTimer.textContent="Time : " +totalTime;
            }
        }
    }
//timer function ended

//How to show questions and answers
//LEFT TO DO : ensure we input the correct questions and answers

var questions = [
    {ques:"question 1", ans1:"ansA", ans2:"ansB", ans3:"ansC", ans4:"ansD", correct:"ansD"},
    {ques:"question 2", ans1:"ans2A",ans2:"ans2B",ans3:"ans2C",ans4:"ans2D", correct:"ans2D"},
    {ques:"question 3", ans1:"ans3A",ans2:"ans3B",ans3:"ans3C",ans4:"ans3D", correct:"ans3D"}];
function quizzQuestions(){
    console.log(questions.length);
var i;
for(i=0;i<questions.length; i++) {
    questionQuizz.textContent = "Question: "+(questions[i].ques);
    document.getElementById("ans1").textContent = questions[i].ans1;
    document.getElementById("ans2").textContent = questions[i].ans2;
    document.getElementById("ans3").textContent = questions[i].ans3;
    document.getElementById("ans4").textContent = questions[i].ans4;
    document.getElementById("ans4").textContent = questions[i].ans4;
    document.getElementById("correctAnswer").textContent = questions[i].correct;
   // ansButtonElement.addEventListener("onclick", whichAnswer());
    //nextButton.addEventListener("click",alert("next button was clicked"));
}
}


function whichAnswer(){
//Checking which button the user clicked and if the answer is correct. 
if(document.getElementById("ans1").clicked) {
    console.log("button 1 was clicked")
}else if (document.getElementById("ans2").clicked){
    console.log("button 2 was clicked")
}else if (document.getElementById("ans3").clicked){
    console.log("button 3 was clicked")
}else {
    console.log("button 4 was clicked")
}
}


/*<button onclick=>

btn.target.matches("ansD")
if (answer=ansD) {
    show correct;
} else*/
