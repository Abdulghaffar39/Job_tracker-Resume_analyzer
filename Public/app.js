
function dark_mode() {

    var element = document.body;
    element.classList.toggle("dark-mode")
    
    let dark = document.getElementById("dark_mode")
    let light = document.getElementById("light_mode")

    dark.style.display = "none"
    light.style.display = "flex"
}
function light_mode() {

    var element = document.body;
    element.classList.toggle("dark-mode")

    let dark = document.getElementById("dark_mode")
    let light = document.getElementById("light_mode")

    light.style.display = "none"
    dark.style.display = "flex"
}


