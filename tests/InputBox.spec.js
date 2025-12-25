const{test, expect} = require ('@playwright/test')


test ('handle inputbox', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    
    //Input box - Email Address

    await expect(await page.locator('#email')).toBeVisible()
    await expect(await page.locator('#email')).toBeEmpty()
    await expect(await page.locator('#email')).toBeEditable()
    await expect(await page.locator('#email')).toBeEnabled()

    //await page.locator('#email').fill("John@example.com")
    await page.fill("#email","John@example.com")


    await page.waitForTimeout(5000)     //Pausing execution for sometime

});