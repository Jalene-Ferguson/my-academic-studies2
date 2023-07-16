var bodyEl = document.body.children;

var testArray = [];

for (var i=0; i<bodyEl.length; i++){
  testArray.push(bodyEl[i].textContent);
  console.log(testArray);
};

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

        localStorage.setItem("translatedWords", JSON.stringify(testArray));
      });
    };

 getApi();
 
var testVar2 = JSON.parse(localStorage.getItem("translatedWords"));
var myArray = testVar2.split(",");
console.log(myArray[0]);
console.log(typeof myArray);
console.log(myArray.length);

/*
for (var i=0; i<myArray.length; i++){
  var bodyChild1 = document.body.children[i].children
  for (var j=0; i<bodyChild1.length)

}
*/

for (var i=0; i<myArray.length; i++){
  bodyEl[i].textContent = myArray[i];
}




