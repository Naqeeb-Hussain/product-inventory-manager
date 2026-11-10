const products = [
  {
    id: 1,
    name: 'MacBook Air',
    price: 1199,
    quantity: 10,
    category: 'Laptops',
  },
  {
    id: 2,
    name: 'iPhone 16',
    price: 899,
    quantity: 5,
    category: 'Smartphones',
  },
  {
    id: 3,
    name: 'AirPods Pro',
    price: 249,
    quantity: 20,
    category: 'Accessories',
  },
]

function getProductByID(id) {
  return products.find((product) => product.id === id)
}

console.log(getProductByID(2)) // Output: { id: 2, name: 'iPhone 16', price: 899, quantity: 5, category: 'Smartphones' }
console.log(getProductByID(99)) // Output: undefined
