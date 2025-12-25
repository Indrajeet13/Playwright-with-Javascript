const{test, expect} = require ('@playwright/test')

test('Handle AutoSelect Dropdowns', async ({ page }) => {
    
   await page.goto("https://www.redbus.in/");

    // ------------------- HANDLE SOURCE AUTO-SUGGEST -------------------
    await page.click("//div[contains(text(),'From')]");  
    await page.fill("//div[@class='inputWrapper___29d2ca']//input[@id='srcDest']", "Pune");

    const optionsFrom = await page.$$("//div[@role='heading']");

    for(var option of optionsFrom)
    {
        const fromDropdownText = await option.textContent()
        //console.log(fromDropdownText);
        if(fromDropdownText.includes('Wakad, Pune')){
            await option.click();
            break;
        }

    }

    // ------------------- HANDLE DESTINATION AUTO-SUGGEST -------------------
    await page.click("//div[contains(text(),'To')]");  
     await page.fill("//div[@class='inputWrapper___29d2ca']//input[@id='srcDest']", "Delhi");

    const optionsTo = await page.$$("//div[@role='heading']");

    for(var option of optionsTo)
    {
        const fromDropdownText = await option.textContent()
        //console.log(fromDropdownText);
        if(fromDropdownText.includes('Near Delhi Airport, Delhi')){
            await option.click();
            break;
        }

    }

    

    await page.waitForTimeout(5000);
})