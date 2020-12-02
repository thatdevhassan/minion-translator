// declaring variables. attaching to ids.
var btnTranslate = document.querySelector("#trans-button");
var intext = document.querySelector("#in-text");
var outtext = document.querySelector("#out-text");



// checking for click
function clickfunc(){
    // console.log("the button is clicked");
    // console.log(intext.value);
    outtext.innerText = intext.value.length;
    }

btnTranslate.addEventListener("click", clickfunc);

// outtext.innerText = intext.value;

