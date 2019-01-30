var x = [0,1];


function fibonacci (n){
    for(var i = 0; i < n; i++){
        var y = (x.length) - 1;
        var z = (x.length) - 2;
        x.push([z] + [y])
    }
}

console.log(fibonacci(5), x)