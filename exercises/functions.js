function calculateTotalPrice(price, quantity) {
  return price * quantity
}

const total = calculateTotalPrice(50, 3)

console.log(total)

function getProductName(product) {
  return product.name
}

const productName = getProductName(products[0])

console.log(productName)

function getProductPrice(product) {
  return product.price
}

const price = getProductPrice(products[1])

console.log(price)
