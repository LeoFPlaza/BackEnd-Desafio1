/*
 */

// class Product {
//     static lastCode = 0;
//     constructor(title, description, price, thumbnail, stock) {
//         this.title = title,
//             this.description = description,
//             this.price = price,
//             this.thumbnail = thumbnail,
//             this.code = this.setIdCode(),
//             this.stock = stock
//     }
//     setIdCode() {
//         let newCode = ++Product.lastCode;
//         return newCode;
//     }
// }


// class ProductManager {
//     static products = []
//     constructor(title, description, price, thumbnail, stock) {
//         this.Product = new Product(title, description, price, thumbnail, stock),
//             this.products = this.addProduct(this.Product)
//     }



//     getProducts() {
//         return ProductManager.products;
//     }

//     addProduct(newProd) {
//         ProductManager.products = [...ProductManager.products, newProd];
//     }

//     getProductById(id) {
//         let productFound = "Not Found"
//         ProductManager.products.forEach(element => {
//             if (element.code == id) {
//                 productFound = element
//             }
//         });
//         return productFound
//     }
// }
// // console.log(ProductManager.getProducts)
// let producto1 = new ProductManager("Air Force 1", "Zapatillas Nike Azules de cuero", 121000, "thumbnail not available", 12)
// let producto2 = new ProductManager("Puma Roma", "Zapatillas Puma blancas y negras de cuero", 70000, "thumbnail not available", 22)
// let producto3 = new ProductManager("Adidas superstar", "Zapatillas Adidas Originals verdes y negras de cuero", 121000, "thumbnail not available", 34)
// // console.log(producto3.getProductById(132))

/*
 */

class ProductManager {
    static lastCode = 0;
    static products = []
    constructor() {
    }



    getProducts() {
        return ProductManager.products;
    }

    addProduct(title, description, code, price, thumbnail, stock) {
        let newProd

        if (ProductManager.products.length > 0) {
            ProductManager.products.forEach(element => {
                if (element.code == code) {
                    console.error("The product already exists")
                } else {
                    newProd = { "title": title, "description": description, "price": price, "thumbnail": thumbnail, "code": code, "id": this.setIdCode(), "stock": stock }
                    ProductManager.products = [...ProductManager.products, newProd];
                    console.log("Product added succesfully")
                }
            })
        } else {
            newProd = { "title": title, "description": description, "price": price, "thumbnail": thumbnail, "code": code, "id": this.setIdCode(), "stock": stock }
            ProductManager.products = [...ProductManager.products, newProd];
            console.log("Product added succesfully")

        }
    }

    getProductById(id) {
        let productFound = "Not Found"
        ProductManager.products.forEach(element => {
            if (element.code == id) {
                productFound = element
            }
        });
        return productFound
    }

    setIdCode() {
        let newCode = ++ProductManager.lastCode;
        return newCode;
    }
}


let productManager = new ProductManager()
console.log(productManager.getProducts())

productManager.addProduct("producto prueba", "Este es un producto prueba", "ABC123", 200, "sin imagen", 25)
// console.log(productManager.getProducts())
console.log("")

productManager.addProduct("producto prueba", "Este es un producto prueba", "ABC123", 200, "sin imagen", 25)
// console.log(productManager.getProducts())
console.log("")

productManager.addProduct("producto prueba2", "Este es un producto prueba2", "ABC1232", 200, "sin imagen", 25)
console.log(productManager.getProducts())
console.log("")
console.log("")
console.log("producto:")


console.log(productManager.getProductById("ABC32"))