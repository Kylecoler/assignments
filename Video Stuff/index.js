const canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d")

// canvas color
ctx.fillStyle = "#FF6CFF"
ctx.fillRect(0, 0, 350, 200)

// line
ctx.moveTo(1,1)
ctx.lineTo(250, 200)
ctx.stroke()

// circle
ctx.beginPath()
ctx.arc(95, 50, 40, 0, 2 * Math.PI)
ctx.stroke()

// create gradient
let grd = ctx.createLinearGradient(0, 0, 200, 0)
grd.addColorStop(0, 'red')
grd.addColorStop(.75, 'white')
grd.addColorStop(1, 'blue')

// fiil with gradient
// ctx.fillStyle = grd
// ctx.fillRect(0, 0, 250, 200)

// let rect = document.querySelector('canvas').getboundingClientRect()
// function cursorPosition(event){
//     let x = event.clientX - rect.left;
//     let y = event.clientY - rect.top;
//     console.log(x, y)
// }