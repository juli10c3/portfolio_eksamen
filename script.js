window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //registrer klik på menu-knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menuen er nu skjult - ændrer menuknap til burgermenu
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        //menuen er nu vist - ændrer menuknap til kryds
        document.querySelector("#menuknap").textContent = "X";
    }
}
