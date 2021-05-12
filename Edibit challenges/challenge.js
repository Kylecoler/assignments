//find the perimeter

function findPerimeter(height, width) {
	return (height*2)+(width*2)
	// Test.assertEquals(findPerimeter(6, 7), 26)
	// Test.assertEquals(findPerimeter(20, 10), 60)
	// Test.assertEquals(findPerimeter(2, 9), 22)
}

//check if an integer is divisible by five

function divisibleByFive(n) {
	if(n%5 == 0){
		return true
	} else {
		return false
	}
	// Test.assertEquals(divisibleByFive(7), false)
	// Test.assertEquals(divisibleByFive(5), true)
	// Test.assertEquals(divisibleByFive(15), true)
	// Test.assertEquals(divisibleByFive(33), false)
	// Test.assertEquals(divisibleByFive(-18), false)
	// Test.assertEquals(divisibleByFive(999), false)
	// Test.assertEquals(divisibleByFive(2), false)
}


//profitable gamble

function profitableGamble(prob, prize, pay) {
	if (prob*prize > pay){
		return true
	} else {
		return false
	}
	// Test.assertEquals(profitableGamble(0.2, 50, 9), true)
	// Test.assertEquals(profitableGamble(0.9, 1, 2), false)
	// Test.assertEquals(profitableGamble(0.9, 3, 2), true)
	// Test.assertEquals(profitableGamble(0.33, 10, 3.30), true)
	// Test.assertEquals(profitableGamble(0, 1000, 0.01), false)
	// Test.assertEquals(profitableGamble(0.1, 1000, 7), true)
	// Test.assertEquals(profitableGamble(0, 0, 0), false)
}


// Convert a Number to Base 2

function binary(decimal) {
	return decimal.toString(2)
	// Test.assertEquals(binary(100), "1100100")
	// Test.assertEquals(binary(1), "1")
	// Test.assertEquals(binary(0), "0")
	// Test.assertEquals(binary(69), "1000101")
	// Test.assertEquals(binary(1023), "1111111111")
	// Test.assertEquals(binary(511), "111111111")
	// Test.assertEquals(binary(666), "1010011010")
	// Test.assertEquals(binary(123), "1111011")
}


//Add up the Numbers from a Single Number

function addUp(num) {
	return (num*(num +1))/2
	// Test.assertEquals(addUp(4), 10)
	// Test.assertEquals(addUp(13), 91)
	// Test.assertEquals(addUp(600), 180300)
	// Test.assertEquals(addUp(392), 77028)
	// Test.assertEquals(addUp(53), 1431)
	// Test.assertEquals(addUp(897), 402753)
	// Test.assertEquals(addUp(23), 276)
	// Test.assertEquals(addUp(1000), 500500)
	// Test.assertEquals(addUp(738), 272691)
	// Test.assertEquals(addUp(100), 5050)
	// Test.assertEquals(addUp(925), 428275)
	// Test.assertEquals(addUp(1), 1)
	// Test.assertEquals(addUp(999), 499500)
	// Test.assertEquals(addUp(175), 15400)
	// Test.assertEquals(addUp(111), 6216)
}


//Are the Numbers Equal?

function isSameNum(num1, num2) {
	if(num1 === num2){
		return true
	}
	return false
	// Test.assertEquals(isSameNum(4, 8), false)
	// Test.assertEquals(isSameNum(2, 2), true)
	// Test.assertEquals(isSameNum(0, 6), false)
	// Test.assertEquals(isSameNum(2, "2"), false)
}


//Convert Hours and Minutes into Seconds

function convert(hours, minutes) {
	return (hours*3600)+(minutes*60)
	// Test.assertEquals(convert(1, 0), 3600)
	// Test.assertEquals(convert(1, 3), 3780)
	// Test.assertEquals(convert(0, 30), 1800)
}


//Less Than 100?

function lessThan100(a, b) {
	if((a+b)<100){
		return true
	} return false
	// Test.assertEquals(lessThan100(5, 57), true)
	// Test.assertEquals(lessThan100(77, 30), false)
	// Test.assertEquals(lessThan100(0, 59), true)
	// Test.assertEquals(lessThan100(78, 35), false)
	// Test.assertEquals(lessThan100(63, 11), true)
	// Test.assertEquals(lessThan100(37, 99), false)
	// Test.assertEquals(lessThan100(52, 11), true)
	// Test.assertEquals(lessThan100(82, 95), false)
	// Test.assertEquals(lessThan100(17, 44), true)
	// Test.assertEquals(lessThan100(74, 53), false)
	// Test.assertEquals(lessThan100(3, 77), true)
	// Test.assertEquals(lessThan100(25, 80), false)
	// Test.assertEquals(lessThan100(59, 28), true)
	// Test.assertEquals(lessThan100(69, 87), false)
	// Test.assertEquals(lessThan100(10, 45), true)
	// Test.assertEquals(lessThan100(43, 58), false)
	// Test.assertEquals(lessThan100(50, 44), true)
	// Test.assertEquals(lessThan100(74, 89), false)
	// Test.assertEquals(lessThan100(3, 27), true)
	// Test.assertEquals(lessThan100(21, 79), false)
}


//ES6: Destructuring Arrays IV

// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
// Use the Rest element
const str = '[head, ...tail] = [1, 2, 3, 4]'

eval(str)

const validString = (str) => {
  return /\.\.\./.test(str) ? "rest" : false
}

const validArray = (str) => {
	return /\[\s*1\s*\,\s*2\s*\,\s*3\s*\,\s*4\s*\]$/.test(str) ? "array" : false
}

Test.assertEquals(validString(str), "rest", "You need to use the Rest element.")
Test.assertEquals(validArray(str), "array", "[1, 2, 3, 4] should remain untouched.")
Test.assertEquals(head, 1, "head should equal to 1")
Test.assertSimilar(tail, [2,3,4], "tail should equal to [2, 3, 4]" )



function returnEven(arr){
	const arra = []
	for(i=0;i<arr.length;i++){
		if(arr[i]%=0){
			arra.push(arr[i])
		}
	}  
	return (arra)
}
console.log(returnEven([1,2,3,4,5,6,7,8,9,10])) // returns [2,4,6,8,10]