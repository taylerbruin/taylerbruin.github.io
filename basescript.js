/* this returns the html header to be put at the top of every page */
function createheader() {

    return `
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <input type=image class=home_button src="Logo_Run_2.svg" alt="Home" onclick="location.href='index.html'">
    <div class="topnav" id="myTopnav">
      <a href="index.html">Home</a>  
      <a href="Creative_Projects.html">News Stories</a>
      <a href="resume.html">Resume</a>  
      <a href="Technical_Projects.html">Coding Projects</a>
      <a href="Monster_Of_The_Week.html">Monster of the Week</a>
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" id="icon" onclick="Open_Mobile_Menu()">&#9776;</a>
    </div>
    
    
    </body>
`
}
this.mainheader();

function mainheader() {
    //creates base header for all pages.

    document.getElementById("top").innerHTML += createheader();


}

function Open_Mobile_Menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("icon").innerHTML = "&#9747;";
    } else {
        x.className = "topnav";
        document.getElementById("icon").innerHTML = "&#9776;";
    }
}
// Set up some initial variables
let x = 100;
let y = 100;
let dx = 5;
let dy = 5;

// Create a function to update the position of the rectangle
function update() {
  // Update the position of the rectangle
  x += dx;
  y += dy;

  // Check if the rectangle has hit a wall, and reverse its direction if so
  if (x < 0 || x > document.body.clientWidth - 100) {
    dx *= -1;
    document.getElementById("rectangle").style.height = `60px`;
    document.getElementById("rectangle").style.width = `50px`;
  } 
  if (y < 0 || y > document.body.clientHeight - 10) {
    dy *= -1;
    document.getElementById("rectangle").style.width = `60px`;
    document.getElementById("rectangle").style.height = `50px`;
  } 

  // Use the CSS transform property to move the rectangle to the new position
  
  
  document.getElementById("rectangle").style.transform = `translate(${x}px, ${y}px)`;
}

// Use setInterval to call the update function at regular intervals
setInterval(update, 10);

// Listen for key presses and reverse the direction of the rectangle if the spacebar is pressed
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      dx *= -1;
      dy *= -1;
    }
    
  });
  
