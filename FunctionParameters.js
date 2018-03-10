function areaOfTriangle(height,base){
	var area = 0.5 * base * height;
		return area;
}
var result = areaOfTriangle(5,8)
var answer = areaOfTriangle(20,80)
var rebuilt = areaOfTriangle(50,80)

print(result)
print(answer)
print(rebuilt)	

function print(answer){
	console.log("Area of Triangle:"+ answer)
}

