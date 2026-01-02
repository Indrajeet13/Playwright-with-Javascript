exports.CartPage = 
class CartPage {

    constructor(page){
        this.page = page;
        this.noOfProducts = "//tbody[@id='tbodyid']//tr/td[2]";
    }

    async checkProductInCart(productName){
        const products = await this.page.$$(this.noOfProducts);

        for (let product of products) {  // FIXED missing let
            let name = (await product.textContent());
            console.log("Cart Item:", name);
            if(name === productName){
                return true;
            }
        }
        return false;
    }
}
