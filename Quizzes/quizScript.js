var homeEl = document.querySelector("#homeId");
var mainEl = document.querySelector("#mainId");
var scoreEl = document.querySelector("#scoreId");
var congrats = document.querySelector("#congrats");

var correctEl1 = document.querySelector("#correct1");
var correctEl2 = document.querySelector("#correct2");
var correctEl3 = document.querySelector("#correct3");
var correctEl4 = document.querySelector("#correc4");
var correctEl5 = document.querySelector("#correct5");

var answersEl1 = document.querySelector("#answers1");
var answersEl2 = document.querySelector("#answers2");
var answersEl3 = document.querySelector("#answers3");
var answersEl4 = document.querySelector("#answers4");
var answersEl5 = document.querySelector("#answers5");

var points = 0;

answersEl1.addEventListener("click", function(event) {
    var element = event.target;
  
    // Check if the clicked element was a button
    if (element.matches("button")) {
      element.style.backgroundColor = "rgb(59 130 246)";
      element.style.color = "white";
    }

    if (element == correctEl1){
        points++;
    }
  });

  answersEl2.addEventListener("click", function(event) {
    var element = event.target;
  
    // Check if the clicked element was a button
    if (element.matches("button")) {
      element.style.backgroundColor = "rgb(59 130 246)";
      element.style.color = "white";
    }

    if (element == correctEl2){
        points++;
    }
  });

  answersEl3.addEventListener("click", function(event) {
    var element = event.target;
  
    // Check if the clicked element was a button
    if (element.matches("button")) {
      element.style.backgroundColor = "rgb(59 130 246)";
      element.style.color = "white";
    }

    if (element == correctEl3){
        points++;
    }
  });

  answersEl4.addEventListener("click", function(event) {
    var element = event.target;
  
    // Check if the clicked element was a button
    if (element.matches("button")) {
      element.style.backgroundColor = "rgb(59 130 246)";
      element.style.color = "white";
    }

    if (element == correctEl4){
        points++;
    }
  });

  answersEl5.addEventListener("click", function(event) {
    var element = event.target;
  
    if (element == correctEl5){
        points++;
    }
    // Check if the clicked element was a button
    if (element.matches("button")) {
      element.style.backgroundColor = "rgb(59 130 246)";
      element.style.color = "white";

      mainEl.textContent = "";

      congrats.style.color = "black";
      congrats.style.fontFamily = "monospace";
      congrats.style.fontSize = "50px";
      congrats.style.textAlign = "center";

      scoreEl.textContent = points + "/5";
      scoreEl.style.fontSize = "30px";
      scoreEl.style.textAlign = "center";
    }
    console.log(points);
  });

homeEl.addEventListener("click", function(){
    window.open("./Home-Page/home-page.html", "_self");
});

