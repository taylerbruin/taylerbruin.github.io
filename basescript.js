function createheader() {
    
    return `
    <meta charset="uft-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css">
        <title>Tayler Bruin</title>
        <div id="heading" class="heading">
            <button class="home-button material-icons" onclick="location.href='index.html'" type="button">
                home</button>
            <nav class = "navigation_bar">
                <div class="dropdown">          
                    <button class="dropdownbutton" onclick="toggle_dropdown('dropdownmenu_creative' , 'displayarrow_creative')">Creative Projects <i id="displayarrow_creative"class="arrow down"></i> </button>
                    <div id="dropdownmenu_creative" class="dropdown-content">
                        <a href="comms_taki.html">Taki</a>
                        <a href="byupromo.html">byupromo</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropdownbutton" onclick="toggle_dropdown('dropdownmenu_technical' , 'displayarrow_technical')">Technical Projects <i id="displayarrow_technical"class="arrow down"></i> </button>
                    <div id="dropdownmenu_technical" class="dropdown-content">
                        <a href="githubprojects.html">githubprojects</a>
                    </div>
                </div>
            </nav>
        </div>
`
}
this.mainheader();

function mainheader() {
    //creates base header for all pages.
    document.getElementById("top").innerHTML += createheader();


}

function toggle_dropdown(menu_id , arrow_id){
    console.log(menu_id);
    if(document.getElementById(menu_id).classList.contains("dropdown-content")){
        document.getElementById(menu_id).className = "dropdown-content-visible";
        document.getElementById(arrow_id).className = "arrow up";

    }
    else if (document.getElementById(menu_id).classList.contains("dropdown-content-visible")){
        document.getElementById(menu_id).className = "dropdown-content";
        document.getElementById(arrow_id).className = "arrow down";
    }
}
