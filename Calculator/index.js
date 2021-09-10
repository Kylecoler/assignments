let sValue = ''

upDateScreen = function(value){
    sValue = sValue.concat(value)
    document.getElementById("screen").innerHTML = sValue
}
solve = function(){
    computeFun = function(num){
        if(num == Number(num)){return Number(num)}
        else {return num}
    }
    let arr1 = sValue.split('')
    console.log(arr1)
    arr1 = arr1.map(computeFun)
    console.log(arr1)
    sValue = ''
    document.getElementById("screen").innerHTML = sValue
}