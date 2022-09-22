/* this returns the html header to be put at the top of every page */
function createheader() {

    return `
    <meta charset="uft-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Tayler Bruin</title>
        <div id="heading" class="heading">
        <input type=image class=home_button src="Logo_Run_2.svg" alt="Home" onclick="location.href='index.html'">
        <br>
        <nav id="nav_bar" class = "navigation_bar">
                <div id="dropdown_button" class="dropdown">          
                    <button class="dropdownbutton" onclick="toggle_dropdown('dropdownmenu_creative' , 'displayarrow_creative')">Creative Projects <i id="displayarrow_creative"class="arrow down"></i> </button>
                    <div id="dropdownmenu_creative" class="dropdown-content">
                        <a href="comms_taki.html">Taki</a>
                        <a href="byupromo.html">BYU Promo</a>
                    </div>
                </div>
                <div id="dropdown_button" class="dropdown">
                    <button class="dropdownbutton" onclick="toggle_dropdown('dropdownmenu_technical' , 'displayarrow_technical')">Technical Projects <i id="displayarrow_technical"class="arrow down"></i> </button>
                    <div id="dropdownmenu_technical" class="dropdown-content">
                        <a href="githubprojects.html">GitHub Projects</a>
                    </div>
                </div>
                <div id="dropdown_button" class="dropdown">
                <input type="button" class="dropdownbutton" onclick="location.href='resume.html'" value="Resume" />
                </div>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </nav>
`
}
this.mainheader();

function mainheader() {
    //creates base header for all pages.
    document.getElementById("top").innerHTML += createheader();


}

/*opens dropdown menu when you click on the button.
This also toggles it when you click on the button again.
Please note in the current build of the site it is a design choice
to allow both menus to be open at once since they do not overlap.
*/
function toggle_dropdown(menu_id, arrow_id) {
        if (document.getElementById(menu_id).classList.contains("dropdown-content")) {
            document.getElementById(menu_id).className = "dropdown-content-visible";
            document.getElementById(arrow_id).className = "arrow up";
        }
        else if (document.getElementById(menu_id).classList.contains("dropdown-content-visible")) {
            document.getElementById(menu_id).className = "dropdown-content";
            document.getElementById(arrow_id).className = "arrow down";
        }
}

/* Close both dropdowns From Anywhere */
function closeSubmenu(e) {
    let isClickInside = heading.contains(e.target);
    if (!isClickInside) {
        document.getElementById('dropdownmenu_technical').className = "dropdown-content";
        document.getElementById('displayarrow_technical').className = "arrow down";
        document.getElementById('dropdownmenu_creative').className = "dropdown-content";
        document.getElementById('displayarrow_creative').className = "arrow down";
    }
  }
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

  /* Event listener for closing dropdowns */
document.addEventListener("click", closeSubmenu, false);
