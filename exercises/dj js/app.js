var box = document.getElementById("redbox")

box.addEventListener("mouseenter" ,function(){
    box.style.backgroundColor = "blue"
})
event.keycode

box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})

box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})

box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
})

window.addEventListener("wheel", function(){
    box.style.backgroundColor = "orange"
})