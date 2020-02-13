//find the perimeter

function findPerimeter(height, width) {
	return (height*2)+(width*2)
}

Test.assertEquals(findPerimeter(6, 7), 26)
Test.assertEquals(findPerimeter(20, 10), 60)
Test.assertEquals(findPerimeter(2, 9), 22)

