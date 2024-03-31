//conditional operator

let pricePerUnit: number =108;

if ( pricePerUnit <= 100 ) {
    console.log( `Tax per 100 units 5% of total price and the value is ${pricePerUnit+(pricePerUnit*.05)}` );
} else if ( pricePerUnit <= 200) {
    console.log( `Tax per 200 units 10% of total price and the value is ${pricePerUnit+(pricePerUnit*.10)}` );
} else if ( pricePerUnit <= 300) {
    console.log( `Tax per 300 units 20% of total price and the value is ${pricePerUnit+(pricePerUnit*.20)}` );
} else if ( pricePerUnit <= 400) {
    console.log( `Tax per 400 units 35% of total price and the value is ${pricePerUnit+(pricePerUnit*.35)}` );
} else if ( pricePerUnit <= 500) {
    console.log( `Tax per 500 units 50% of total price and the value is ${pricePerUnit+(pricePerUnit*.50)}` );
} else{
    console.log( `Tax per 500+ units 100% of total price and the value is ${pricePerUnit+(pricePerUnit*.100)}` );
}
