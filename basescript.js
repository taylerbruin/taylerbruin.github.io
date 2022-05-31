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
                <button class="dropdownbutton">Creative Projects <i class="arrow down"></i> </button>
                <div class="dropdown-content">
                    <a href="comms_taki.html">Taki</a>
                    <a href="byupromo.html">byupromo</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropdownbutton">Technical Projects <i class="arrow down"></i> </button>
                <div class="dropdown-content">
                    <a href="githubprojects.html">githubprojects</a>
                </div>
            </div>
        </nav>
    </div>
`
}
this.mainheader();

function mainheader() {
    console.log(createheader());
    //creates base header for all pages.
    document.getElementById("top").innerHTML += createheader();


}