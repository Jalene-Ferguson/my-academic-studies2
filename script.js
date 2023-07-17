/* document.getElementById('mainHeading').childNodes[0].nodeValue;

let str = "     \n  ";  // replace with your string variable

if (str.trim().length === 0) {
  alert("The string is empty or has only whitespace");
} else {
  alert("The string is not empty");
}
*/
var firstGen = document.body.children;

var testTest = document.getElementById("testId");
//console.log(testTest.childNodes[0].textContent);

var checkEl = document.getElementById("checkId");
//console.log(checkEl.children);

var testArray = [];

for (var a=0; a<firstGen.length; a++){
  try{
    testArray.push(firstGen[a].childNodes[0].textContent);  
    console.log(testArray);
  }
  catch{
    break;
  }
  if (firstGen[a].children.length > 0){
    for (var b=0; b<firstGen[a].children.length; b++){ 
      try{
        testArray.push(firstGen[a].children[b].childNodes[0].textContent);
        console.log(testArray);
      }
      catch{
        break;
      }
      if (firstGen[a].children[b].children.length > 0){
        for (var c=0; b<firstGen[a].children[b].children.length; c++){
          try{
            testArray.push(firstGen[a].children[b].children[c].childNodes[0].textContent);
            console.log(testArray);
            console.log(firstGen[a].children[b].children[c].children.length);
          }
          catch{
            break;
          }
          if (firstGen[a].children[b].children[c].children.length > 0){ 
            for (var d=0; d<firstGen[a].children[b].children[c].children.length; d++){
              try{
                  testArray.push(firstGen[a].children[b].children[c].children[d].childNodes[0].textContent);
                  console.log(testArray);
                }catch{
                  break;
                }
                if (firstGen[a].children[b].children[c].children[d].children.length > 0){ 
                  for (var e=0; e<firstGen[a].children[b].children[c].children[d].children.length; e++){
                    try{
                      testArray.push(firstGen[a].children[b].children[c].children[d].children[e].childNodes[0].textContent);
                      console.log(testArray);
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




console.log(testArray);

/*
for (var i=0; i<bodyEl.length; i++){
  testArray.push(bodyEl[i].textContent);
  console.log(testArray);
};
*/

var storageKey = Math.random();
console.log(storageKey);

const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '6d9abf94c1msh8b6a3242b6cd020p1626b8jsn135637a479c2',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: 'en',
		target_language: 'es',
		text: testArray,
	})
};

console.log(testArray);

function getApi() {
    
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        //Using console.log to examine the data
        console.log(info);
        console.log(info.data.translatedText);
        
        testArray = info.data.translatedText;
        console.log(testArray);

        localStorage.setItem(storageKey, JSON.stringify(testArray));
      });
    };

getApi();

var globalObject = {};

setTimeout(function() { 
  console.log(localStorage.getItem(storageKey));
  var testVar2 = JSON.parse(localStorage.getItem(storageKey));
  console.log(testVar2);
  var myArray = testVar2.split(",");
  //console.log(myArray);
  console.log(typeof myArray);
  console.log(myArray.length);


console.log(myArray);

var count = 0;

for (var f=0; f<firstGen.length; f++){
  try{
    console.log(firstGen[f].childNodes[0].textContent);
    firstGen[f].childNodes[0].textContent = myArray[count];
    count++;
  }
  catch{
    break;
  }
  if (firstGen[f].children.length > 0){
    for (var g=0; g<firstGen[f].children.length; g++){
      try{
        firstGen[f].children[g].childNodes[0].textContent = myArray[count];
        count++;
      }
      catch{
        break;
      }
      if (firstGen[f].children[g].children.length > 0){
        for (var h=0; h<firstGen[f].children[g].children.length; h++){
          try{
            firstGen[f].children[g].children[h].childNodes[0].textContent = myArray[count];
            count++;
          }
          catch{
            break;
          }
          if (firstGen[f].children[g].children[h].children.length > 0){
            for (var i=0; i<firstGen[f].children[g].children[h].children.length; i++){
              try{
                firstGen[f].children[g].children[h].children[i].childNodes[0].textContent = myArray[count];
                count++;
              }
              catch{
                break;
              }
              if (firstGen[f].children[g].children[h].children[i].children.length > 0){
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
}, 5000); // getItem is asynchronus with setItem. It will not run properly unless there is a time lag
/*
for (var i=0; i<myArray.length; i++){
  bodyEl[i].textContent = myArray[i];
}
*/



