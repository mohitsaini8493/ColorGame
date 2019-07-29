

var colors= generateRandomColor(6);
var numberSquares =6;
var squares = document.querySelectorAll(".square");
var pickedColor = colors[randomPickedColor(6)];
var display = document.getElementById("#colorDisplay");
var header = document.querySelector("#header");
var message = document.querySelector("#message");


display.textContent = pickedColor.toUpperCase();

var easyButton = document.querySelector("#easyButton");
easyButton.addEventListener("click", function(){
	colors= generateRandomColor(3);
	numberSquares =3;
	reset.innerHTML = "New Color";
	pickedColor = colors[randomPickedColor(3)];
	display.textContent = pickedColor.toUpperCase();
	for(var i=0; i<squares.length; i++){
		if(i<3){
	    	squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.background = "black";
		}
	}
	for(var i=3; i<6;i++){
		squares[i].removeEventListener("click", false);
	}
	
});

var hardButton = document.querySelector("#hardButton");
hardButton.addEventListener("click", function(){
	colors= generateRandomColor(6);
	numberSquares =6;
	reset.innerHTML = "New Color";
	pickedColor = colors[randomPickedColor(6)];
	display.textContent = pickedColor.toUpperCase();
	for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];
	}
});

var reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
	colors= generateRandomColor(6);
	pickedColor = colors[randomPickedColor(6)];
	display.textContent = pickedColor.toUpperCase();
	for(var i=0; i<numberSquares; i++){
	squares[i].style.background = colors[i];
	if(reset.innerHTML==="Play Again"){
		reset.innerHTML = "New Color";
		header.style.background = "black";
	} 
	}
	message.innerHTML = "Click Square Box";
	

});


for(var i=0; i<squares.length; i++){
	//add intial colors
	squares[i].style.background = colors[i];
	//add quick listeners
	squares[i].addEventListener("click", function(){
		clickedColor = this.style.background;
		if(clickedColor===pickedColor){
			message.innerHTML = "Correct!! You Won";
			reset.innerHTML = "Play Again"
			changeColor(pickedColor);
		}
		else{
			this.style.background ="black";
			message.textContent = "Try Again !!";
		}
	});
}


function randomPickedColor(num){
	return Math.floor(Math.random()*num);
}

function changeColor(color){
	for(var i=0; i<numberSquares; i++){
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




