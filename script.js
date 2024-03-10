var name = prompt("Please enter your name");
var age = prompt('What is your age?');
var percentage = prompt('What is your percentage?');
var StudentofACI = prompt('Are you a student of ACI?', 'Yes/No');
var discount = 0.6
var fees = 189000

console.log('My Student Information');
console.log('My name is',name);
console.log('My age is',age);
console.log('My percentage is',percentage);
console.log('I am astudent of ACI',StudentofACI)


var circle_radius = prompt("Enter the radius of the circle");
var rectangle_height = prompt ("Enter the Height of the Rectangle");
var rectangle_width = prompt ("Enter the Width of the Rectangle");
var triangle_height = prompt ("Enter the height of the Triangle");
var triangle_base = prompt ("Enter the Base of the Triangle");
var celcius = prompt("Enter the Temperature in Fahrenheit");
var fahrenheit = prompt("Enter the Temperature in Celcius");


console.log('Area of circle =', 2*3.14*(circle_radius**2));
console.log('Area of rectangle =', rectangle_height*rectangle_width);
console.log('Area of triangle =', (triangle_base*triangle_height)/2);
console.log('Temperature',celcius+'C =', (1.8*celcius) + 32+'F');
console.log('Temperature',fahrenheit+'F =', (fahrenheit-32)*5/9+ 'C');


Message = `
The area of circle = ${2*3.14*(circle_radius**2)}
The area of Rectangle = ${rectangle_height*rectangle_width}
The area of Triangle = ${(triangle_base*triangle_height)/2}
The value of ${celcius}C in Fahrenheit = ${(1.8*celcius) + 32}F
The value of ${fahrenheit}F in Celcius = ${(fahrenheit-32)*5/9}C
`
console.log(Message);