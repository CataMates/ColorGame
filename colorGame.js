var numSquares = 6;
var colors =generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
modeButtons = document.querySelectorAll(".mode")

init();

function init(){
	for(var i = 0 ; i< modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
		}
		else{
			numSquares = 6;
		}
		reset();

	})
	}

	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				resetButton.textContent = "Play Again!";
				messageDisplay.textContent = "Correct";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
	reset();
}



function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected")
// 	easyBtn.classList.add("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0 ;i < squares.length ;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected")
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i <squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })

resetButton.addEventListener("click",function(){
	reset();
})

function changeColors(color){
	for(var i = 0 ; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var num = Math.floor(Math.random() * colors.length);
	return colors[num];
}
function generateRandomColors(num){
	var arr = []
	for(var i = 0 ; i < num ; i++){
		arr.push(randomRGB());
	}
	return arr;
}
function randomRGB(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}