//first function to be called
const firstTask = (number: number) => {
  console.log("Task 1\n");
  console.log(`the entered number is ${number}`);
  if (number % 2 === 0) {
    console.log(`\nEven number: ${number}`);
  } else {
    console.log(`\nOdd number: ${number}`);
  }

  if (number > 0) {
    console.log(`\nPositive number: ${number}`);
  } else if (number == 0) {
    console.log(`\nZero number: ${number}`);
  } else {
    console.log(`\nNegative number: ${number}`);
  }

  if (number % 2 === 0 && number % 3 === 0) {
    console.log(`\nDivisible by both 2 and 3: ${number}`);
  } else if (number % 2 === 0 || number % 3 === 0) {
    console.log(`\nDivisible by either 2 or 3: ${number}`);
  } else {
    console.log(`\nNot divisible by both 2 and 3: ${number}`);
  }
};

// second function
const secondTask = (age: number, nationality: string) => {
  console.log("Task 2\n");
  console.log(`Age is ${age} and Nationality is ${nationality}`);
  if (age >= 18) {
    if (nationality == "Pakistani") {
      console.log(`\nYou are eligible to vote.`);
    } else {
      console.log(`\nPlease obtain a valid ID to vote.`);
    }
  } else {
    console.log(`\nYou are In-eligible to vote.`);
  }
};

// third function
const thirdFunction = (_age: number) => {
  console.log(`\nTask 3`);
  if (_age >= 0 && _age <= 12) {
    console.log(`\nChild: ${_age}`);
  } else if (_age >= 13 && _age <= 19) {
    console.log(`\nTeenager: ${_age}`);
  } else if (_age >= 20 && _age <= 59) {
    console.log(`\nAdult: ${_age}`);
  } else if (_age >= 60) {
    console.log(`\nSenior Citizen: ${_age}`);
  } else {
    console.log(`\nInvalid Age: ${_age}`);
  }
};

// fourth function
const monthNumber = (months: number) => {
  if (months === 1) {
    return `st`;
  } else if (months === 2) {
    return `nd`;
  } else if (months === 3) {
    return `rd`;
  } else {
    return `th`;
  }
};

const fourthFunction = (month: number, year: number) => {
  let status = monthNumber(month);
  console.log(`\nTask 4\n\nGiven month: ${month}${status}, year: ${year}`);


  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    console.log(`\n31 days in ${month}${status} month`);
  } else if (month == 2) {
    if (year % 4 == 0) {
      console.log(`\n29 days in ${month}${status} month`);
    } else {
      console.log(`\n28 days in ${month}${status} month`);
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log(`\n30 days in ${month}${status} month`);
  } else {
    console.log(`\n\nInvalid Month: ${month}`);
  }
};

// fifth Task
const fifthFuntion= (brithYear: number, yearNow: number)=>{
let age :number = yearNow - brithYear;
console.log(`Q1: Finding age based on the current year.\nI'm ${age} years old.`)}

// sixth Task
const sixthTask = (_length :number, _width :number)=>{
let _areaOfTriangle: number = _length * _width;
console.log(`\nQ2: Area of rectangle using length and width.\nLength = ${_length}, Width = ${_width}\nArea of Triangle = ${_areaOfTriangle}`)}

// seventh Task
const seventhTask= (_pie: number, _radius: number)=>{
let _areaOfCircle: number = _pie * (_radius**2);
console.log(`\nQ3: Area of the circle.\nPie = ${_pie}, Radius = ${_radius}\nArea of Circle = ${_areaOfCircle}`)}

// 8th task
const eigthTask= (_s:number)=>{
let _areaOfCube: number = 6*(_s**2);
console.log(`\nQ4: Area of the cube.\nS = ${_s}\nArea of Cube = 6 x ${_s} = ${_areaOfCube}`)}

// 9th Task
const ninethTask= (temperatureInFahrenheit:number)=>{
const temperatureInCelsius = (temperatureInFahrenheit - 32) * 5 / 9;
console.log(`\nQ5: Temperature from Fahrenheit to Celsius and Vice versa \n${temperatureInFahrenheit} degrees Fahrenheit is equal to ${temperatureInCelsius.toFixed(2)} degrees Celsius.\n${temperatureInCelsius} degrees Celsius is equal to ${((temperatureInCelsius * 9 / 5) + 32).toFixed(2)} degrees Fahrenheit.`);}

// 10th Task
const tenthtask= (_seconds: number)=>{
console.log(`\nQ6: Converting Sec into Min/Sec \n${_seconds} Seconds, Equal to ${(_seconds/60).toFixed(0)} Minutes, and ${_seconds%60} Seconds.`)}

// 11th Task
const eleventhtask= (totalMarks: number,obtainedMarks: number )=>{
let _percentage: number = (obtainedMarks/totalMarks)*100;
console.log(`\nQ7: Calculating the percentage \nObtained Marks = ${obtainedMarks}, Total Marks = ${totalMarks}\nPercentage = ${_percentage}`)}



// firstTask(7)
// secondTask(9, "Pakistani");
// thirdFunction(22);
// fourthFunction(6, 2009);
// fifthFuntion(2000, 2024);
// sixthTask(26, 28);
// seventhTask(3.14, 7)
// eigthTask(7)
// ninethTask(66)
// tenthtask(2707)
// eleventhtask(1100, 980)
