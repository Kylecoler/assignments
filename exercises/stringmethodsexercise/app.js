// function a1 (a21){
//     a3 = a21.toUpperCase()
//     a4 = a21.toLowerCase()
//     return(a3+a4)
// }
// console.log(("kjgLKGougLkljg"))

// function a11 (a22){
//     return(Math.floor(a22.length/2))
// }
// console.log(a11("lhfdv;kasdhfv"))

// function a12(a23){
//     return(a23.slice(0,a11(a23)))
// }
// console.log(a12("saoidvbapis"))

// function a13(a24){
//     return((a24.slice(0,a11(a24))).toUpperCase()+(a24.slice(a11(a24))).toLowerCase())
// }
// console.log(a13("tyuioptyuiop"))

//fibonacci

// var y = 20
// var z = [0,1]
// var a = 0
// var b = 1

// for(i=0;i<y;i++){
//     var c = a + b;
//     var a = b
//     var b = c
//     z.push(c)
// }
// function getsum(total, num){
//     return total + num;
// }
 //quadratic equation



// first char compare to all char
// when equal up var
var highnum = 0
function highChar(str){
    for(var i = 0; i < str.length; i++){
        var a = 0
        for(var u = i; u < str.length; u++){
            if(str[i] === str[u]){
                a = a + 1
                console.log(a)
            }
            if(highnum < a){
                highnum = a
                console.log(str[i])
            }
        
        }
    }
}
console.log(highChar("abbcccdddd"))