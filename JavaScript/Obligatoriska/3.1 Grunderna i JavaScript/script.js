var arrayDisplay = document.getElementById("arrayDisplay");
var arrayBttn = document.getElementById("arrayBttn");
var BooleanBttnYes = document.getElementById("BooleanBttnYes");
var BooleanBttnNo = document.getElementById("BooleanBttnNo");
var booleanDisplay = document.getElementById("booleanDisplay");
var dateDisplay = document.getElementById("dateDisplay");

//Array
function arrayFunction(counter) {
   let animalsArr = ["Dog", "Cat", "Fish", "Bird", "Monkey"];
   if(counter === 0) {
      arrayDisplay.innerHTML = "";
   }
   if(counter<animalsArr.length) {
      setTimeout(function(){
         arrayDisplay.innerHTML += animalsArr[counter] + " ";
         counter++;
         arrayFunction(counter);
      }, 800);
   }
}


//Boolean
BooleanBttnNo.onclick = function() {booleanDisplay.innerHTML = Boolean(5>4) + ""};
BooleanBttnYes.onclick = function() {booleanDisplay.innerHTML = Boolean(5<4) + ""};

//Date
function dateFunction() {
   let date = new Date();
   let tim = date.getHours();
   let min = date.getMinutes();
   let sek = date.getSeconds();
   if (min < 10) {
      min = "0" + min;
   }
   if (sek < 10) {
      sek = "0" + sek;
   }
   dateDisplay.innerHTML = tim + ":" + min + ":" + sek;
   setTimeout(dateFunction, 500);
}

//Math
document.getElementById("roundBttn").onclick = function() {
   mathDisplay.innerHTML = "Avrundat värde: ";
   let roundInput = document.getElementById("roundInput");
   let inputValue = roundInput.value;
   let roundedValue = Math.round(inputValue);
   document.getElementById("mathDisplay").innerHTML += roundedValue;
}

//Number
document.getElementById("numberButton").onclick = function () {
   let inputValueAsString = document.getElementById("numberInput").value;
   let numberDisplay = document.getElementById("numberDisplay");
   let convertedInputValue = Number(inputValueAsString);
   numberDisplay.innerHTML = "Ditt nummer var tidigare av typen: " + typeof inputValueAsString + " men är nu av typen: " + typeof convertedInputValue +".";
}

//RegExp
document.getElementById("strinReplaceBttn").onclick = function () {
   let inputText = document.getElementById("textAreaForRegex").value;
   let wordToSwitchOut = document.getElementById("wordToSwitchOut").value;
   let wordToSwitchIn = document.getElementById("wordToSwitchIn").value;
   let outputParagraph = document.getElementById("regExpOutput");

   if (inputText !== "" && wordToSwitchIn !== "" && wordToSwitchOut !== "") {
      outputParagraph.innerHTML = "Output: ";
      let replaced = new RegExp(wordToSwitchOut,"g");
      var res = inputText.replace(replaced, wordToSwitchIn);
      document.getElementById("regExpOutput").innerHTML += res;
   } else {
      window.alert("All textareas and inputs needs to be filled in!");
   }
}

//Global
var global = 'I am global!'
document.getElementById("globalBttn").onclick = function () {
   window.alert(window.global);
}

arrayBttn.onclick = function() {
   arrayFunction(0);
}

dateFunction();
