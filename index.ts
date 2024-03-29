// Q1: Calculate your age based on the current year and your birth year.
let brithYear: number=2000;
let yearNow: number=2024;
console.log(`Q1: Finding age based on the current year.\nI'm ${yearNow - brithYear} years old.`)

// Q2:Write a program that calculates the area of a rectangle using length and width variables
let _length: number=20;
let _width: number=24;
console.log(`\nQ2: Area of rectangle using length and width.\nLength = ${_length}, Width = ${_width}\nArea of Triangle = ${_length * _width}`)

// Q3: Write a program that calculates the area of a circle.
const _pie: number=3.14;
let _radius: number=7;
console.log(`\nQ3: Area of the circle.\nPie = ${_pie}, Radius = ${_radius}\nArea of Circle = ${_pie * (_radius**2)}`)

// Q4: Write a program that calculates the area of the cube
let _s: number=7;
console.log(`\nQ4: Area of the cube.\nS = ${_s}\nArea of Cube = 6 x ${_s} = ${6*(_s**2)}`)

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
console.log(`\nQ7: Calculating the percentage \nObtained Marks = ${obtainedMarks}, Total Marks = ${totalMarks}\nPercentage = ${(obtainedMarks/totalMarks)*100}`)
