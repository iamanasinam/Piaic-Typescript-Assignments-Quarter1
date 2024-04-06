//conditional operator

let unitPrice: number =10;
let unitRun: number = 110;
let simplePrice: number =unitRun*unitPrice;

if ( unitRun <= 100 ) {
    console.log( `Price for units: ${simplePrice}, and the tax is ${simplePrice*.05}. \nTax per 100 units 5% of total price and the value is ${((simplePrice)+(simplePrice*.05))}` );
} else if ( unitRun <= 200) {
    console.log( `Price for units: ${simplePrice}, and the tax is ${simplePrice*.10}. \nTax per 200 units 10% of total price and the value is ${((simplePrice)+(simplePrice*.10))}` );
} else if ( unitRun <= 300) {
    console.log( `Price for units: ${simplePrice}, and the tax is ${simplePrice*.20}. \nTax per 300 units 20% of total price and the value is ${((simplePrice)+(simplePrice*.20))}` );
} else if ( unitRun <= 400) {
    console.log( `Price for units: ${simplePrice}, and the tax is ${simplePrice*.35}. \nTax per 400 units 35% of total price and the value is ${((simplePrice)+(simplePrice*.35))}` );
} else if ( unitRun <= 500) {
    console.log( `Price for units: ${simplePrice}, and the tax is ${simplePrice*.50}. \nTax per 500 units 50% of total price and the value is ${((simplePrice)+(simplePrice*.50))}` );
} else{
    console.log( `Price for units: ${simplePrice}, and the tax is ${simplePrice*.100}. \nTax per 500+ units 100% of total price and the value is ${((simplePrice)+(simplePrice*.100))} ` );
}
