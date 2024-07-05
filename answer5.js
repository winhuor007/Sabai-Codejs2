const filterProducts = (products) =>
  products.filter((product) => product.quantity > 0);

// Example usage:
const products = [
  { name: "Apple", price: 1.2, quantity: 10 },
  { name: "Banana", price: 0.8, quantity: 0 },
  { name: "Cherry", price: 2.5, quantity: 5 },
  { name: "Date", price: 3.0, quantity: 0 },
];

const availableProducts = filterProducts(products);
console.log(availableProducts);
// Output: [
//     { name: 'Apple', price: 1.2, quantity: 10 },
//     { name: 'Cherry', price: 2.5, quantity: 5 }
// ]
