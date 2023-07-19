var quizTakenEl = document.querySelector("#quizTakenId");
var scoreEl = document.querySelector("#scoreId");

var points = localStorage.getItem("totalPoints");
console.log(points);
scoreEl.textContent = points;
