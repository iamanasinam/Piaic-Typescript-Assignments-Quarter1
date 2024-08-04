export default { 
    areaOfTriangle (_length :number, _width :number){
    let _areaOfTriangle: number = _length * _width;
    console.log(`\nQ2: Area of rectangle using length and width.\nLength = ${_length}, Width = ${_width}\nArea of Triangle = ${_areaOfTriangle}`)},
    
     areaOfCircle (_pie: number, _radius: number){
    let _areaOfCircle: number = _pie * (_radius**2);
    console.log(`\nQ3: Area of the circle.\nPie = ${_pie}, Radius = ${_radius}\nArea of Circle = ${_areaOfCircle}`)},

    areaOfCube (_s:number){
    let _areaOfCube: number = 6*(_s**2);
    console.log(`\nQ4: Area of the cube.\nS = ${_s}\nArea of Cube = 6 x ${_s} = ${_areaOfCube}`)},

    temperatureConversion (temperatureInFahrenheit:number) {
    const temperatureInCelsius = (temperatureInFahrenheit - 32) * 5 / 9;
    console.log(`\nQ5: Temperature from Fahrenheit to Celsius and Vice versa \n${temperatureInFahrenheit} degrees Fahrenheit is equal to ${temperatureInCelsius.toFixed(2)} degrees Celsius.\n${temperatureInCelsius} degrees Celsius is equal to ${((temperatureInCelsius * 9 / 5) + 32).toFixed(2)} degrees Fahrenheit.`);},
    
    sortingSeconds (_seconds: number) {
    console.log(`\nQ6: Converting Sec into Min/Sec \n${_seconds} Seconds, Equal to ${(_seconds/60).toFixed(0)} Minutes, and ${_seconds%60} Seconds.`)},

   
    calculatingMarksPercentage (totalMarks: number,obtainedMarks: number ){
    let _percentage: number = (obtainedMarks/totalMarks)*100;
    console.log(`\nQ7: Calculating the percentage \nObtained Marks = ${obtainedMarks}, Total Marks = ${totalMarks}\nPercentage = ${_percentage}`)}
}