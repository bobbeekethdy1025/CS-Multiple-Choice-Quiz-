// var questions = [
//     {
//     prompt: "What does HTML stand for?\n (a) Happy Tiger Money Lion\n (b) Hyper Trex Moon Lizard\n (c) Hyper Text Markup Language"]
//     answer: "Hypertext Markup Language"
//     }
//     {
//     title: "What does CSS stand for?"
//     choices: ["Cookie Slicing Skunk", "Candle Smells Strong", "Cascading Style Sheets"]
//     answer: "Cascading Style Sheets"
//     }
//     {
//     title: "What does JS stand for?"
//     choices: ["Jumping Snakle", "Jupiters Sun", "Java Script"]
//     answer: "Java Script"
//     }
// ]
// var score = 0
var questions = [
    {
        prompt: "What does HTML mean?\n(a) HyperTextMarkupLanguage\n(b) HyperTigerMonkeyLizard\n(c) HappyTamedMeerkatLying",
        answer: "a",
    },
    {
        prompt: "What does CSS mean?\n(a) CookieSlicingSkunk\n(b) CandleSmellsStrong\n(c) CascadingStyleSheets",
        answer: "c",
    },
    {
        prompt: "What does JS mean?\n(a) JumpingSnakle\n(b) JavaScript\n(c) JupitersSun",
        answer: "b",
    }
]
score = 0

document.getElementById("startButton").addEventListener("click", function(){
    var timeLeft = 10;

    var quizTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeLeft + " "+"seconds remaining";

    timeLeft--;
    if(timeLeft ===0){
        clearInterval(quizTimer)
        document.getElementById("timer").innerHTML = "Time is up!"
    }
    }, 1000);
});
console.log(timer);

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt)
    if(response == questions[i].answer){
        score++
        alert("Correct!")
    } else {
        alert("Wrong!")
    }
}
alert("You got " + score + "/" + questions.length + " correct!")
window.prompt("Enter First and Last name")
localStorage.setItem("Name", JSON.stringify(score));
