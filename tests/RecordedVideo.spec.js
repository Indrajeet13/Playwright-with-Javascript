const {test, expect} = require ("@playwright/test");

test('test', async ({page}) => {

    await page.goto('https://demoblaze.com/');

    //Login
    await page.locator("#login2").click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click();
    await expect(page.locator('#logout')).toBeVisible();        // ------ Intensionally failing the test to record video

});