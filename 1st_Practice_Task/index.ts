// Q1: Calculate your age based on the current year and your birth year.
let brithYear: number=2000;
let yearNow: number=2024;
let age :number = yearNow - brithYear;
console.log(`Q1: Finding age based on the current year.\nI'm ${age} years old.`)

// Q2:Write a program that calculates the area of a rectangle using length and width variables
let _length: number=20;
let _width: number=24;
let _areaOfTriangle: number = _length * _width;
console.log(`\nQ2: Area of rectangle using length and width.\nLength = ${_length}, Width = ${_width}\nArea of Triangle = ${_areaOfTriangle}`)

// Q3: Write a program that calculates the area of a circle.
const _pie: number=3.14;
let _radius: number=7;
let _areaOfCircle: number = _pie * (_radius**2);
console.log(`\nQ3: Area of the circle.\nPie = ${_pie}, Radius = ${_radius}\nArea of Circle = ${_areaOfCircle}`)

// Q4: Write a program that calculates the area of the cube
let _s: number=7;
let _areaOfCube: number = 6*(_s**2);
console.log(`\nQ4: Area of the cube.\nS = ${_s}\nArea of Cube = 6 x ${_s} = ${_areaOfCube}`)

// Q5: Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
let temperatureInFahrenheit:number = 68;
const temperatureInCelsius = (temperatureInFahrenheit - 32) * 5 / 9;
console.log(`\nQ5: Temperature from Fahrenheit to Celsius and Vice versa \n${temperatureInFahrenheit} degrees Fahrenheit is equal to ${temperatureInCelsius.toFixed(2)} degrees Celsius.\n${temperatureInCelsius} degrees Celsius is equal to ${((temperatureInCelsius * 9 / 5) + 32).toFixed(2)} degrees Fahrenheit.`);

// Q6: Convert a given number of seconds into minutes and seconds using variables.
const _seconds: number =2800;
console.log(`\nQ6: Converting Sec into Min/Sec \n${_seconds} Seconds, Equal to ${(_seconds/60).toFixed(0)} Minutes, and ${_seconds%60} Seconds.`)

// Q7: Write a program that calculates the percentage.
const totalMarks: number =1200;
let obtainedMarks: number = 1020;
let _percentage: number = (obtainedMarks/totalMarks)*100;
console.log(`\nQ7: Calculating the percentage \nObtained Marks = ${obtainedMarks}, Total Marks = ${totalMarks}\nPercentage = ${_percentage}`)

//increment operator
// Q1:
let a: number = 2;
let b = ++a * 2; 
console.log(`\nOperators \nQ1: \nb = (1+2) x 2 \n=> 3 x 2 \n=> ${b} `);
 
// Q2
let c = 5;
let d = c-- + 2;
console.log(`\nQ2: \nd = 5+2 \n=> ${d}`)

//  - Q3 
let e = 3;
let f = ++e + e++ + ++e;
console.log(`\nQ3: (3+1) + (4) + ((4+1)+1) \n=> 4 + 4 + 6 \n=> ${f}`)

//  Q4 
let g = 2;
let h = ++g * g++ * --g;
console.log(`\nQ4: h = (1+2) x 3 x (4-1)\n=> 3 x 3 x 3\n=> ${h}`)

//  Q5
let i = 3;
let j = 5;
let result = ++i + j-- - i++ + --j;
console.log(`\nQ5: (3+1) + 5 - 4 + (4-1) \n=> 4 + 5 - 4 + 3 \n=> ${result}`)

// Q6
let m = 2;
let n = 4;
let p = m++ + ++n - --m + n--;
console.log(`\nQ6: 2 + (1+4) - (1-3) + 5 \n=> 2 + 5 - 2 + 5 \n=> ${p}`)

//  - Q7
let q = 5;
let r = 3;
let s = 2;
let t = 7;
let results = ++q * (r-- + s) / --t;
console.log(`\nQ7: (5+1) x (3+2) / (7-1) \n=> 6 x 5 / 6 \n=> 6 x 0.834 \n=> ${results}`)

//  - Q8
let u = 2;
let v = 3;
let w = 4;
let x = u++ * (--v + u) / (w-- - v);

console.log(`\nQ8: 2 x ((3-1) + 3) / (4 - 2) \n=> 2 x (2+3) / 2 \n=> 2 x 5 / 2 \n=> 2 x 2.5 \n=> ${x}.`)