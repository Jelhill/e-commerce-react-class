export const products = []

for (let i = 0; i < 100; i++) {
    products.push({
        id: i + 1,
        productName: `Product ${i}`,
        price: (Math.random() * 100000).toFixed(2),
    })
}

