function generateMathProblem() {
    var num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    var num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    document.getElementById("mathProblem").textContent = `What is ${num1} + ${num2}?`;
    return num1 + num2;
}

var correctAnswer = generateMathProblem();

document.getElementById("mathForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userAnswer = parseInt(document.getElementById("mathAnswer").value);
    var message = document.getElementById("message");

    if (userAnswer === correctAnswer) {
        message.textContent = "Correct! The contact form is now available.";
        document.getElementById("contactForm").style.display = "block";
        document.getElementById("mathForm").style.display = "none";
    } else {
        message.textContent = "You failed math! How will you contact Qusai Alhamed?";
        document.getElementById("contactForm").style.display = "none";
    }
});
