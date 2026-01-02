const { threadCpuUsage } = require("process");

exports.HomePage = 
class HomePage {

    constructor(page){
        this.page = page;
        this.productList = "//div[@id='tbodyid']/div/div/div/h4/a";
        this.addToCartButton = "//a[normalize-space()='Add to cart']";
        this.cartButton = "#cartur";
    }   

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        await this.page.waitForTimeout(3000);

        for(const product of productList){
            const nameOfProduct = await product.textContent();

            if(nameOfProduct === productName){
                console.log("Product Found:", nameOfProduct);
                product.click()

                await this.page.locator(this.addToCartButton).click(); // click Add to cart

                await this.page.waitForTimeout(2000);
                this.page.once('dialog', dialog => dialog.accept()); // handle alert
                
                break;
            }
        }
    }

    async gotoCart() {
        await this.page.locator(this.cartButton).click();
        await this.page.waitForTimeout(2000);
    }
}
