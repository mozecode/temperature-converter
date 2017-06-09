/*
Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
If the temperature is greater than 90F/32C the color of the converted temperature should be red.
If the temperature is less than 32F/0C the color of the converted temperature should be blue.
For any other temperature, the color should be green.

*/
//targeting the div for the output
var convertedDiv= document.getElementById("converted");
var reset= document.getElementById("reset");
//target text box and submit buttons so we can add eventListeners
var userInput = document.getElementById("temp");
var button = document.getElementById("convert");
// Get a reference to the button element in the DOM

//add event listeners for submit button on click
// and text box on enter key up after being pressed
userInput.addEventListener("keyup", function(event){
if (event.key==="Enter"){

	//use same variable as
	//above so that either way, the value of the box is stored
	//in startTemp
	determineConverter();
	console.log("YeS!", startTemp);
	}

})

//look at console log for the userInput event
button.addEventListener("click", determineConverter);
reset.addEventListener("click", function(){
	location.reload(true);
})


//function to get value from the text box using .value
function obtainNum(){

	//save value from text box in variable for use in math
	var startTemp= userInput.value;

return startTemp;
}

function toCelsius (startTemp) {
var celsius = parseFloat((((startTemp)-32) * 5)/9);
console.log ("cel",celsius);
colorChoice(startTemp);
convertedDiv.innerHTML= `${Math.round(celsius)} degrees C`;
return Math.round(celsius);

}

function toFahrenheit (startTemp) {
var fahrenheit = parseFloat((startTemp * 1.8)+32);
console.log ("fah",fahrenheit);
colorChoice(fahrenheit);
convertedDiv.innerHTML= `${Math.round(fahrenheit)} degrees F`;
//prints result to div using targeting from first line of code with get element by id
return Math.round(fahrenheit);
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {

  //call this inside obtainNum to use conditional logic to determine which other function to call (C or F)
	var initialTemp= obtainNum();
	if (choiceF === true){
		toFahrenheit(initialTemp);
	} else {
		toCelsius(initialTemp);
	}
}

function colorChoice(temperature){
if (temperature>=90){

	convertedDiv.classList.add("red");

}else if (temperature>32 && temperature<90){
	convertedDiv.classList.add ("green");

} else {convertedDiv.classList.add("blue");}

}

let choiceF=false;
//targeting toFahrenheit radio button  & adding event listener
var chooseF= document.getElementById("toFahrenheit");
chooseF.addEventListener("click", function(){
	choiceF = true; //use bool to make if else easy in determineConverter
	console.log ("event",choiceF);

})

var chooseC =document.getElementById("toCelsius");
chooseC.addEventListener("click", function (){
	 choiceF= false;
	console.log ("event",choiceF);

})







// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);