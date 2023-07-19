var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
});

/* document.getElementById('mainHeading').childNodes[0].nodeValue;
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
var dropDownBtn = document.getElementById("dropbtn");
dropDownBtn.addEventListener("click", function() {
  document.getElementById("myDropdown").classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

let langChoice = {};
let langSrc = {};
var english = document.getElementById("en");
english.addEventListener("click", function() {
  langSrc.source = "es";
  langChoice.choice = "en";
  collectBodyEl();
  getApi();
  translatePlease();
});

var spanish = document.getElementById("es");
spanish.addEventListener("click", function() {
  langSrc.source = "en";
  langChoice.choice = "es";
  collectBodyEl();
  getApi();
  //translatePlease();
});

var firstGen = document.body.children;
//console.log(firstGen.length);

var testArray = [];
function collectBodyEl(){
  for (var a=0; a<firstGen.length; a++){
    try{
      testArray.push(firstGen[a].childNodes[0].textContent);  
      //console.log(testArray);
    }
    catch{
      break;
    }
    if (firstGen[a].children.length > 0){
      for (var b=0; b<firstGen[a].children.length; b++){ 
        try{
          testArray.push(firstGen[a].children[b].childNodes[0].textContent);
         // console.log(testArray);
        }
        catch{
          break;
        }
        if (firstGen[a].children[b].children.length > 0){
          for (var c=0; b<firstGen[a].children[b].children.length; c++){
            try{
              testArray.push(firstGen[a].children[b].children[c].childNodes[0].textContent);
              //console.log(testArray);
            }
            catch{
              break;
            }
            if (firstGen[a].children[b].children[c].children.length > 0){ 
              for (var d=0; d<firstGen[a].children[b].children[c].children.length; d++){
                try{
                    testArray.push(firstGen[a].children[b].children[c].children[d].childNodes[0].textContent);
                    //console.log(testArray);
                  }catch{
                    break;
                  }
                  if (firstGen[a].children[b].children[c].children[d].children.length > 0){ 
                    for (var e=0; e<firstGen[a].children[b].children[c].children[d].children.length; e++){
                      try{
                        testArray.push(firstGen[a].children[b].children[c].children[d].children[e].childNodes[0].textContent);
                        //console.log(testArray);
                      }
                      catch{
                        break;
                      }
                    }
                  }else{
                    continue;
                  }
                }
              }else{
                continue;
              }
            }
          }else{
            continue;
          }
        }
      }else{
        continue;
      }
    }
  }
//collectBodyEl();

//console.log(testArray);

var storageKey = Math.random();
//console.log(storageKey);



//console.log(testArray);

function getApi() {
  const url = 'https://text-translator2.p.rapidapi.com/translate';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '99e1fcd984msh7e804bff0d5f7a3p1a7b7bjsnea74dc20744b',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: new URLSearchParams({
      source_language: langSrc.source,
      target_language: langChoice.choice,
      text: testArray,
    })
  };
    
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        //Using console.log to examine the data
        dataString = info.data.translatedText;
        //testArray = testArray.replace("\n", "");
        dataString.trim();
        var translatedArr = dataString.split(",");
        //console.log(dataString);
        translatePlease(translatedArr);
      });
    };

//getApi();

var globalObject = {};

function translatePlease (myArray){
  console.log(myArray);
  var count = 0;

  for (var f=0; f<firstGen.length; f++){
    console.log(document.body.innerHTML);
    try{
      console.log(firstGen[f].childNodes[0].textContent);
      firstGen[f].childNodes[0].textContent = myArray[count];
      count++;
    }
    catch{
      break;
    }
    if (firstGen[f].children.length > 0){
      console.log(document.body.innerHTML);
      for (var g=0; g<firstGen[f].children.length; g++){
        try{
          firstGen[f].children[g].childNodes[0].textContent = myArray[count];
          count++;
        }
        catch{
          break;
        }
        if (f===0){
          console.log(document.body.innerHTML);
          console.log(firstGen[f].children[g].childNodes[0].textContent);
        }
        if (firstGen[f].children[g].children.length > 0){
          console.log(document.body.innerHTML);
          for (var h=0; h<firstGen[f].children[g].children.length; h++){
            try{
              firstGen[f].children[g].children[h].childNodes[0].textContent = myArray[count];
              count++;
            }
            catch{
              break;
            }
            if (f===0){
              console.log(document.body.innerHTML);
              console.log(firstGen[f].children[g].children[h].childNodes[0].textContent);
            }
            if (firstGen[f].children[g].children[h].children.length > 0){
              console.log(document.body.innerHTML);
              for (var i=0; i<firstGen[f].children[g].children[h].children.length; i++){
                try{
                  firstGen[f].children[g].children[h].children[i].childNodes[0].textContent = myArray[count];
                  count++;
                }
                catch{
                  break;
                }
                if (firstGen[f].children[g].children[h].children[i].children.length > 0){
                  console.log(document.body.innerHTML);
                  for (var j=0; j<firstGen[f].children[g].children[h].children[i].children.length; j++){
                    try{
                      firstGen[f].children[g].children[h].children[i].children[j].childNodes[0].textContent = myArray[count];
                      count++;
                    }
                    catch{
                      break;
                    }
                  }
                }else{
                  continue;
                }
              }
            }else{
              continue;
            }
          }
        }else{
          continue;
        }
      }
    }else{
      continue;
    }
  }
  for (var x=0; x<testArray.length; x++){
  if (testArray[x].search("\n") >= 0){
    myArray.splice(x, 0, "\n");
  }
  }
  console.log(myArray);
  console.log(firstGen.innerHTML);
}


