// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

export default function convertTemperatureToFahrenheit(...valuess: number[]){
    console.log("\nTask 7 - Convert each temperature to Fahrenheit\n")
    let fahrenheit: number[] = [];
    let celsius: number[] = valuess;
    console.log("celsius value: ", celsius);
    let i: number = 0;
    while(i < celsius.length){
        fahrenheit[i] = (celsius[i] * 9/5) + 32;
        i++;
    }
    console.log("fahrenheit value after conversion", fahrenheit)
}