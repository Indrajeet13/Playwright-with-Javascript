
// exports.CartPage = 
// class CartPage {

//     constructor(page){
//         this.page = page;
//         this.noOfProducts = "//tbody[@id='tbodyid']//tr//td[2]";
//     }

//     async checkProductInCart(productName){
//         const productInCart = await this.page.$$(this.noOfProducts);
        
//         for(let product of productInCart){
            
//                 if(productName === await product.textContent()){
//                     await this.page.waitForTimeout(2000);
//                     console.log("ProductName in Cart:", await product.textContent());
//                     return true;
//                     break;
//                 }

//         }
//     }

// }

exports.CartPage = 
class CartPage {

    constructor(page){
        this.page = page;
        this.noOfProducts = "//tbody[@id='tbodyid']//tr/td[2]";
    }

    async checkProductInCart(productName){
        const products = await this.page.$$(this.noOfProducts);

        for (let product of products) {  // FIXED missing let
            let name = (await product.textContent()).trim();
            console.log("Cart Item:", name);
            if(name === productName){
                return true;
            }
        }
        return false;
    }
}
