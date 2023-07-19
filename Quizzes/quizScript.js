var homeEl = document.querySelector("#homeId");
var mainEl = document.querySelector("#mainId");
var scoreEl = document.querySelector("#scoreId");
var congrats = document.querySelector("#congrats");
var quizNameEl = document.querySelector("#quizNameId");
var subjectEl = document.querySelector("#subjectId");
subjectEl.style.fontSize = "1px";
subjectEl.style.color = "white";
var subject = subjectEl.textContent;

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

const apiKey = 'AIzaSyA6K492K_D_9u5sxROWzeX2eZcz7AsYZ8Y';

var randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);

// Function to fetch a video about calculus and embed it into the website
function fetchAndEmbedVideo() {
  const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search';
  const params = {
    key: apiKey,
    part: 'snippet',
    q: subject,
    type: 'video',
    maxResults: 100,
  };

  const url = new URL(apiUrl);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.items.length);
      const videoId = data.items[randomNum].id.videoId;
      console.log(data);
      const videoUrl = `https://www.youtube.com/embed/${videoId}`;
      const embedHtml = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      document.getElementById('videoContainer').innerHTML = embedHtml;
    })
    .catch(error => {
      console.error('Error fetching video:', error);
    });
}

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

      localStorage.setItem("totalPoints", points)
      getQuizName();
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

    // Call the function to fetch and embed the calculus video
    fetchAndEmbedVideo();
    }
    console.log(points);
  });

var savedSubject = "";

function getQuizName(){
  if (subjectEl.textContent == "science"){
    savedSubject = "Science Quiz";
    localStorage.setItem("myKey", savedSubject);
  }
  else if (subjectEl.textContent == "animal-animal"){
    savedSubject = "Animal Quiz";
    localStorage.setItem("myKey", savedSubject);
  }
  else if (subjectEl.textContent == "programming"){
    savedSubject = "Coding Quiz";
    localStorage.setItem("myKey", savedSubject);
  }
  else if (subjectEl.textContent == "grammar"){
    savedSubject = "Grammar Quiz";
    localStorage.setItem("myKey", savedSubject);
  }
  else if (subjectEl.textContent == "history"){
    savedSubject = "History Quiz";
    localStorage.setItem("myKey", savedSubject);
  }
  else if (subjectEl.textContent == "algebra"){
    savedSubject = "Math Quiz";
    localStorage.setItem("myKey", savedSubject);
  }
  else if (subjectEl.textContent == "pop-culture"){
    savedSubject = "Pop Culture Quiz";
    localStorage.setItem("myKey", savedSubject);
  }
  else if (subjectEl.textContent == "music-theory"){
    savedSubject = "Music Quiz";
    localStorage.setItem("myKey", savedSubject);
  }
}