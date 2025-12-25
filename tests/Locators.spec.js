//const {test, expect} = require("@playwright/test");
//OR
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=> {

    await page.goto('https://demoblaze.com/index.html');
    
    //Click on login button
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //Provide username - CSS
    //await page.locator('#loginusername').fill("IndraY");
    await page.fill('#loginusername','pavanol');
    //await page.type('#loginusername');

    //Provide password - CSS
    await page.fill('#loginpassword', 'test@123')

    //Click on login button
    await page.click("//button[normalize-space()='Log in']")

    //Verify logout link presence
    const logoutLink = await page.locator("//a[@id='logout2']");
    await expect(logoutLink).toBeVisible();

    await page.close();

})