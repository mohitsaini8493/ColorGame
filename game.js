

var colors=[
"rgb(255, 0, 0)",
"rgb(255, 100, 20)",
"rgb(55, 10, 200)",
"rgb(25, 70, 110)",
"rgb(25, 10, 10)",
"rgb(5, 10, 220)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

var display = document.getElementById("#colorDisplay");

var messageDisplay = document.querySelector("#message");

display.textContent = pickedColor.toUpperCase();

for(var i=0; i<squares.length; i++){
	//add intial colors
	squares[i].style.background = colors[i];

	//add quick listeners
	squares[i].addEventListener("click", function(){
		clickedColor = this.style.background;
		if(clickedColor===pickedColor){
			messageDisplay.innerHTML = "Correct!! You Won";
		}
		else{
			this.style.background ="black";
			messageDisplay.textContent = "Try Again !!";
		}
	})
}