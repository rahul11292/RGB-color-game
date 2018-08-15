var numSquares=6;
var color = [];
var pickedcolor;
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetb = document.querySelector("#reset");
var modeb=document.querySelectorAll(".mode");
var hint =document.querySelector(".hint");



init();

function init(){
	//setting mode of selection
	setmode();
	//setting up th Square blocks
	setSquare();		
	//resetting the panel
	reset();
	resetgame();
	//hint
	giveHint();
}



function setSquare(){
	for(var i =0; i<squares.length; i++){
			//add color to the squares
			squares[i].style.background=color[i];
			//add click listeners to the square
			squares[i].addEventListener("click", function(){
				var clickedColor = this.style.background;
				//compare color to picked color	
				if(clickedColor===pickedcolor){
					messageDisplay.textContent = "Correct";
					colorChange(clickedColor);
					h1.style.background = clickedColor;
					resetb.textContent = "Play Again!";
				}
				else{
					this.style.background = "#232323";
					messageDisplay.textContent = "Try Again!";
				}
			});
		}

}


function setmode(){
	for(var i=0; i<modeb.length; i++){
		modeb[i].addEventListener("click", function(){
			modeb[0].classList.remove("selected");
			modeb[1].classList.remove("selected");
			this.classList.add("selected");
			// if(this.textContent==="Easy"){
			// 	numSquares = 3;
			// }
			// else{
			// 	numSquares=6;
			// } 
			//Same can be written as
			this.textContent ==="Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		
		});
	}
}


//reset
function reset(){
	//figure out how many square to show
	//pick  new colors
	//pick a new color to choose
	//update page to reflect changes
	color = generateRandomColors(numSquares);
	//pick a new random color
	pickedcolor=pickcolor();
	messageDisplay.textContent="";
	resetb.textContent="New Colors";
	//change colo display to match the color 
	colorDisplay.textContent=pickedcolor;
	//change the color of the square
	for(var i =0; i<squares.length; i++){
	//add color to the squares
		if(color[i]){
			squares[i].style.display = "block";
			squares[i].style.background=color[i];
			}
		else{
			squares[i].style.display="none";
			}
		}
	h1.style.background="steelblue";

}

//Giving hint of the game


//resetting the game
function resetgame(){
	resetb.addEventListener("click", function(){
		reset();
	});
}

//color combination change
function colorChange(clr){
	//looping through the squares
	for(var i =0; i<squares.length; i++){
		squares[i].style.background=clr;
	}

}	

//selection of colors
function pickcolor(){
	var change = Math.floor(Math.random() * color.length);
	return color[change];
}

//generating random color 
function generateRandomColors(num){
//make the array
var arr = [];
//add num random colors to arr
for (var i =0; i<num; i++) {
arr.push(randommColor());
}
return arr;
}


//making randon RG color combination
function  randommColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
    var lastColor= "rgb("+r+", "+g+", "+b+")";
    return lastColor;
}
    