// declaring variables. attaching to ids.
var btnTranslate = document.querySelector("#trans-button");
var intext = document.querySelector("#in-text");
var outtext = document.querySelector("#out-text");


var serverUrl = "https://api.funtranslations.com/translate/minion.json"



function createUrl(input){
    var url = serverUrl+ "?text="+ input;
    return url;
}


// error handler

function errorHandler(error){
    console.log("error occured",error);
    alert("something is wrong with the server");
}


function clickHandler(){
    var inputText = intext.value;
    var urlReady = createUrl(inputText);


    fetch(urlReady).then(response => response.json()).then(json => {
        var translatedText = json.contents.translated;
        outtext.innerText = translatedText; // output
       })
.catch(errorHandler)

};

btnTranslate.addEventListener("click",clickHandler)



