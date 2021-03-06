let red = 126
let green = 126
let blue =126

function Background(){
    document.getElementById("body").style.background = `rgb(${red}, ${green}, ${blue})`
}
function Red(){
    red = document.getElementById("red").value
    document.getElementById("rtxt").innerHTML = `red ${red}`
    Background()
}
function Green(){
    green = document.getElementById("green").value
    document.getElementById("gtxt").innerHTML = `green ${green}`
    Background()
}
function Blue(){
    blue = document.getElementById("blue").value
    document.getElementById("btxt").innerHTML = `blue ${blue}`
    Background()
}