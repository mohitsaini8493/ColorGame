

var colors= generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

var display = document.getElementById("#colorDisplay");
var header = document.querySelector("#header");
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
			changeColor(pickedColor);
		}
		else{
			this.style.background ="black";
			messageDisplay.textContent = "Try Again !!";
		}
	})
}

function changeColor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
	header.style.background = color;
}

function generateRandomColor(num){
	var ar=[];
	for(var i=0; i<num ;i++){
		ar.push(randomColor());
	}
	return ar;
}

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";
	
}