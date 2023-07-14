var buttonEl = document.querySelector("#buttonId");
//var userInputEl = document.getElementById("userInputId").value;
// var h1El = document.getElementById("h1Id").textContent;

//console.log(h1El);

buttonEl.addEventListener("click", function() {
    //event.preventDefault();
    
    console.log(userInputEl);
})

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
		text: document.getElementById("h1Id").textContent,
	})
};

/*
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/
function getApi() {
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        //Using console.log to examine the data
        console.log(info);
        console.log(info.data.translatedText);

        document.getElementById("h1Id").textContent = info.data.translatedText;
        console.log(document.getElementById("h1Id").textContent);
      });
    };

 getApi();


/*
for (i)
    If (children[i].children === true){
        //translate all the text in the array of elements
    } else{
        //just keep going
    }
*/

