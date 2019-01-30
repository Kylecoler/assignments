function sum2(we, ew){
    return(we + ew)
}
console.log(sum2(5,2))


function compare(wr, wt, wy){
    var q = [wr, wt, wy];
    q.sort(function(a,b){return a-b})
    return q[q.length-1]
}
console.log(compare(7,9,3))

function even(eve){
    if (eve % 2 === 0){
        return("even")
    } else {
        return("odd")
    }
}
console.log(even(7))

function string(str){
    var a1 = str.length;
    if (a1 < 21){
        return(str + str)
    } else {
        return(str.slice(0,Math.floor(a1/2)))
    }
}
console.log(string("1,2,3,4,5,6,7,8,9,10,11"))