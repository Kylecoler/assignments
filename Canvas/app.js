const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
const p1 = {
    startX:10,
    startY:10,
    width:15,
    heigth:80,
    color:"#000000"
}
const p2 = {
    startX:695,
    startY:10,
    width:15,
    heigth:80,
    color:"#000000",
    ai:true
}
const ball = {
    midX:360,
    midY:180,
    radius:20,
    angleStart:0,
    angleEnd:2*Math.PI,
    color:'#000000'
}
let score = 0
const newRect = function(startX,startY,width,heigth,filled,color){
    ctx.beginPath()
    if(color){ctx.fillStyle = color}else{ctx.fillStyle = "#ff0000"} 
    if(filled){
        ctx.fillRect(startX,startY,width,heigth)
    } else {
        ctx.strokeRect(startX,startY,width,heigth)
    }
    ctx.closePath()
}
const newCrcl = function(centerX,centerY,radius,startA,endA,color){
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(centerX,centerY,radius,startA,endA)
    ctx.stroke()
    ctx.closePath()
}
const render = function(){
    ctx.clearRect(0,0,720,360)
    newRect(p1.startX,p1.startY,p1.width,p1.heigth,false,p1.color)
    newRect(p2.startX,p2.startY,p2.width,p2.heigth,false,p2.color)
    newCrcl(360,180,20,0,2*Math.PI,"#000000")
}

const move = function(dirtion){
    if(dirtion){
        p1.startY -= 10
    } else {
        p1.startY += 10
    }
    render()
}

const bllMve = function(){
    if(false){}
}