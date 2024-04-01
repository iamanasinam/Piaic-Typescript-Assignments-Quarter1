//conditional operator

let unitPrice: number =10;
let unitRun: number = 110;
let simplePrice: number =unitRun*unitPrice;

if ( unitRun <= 100 ) {
    console.log( `Tax per 100 units 5% of total price and the value is ${((simplePrice)+(simplePrice*.05))} price without tax is ${simplePrice} and price of the tax is ${simplePrice*.05} ` );
} else if ( unitRun <= 200) {
    console.log( `Tax per 200 units 10% of total price and the value is ${((simplePrice)+(simplePrice*.10))} price without tax is ${simplePrice} and price of the tax is ${simplePrice*.10} ` );
} else if ( unitRun <= 300) {
    console.log( `Tax per 300 units 20% of total price and the value is ${((simplePrice)+(simplePrice*.20))} price without tax is ${simplePrice} and price of the tax is ${simplePrice*.20} ` );
} else if ( unitRun <= 400) {
    console.log( `Tax per 400 units 35% of total price and the value is ${((simplePrice)+(simplePrice*.35))} price without tax is ${simplePrice} and price of the tax is ${simplePrice*.35} ` );
} else if ( unitRun <= 500) {
    console.log( `Tax per 500 units 50% of total price and the value is ${((simplePrice)+(simplePrice*.50))} price without tax is ${simplePrice} and price of the tax is ${simplePrice*.50} ` );
} else{
    console.log( `Tax per 500+ units 100% of total price and the value is ${((simplePrice)+(simplePrice*.100))} price without tax is ${simplePrice} and price of the tax is ${simplePrice*.100} ` );
}
