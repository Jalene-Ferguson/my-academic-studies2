var quizTakenEl = document.querySelector("#quizTakenId");
var scoreEl = document.querySelector("#scoreId");

var points = localStorage.getItem("totalPoints");
console.log(points);
scoreEl.textContent = points;
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    redirectToLoginPage();
  });

  function redirectToLoginPage() {
    // Replace 'index.html' with the actual file name and extension of your login page
    window.open('../index.html', '_self');
  }
});


var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
});
