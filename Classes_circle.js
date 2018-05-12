class Circle{
 	constructor(radius){
 	this.radius= radius;
 	}
 calcArea(){									
 	return 3.142 * this.radius * this.radius;				
 	}												
 }		
 const circle = new Circle(10)		
 console.log(circle.calcArea());

 		// FIND CIRCUMFERENCE

class Circle{
 	constructor(radius){
 	this.radius= radius;
 	}
 calcCircumference(){									
 	return 2 * 3.142 * this.radius;				
 	}												
 }		
 const circle = new Circle(10)		
 console.log(circle.calcCircumference());

				// FIND DIAMETER

class Circle{
 	constructor(radius){
 	this.radius= radius;
 	}
 calcDiameter(){									
 	return 2 * this.radius;				
 	}												
 }		
 const circle = new Circle(10)		
 console.log(circle.calcDiameter());

			// FIND RADIUS

class Circle{
 	constructor(diameter){
 	this.diameter= diameter;
 	}
 calcRadius(){									
 	return  2 / this.diameter;				
 	}												
 }		
 const circle = new Circle(10)		
 console.log(circle.calcRadius());