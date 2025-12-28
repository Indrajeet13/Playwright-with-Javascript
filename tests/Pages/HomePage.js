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

        for(const product of productList){
            const name = await product.textContent();

            if(name.trim() === productName){
                console.log("Product Found:", name);
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
