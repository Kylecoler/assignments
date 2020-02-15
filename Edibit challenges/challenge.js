//find the perimeter

function findPerimeter(height, width) {
	return (height*2)+(width*2)
}

Test.assertEquals(findPerimeter(6, 7), 26)
Test.assertEquals(findPerimeter(20, 10), 60)
Test.assertEquals(findPerimeter(2, 9), 22)

//check if an integer is divisible by five

function divisibleByFive(n) {
	if(n%5 == 0){
		return true
	} else {
		return false
	}
}

Test.assertEquals(divisibleByFive(7), false)
Test.assertEquals(divisibleByFive(5), true)
Test.assertEquals(divisibleByFive(15), true)
Test.assertEquals(divisibleByFive(33), false)
Test.assertEquals(divisibleByFive(-18), false)
Test.assertEquals(divisibleByFive(999), false)
Test.assertEquals(divisibleByFive(2), false)

//profitable gamble

function profitableGamble(prob, prize, pay) {
	if (prob*prize > pay){
		return true
	} else {
		return false
	}
}

Test.assertEquals(profitableGamble(0.2, 50, 9), true)
Test.assertEquals(profitableGamble(0.9, 1, 2), false)
Test.assertEquals(profitableGamble(0.9, 3, 2), true)
Test.assertEquals(profitableGamble(0.33, 10, 3.30), true)
Test.assertEquals(profitableGamble(0, 1000, 0.01), false)
Test.assertEquals(profitableGamble(0.1, 1000, 7), true)
Test.assertEquals(profitableGamble(0, 0, 0), false)

// Convert a Number to Base 2

function binary(decimal) {
	return decimal.toString(2)
}

Test.assertEquals(binary(100), "1100100")
Test.assertEquals(binary(1), "1")
Test.assertEquals(binary(0), "0")
Test.assertEquals(binary(69), "1000101")
Test.assertEquals(binary(1023), "1111111111")
Test.assertEquals(binary(511), "111111111")
Test.assertEquals(binary(666), "1010011010")
Test.assertEquals(binary(123), "1111011")

//Add up the Numbers from a Single Number


function addUp(num) {
	return (num*(num +1))/2
}


Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)
Test.assertEquals(addUp(392), 77028)
Test.assertEquals(addUp(53), 1431)
Test.assertEquals(addUp(897), 402753)
Test.assertEquals(addUp(23), 276)
Test.assertEquals(addUp(1000), 500500)
Test.assertEquals(addUp(738), 272691)
Test.assertEquals(addUp(100), 5050)
Test.assertEquals(addUp(925), 428275)
Test.assertEquals(addUp(1), 1)
Test.assertEquals(addUp(999), 499500)
Test.assertEquals(addUp(175), 15400)
Test.assertEquals(addUp(111), 6216)