import insertingValueBySplicing from './Questions/insertingValueBySplicing'
import { addItem, updateItem, removeItem, shoppingCart } from './Questions/functionsCrudSplice';
import whileFunctions from './Questions/whileFunction';
import factorialUsingWhile from './Questions/factorialUsingWhile';
import remNegativeNumber from './Questions/remNegativeArray';
import funOfsum from './Questions/sumOfAllParams';
import convertTemperatureToFahrenheit from './Questions/tempWhile';
import removeOddNumbers from './Questions/remOddFromArray';

// 1st Task
insertingValueBySplicing([1, 2, 3, 4, 5], 2, 100)

// // 2nd Task 
addItem(shoppingCart, { name: 'peaches', quantity: 60 });
updateItem(shoppingCart, 2, 9);
removeItem(shoppingCart, 3);

// 3rd Task
whileFunctions();

// 4th Task
factorialUsingWhile();

// 5th Task 
remNegativeNumber(7,6, -4, -7, 40)

// 6th Task
funOfsum(7,6,7,1, -4, -7)

// 7th Task
convertTemperatureToFahrenheit(7,6,7,1, -4, -7)

// 8th task 
removeOddNumbers(2,3,6,7,8,9)
