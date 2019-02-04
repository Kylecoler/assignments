var box = document.getElementById("redbox")

box.addEventListener("mouseenter" ,function(){
    box.style.backgroundColor = "blue"
})
window.addEventListener("keypress", function(){
    if(event.key == "b"){
        box.style.backgroundColor = "blue"
    }
})


box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})
window.addEventListener("keypress" , function(){
    if(event.key == "r"){
        box.style.backgroundColor = "red"
    }
})    


box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})
window.addEventListener("keypress", function(){
    if(event.key == "g"){
        box.style.backgroundColor = "green"
    }
})


box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
})
window.addEventListener("keypress", function(){
    if(event.key == "y"){
        box.style.backgroundColor = "yellow"
}
})


window.addEventListener("wheel", function(){
    box.style.backgroundColor = "orange"
})
window.addEventListener("keypress", function(){
    if(event.key == "o"){
        box.style.backgroundColor = "orange"
}
})
