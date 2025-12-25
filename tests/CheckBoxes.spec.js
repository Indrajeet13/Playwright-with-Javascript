const{test, expect} = require ('@playwright/test')


test('Handle Checkboxes', async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Single checkbox
    await page.locator("//input[@id='sunday' and @type='checkbox']").check();
    //await page.check("//input[@id='sunday' and @type='checkbox']")

    expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();

    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeFalsy();

   
    //Multiple Checkboxes

    const checkboxeLocators = [
        "//input[@id='monday' and @type='checkbox']", 
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"
    ]

    for(const locator of checkboxeLocators) //Select multiple checkboxes
    {
        await page.locator(locator).check();

    }

    await page.waitForTimeout(5000)

    for(const locator of checkboxeLocators) //unselect multiple checkboxes which is already selected
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
        
        
    }



    await page.waitForTimeout(5000)

})