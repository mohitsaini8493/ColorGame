

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
display.textContent = pickedColor.toUpperCase();

for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];
}