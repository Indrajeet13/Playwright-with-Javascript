const {test, expect} = require ("@playwright/test");

let page;

test.beforeEach(async ({browser})  => {

    page = await browser.newPage();
    await page.goto('https://demoblaze.com/');

    //Login
    await page.locator("#login2").click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click();

});

test.afterEach(async() => {
    //Logout
    await page.locator('#logout2').click();
});

test('Home Page Test', async () => {

    //Home Page Test
    await page.waitForTimeout(3000)
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);

})

test('Add Product to Cart', async () => {

    //Add Product To Cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator('.btn.btn-success.btn-lg').click();
    
    //Handle dialog
    await page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();

    })
});