const {test, expect} = require ("@playwright/test");

test('Home Page Test', async ({page}) => {

    await page.goto('https://demoblaze.com/');

    //Login
    await page.locator("#login2").click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click();

    //Home Page Test
    await page.waitForTimeout(3000)
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
    
    //Logout
    await page.locator('#logout2').click();

})

test('Add Product to Cart', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    //Login
    await page.locator("#login2").click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click();

    //Add Product To Cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator('.btn.btn-success.btn-lg').click();
    
    //Handle dialog
    await page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();

    })


    //Logout
    await page.locator('#logout2').click();

})