const{test, expect} = require ('@playwright/test')


test ('handle radio button', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //Radio Button
    
    await page.locator("#male").check()   //Male 
    //await page.check("#male")

    await expect(await page.locator("#male")).toBeChecked()
    await expect(await page.locator("#male")).isChecked().toBeTruthy()

     await expect(await page.locator("#male")).isChecked().toBeFalsy()




    await page.waitForTimeout(5000)     //Pausing execution for sometime

});