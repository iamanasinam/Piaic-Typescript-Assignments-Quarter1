// Implement a simple shopping cart program using an array. 
// Create functions to add items, remove items, and update quantities using the splice method. 
// Print the cart's contents after each operation
console.log(`\nTask 2 - Crud Operations in array\n`)
type CartItem = {
    name: string;
    quantity: number;
};

export const shoppingCart: CartItem[] = [
    { name: 'apples', quantity: 10 },
    { name: 'bananas', quantity: 20 },
    { name: 'oranges', quantity: 30 },
    { name: 'pears', quantity: 40 },
    { name: 'grapes', quantity: 50 },
];

console.log("initial Cart", shoppingCart)

export const addItem = (cart: CartItem[], item: CartItem): CartItem[] => {
    cart.push(item);
    console.log(`\n01. Item Name: ${item.name} & Quantity : ${item.quantity}. \nAdded at last in list \n`,'\nCart after adding item:', cart);
    return cart;
};

export const updateItem = (cart: CartItem[], index: number, newQuantity: number): CartItem[] => {
    let position = index + 1;
    console.log("\n02. Before updating existig item is: ", cart[index], `at position ${position}\nNew quantity for `,cart[index].name,`going to be ${newQuantity}`)
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1, { ...cart[index], quantity: newQuantity });
    }
    console.log('\nCart after updating item quantity:', cart);
    return cart;
};

export const removeItem = (cart: CartItem[], index: number): CartItem[] => {
    let position = index + 1;
    console.log("\n03. Item going to be delete: ", cart[index], " at position ", position, "\n")
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
    }
    console.log('Cart after removing item:', cart);
    return cart;
};
