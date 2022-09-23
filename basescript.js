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
        <div class="dropdown">
        <button class="dropbtn">Creative Projects 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="comms_taki.html">Taki</a>
            <a href="byupromo.html">BYU Promo</a>
          </div>
        </div>
      <div class="dropdown">
        <button class="dropbtn">Technical Projects 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="githubprojects.html">githubprojects</a>
        </div>
      </div> 
      <a href="resume.html">Resume</a>
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
