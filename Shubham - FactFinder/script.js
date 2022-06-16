var output;
var imageFact;
var background = document.querySelector("body");
var mainDisplay = document.querySelector("main");
var factDisplay = document.getElementById("factdisplay");
var inputDisplay = document.getElementsByTagName("input");
var h1 = document.querySelector("h1");

function chooseFact(elem) {
	switch(elem.name) {
		case "a":
			output = "Glaciers and ice sheets hold about 69 percent of the world's freshwater.";
			pickProperties(1);
			imageFact = "<br><br><img src='images/glacier.jpg' alt='Glacier' style='width:18vw'>"
			break;
		case "b":
			output = "The fastest gust of wind ever recorded on Earth was 253 miles per hour.";
			pickProperties(2);
			imageFact = "<br><br><img src='images/windmill.jpg' alt='Windmill' style='width:18vw'>"
			break;
		case "c":
			output = "The entire world's population could fit inside Los Angeles.";
			imageFact = "<br><br><img src='images/losangeles.jpg' alt='Los Angeles' style='width:18vw'>"
			pickProperties(3);
			break;
		case "d":
			output = "The best place in the world to see rainbows is in Hawaii.";
			imageFact = "<br><br><img src='images/hawaii.jpg' alt='Hawaii' style='width:18vw'>"
			pickProperties(4);
			break;
		default:
			output = "Mount Everest is bigger now than the last time it was measured.";
			imageFact = "<br><br><img src='images/mounteverest.jpg' alt='Mount Everest' style='width:18vw'>"
			pickProperties(5);
	}
	
	document.getElementById("factdisplay").innerHTML = output;
	document.getElementById("factdisplay").innerHTML += imageFact;
}

function pickProperties(num) {
	
	switch(num) {
		case 1:
			background.style.backgroundColor = "#57CC99";
			mainDisplay.style.height = "85vh";
			mainDisplay.style.backgroundColor = "#38A3A5";
			mainDisplay.style.border = "5px dotted #22577A";
			factDisplay.style.border = "6px double #80ED99";
			factDisplay.style.fontFamily = "Lobster";
			factDisplay.style.fontSize = "38px";
			h1.style.fontFamily = "Fascinate";
			for(var i = 0; i < inputDisplay.length; i++) {
				inputDisplay[i].style.color = "#80ED99";
				inputDisplay[i].style.backgroundColor = "#22577A";
				inputDisplay[i].style.border = "2px solid #C7F9CC";
				inputDisplay[i].style.fontFamily = "'Kdam Thmor Pro'";
			}//for
			break;
		case 2:
			background.style.backgroundColor = "#006494";
			mainDisplay.style.height = "85vh";
			mainDisplay.style.backgroundColor = "#0582CA";
			mainDisplay.style.border = "5px double #22577A";
			factDisplay.style.border = "6px ridge #003554";
			factDisplay.style.fontFamily = "'Abril Fatface'";
			factDisplay.style.fontSize = "38px";
			h1.style.fontFamily = "'Press Start 2P'";
			h1.style.fontSize = "60px";
			h1.style.fontWeight = "bold";
			h1.style.marginTop = "2vh";
			for(var i = 0; i < inputDisplay.length; i++) {
				inputDisplay[i].style.color = "#00A6FB";
				inputDisplay[i].style.backgroundColor = "#051923";
				inputDisplay[i].style.border = "2px solid #0582CA";
				inputDisplay[i].style.fontFamily = "Orbitron";
			}//for
			break;
		case 3:
			background.style.backgroundColor = "#F25C54";
			mainDisplay.style.height = "85vh";
			mainDisplay.style.backgroundColor = "#F27059";
			mainDisplay.style.border = "5px outset #F4845F";
			factDisplay.style.border = "6px inset #F79D65";
			factDisplay.style.fontFamily = "Bangers";
			factDisplay.style.fontSize = "38px";
			h1.style.fontFamily = "'Titan One'";
			h1.style.fontSize = "60px";
			h1.style.marginTop = "2vh";
			for(var i = 0; i < inputDisplay.length; i++) {
				inputDisplay[i].style.color = "#F25C54";
				inputDisplay[i].style.backgroundColor = "#F79D65";
				inputDisplay[i].style.border = "2px solid #F4845F";
				inputDisplay[i].style.fontFamily = "Sanchez";
			}//for
			break;
		case 4:
			background.style.backgroundColor = "#708B75";
			mainDisplay.style.height = "85vh";
			mainDisplay.style.backgroundColor = "#9AB87A";
			mainDisplay.style.border = "5px groove #3D315B";
			factDisplay.style.border = "6px dashed #444B6E";
			factDisplay.style.fontFamily = "'Fugaz One'";
			factDisplay.style.fontSize = "38px";
			h1.style.fontFamily = "'Black Ops One'";
			h1.style.fontSize = "60px";
			h1.style.fontWeight = "bold";
			h1.style.marginTop = "2vh";
			for(var i = 0; i < inputDisplay.length; i++) {
				inputDisplay[i].style.color = "#F8F991";
				inputDisplay[i].style.backgroundColor = "#444B6E";
				inputDisplay[i].style.border = "2px solid #708B75";
				inputDisplay[i].style.fontFamily = "Shrikhand";
			}//for
			break;
		default:
			background.style.backgroundColor = "#5465FF";
			mainDisplay.style.height = "85vh";
			mainDisplay.style.backgroundColor = "#788BFF";
			mainDisplay.style.border = "5px solid #9BB1FF";
			factDisplay.style.border = "6px dotted #BFD7FF";
			factDisplay.style.fontFamily = "'Sigmar One'";
			factDisplay.style.fontSize = "38px";
			h1.style.fontFamily = "Audiowide";
			h1.style.fontSize = "60px";
			h1.style.fontWeight = "bold";
			h1.style.marginTop = "2vh";
			for(var i = 0; i < inputDisplay.length; i++) {
				inputDisplay[i].style.color = "#E2FDFF";
				inputDisplay[i].style.backgroundColor = "#788BFF";
				inputDisplay[i].style.border = "2px solid #9BB1FF";
				inputDisplay[i].style.fontFamily = "'Poller One'";
			}//for
	}
}