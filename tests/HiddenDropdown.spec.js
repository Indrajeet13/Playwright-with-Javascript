const{test, expect} = require ('@playwright/test')


test('Handle Hidden Checkboxes', async ({page})=> {
    
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("button[type='submit']").click();

    await page.locator("//a[@class='oxd-main-menu-item active']").click();
    await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click();

    //Click on dropdown
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();

    //Waiting for options
    await page.waitForTimeout(3000);
    const options = await page.$$("//div[@role='option']//span");

    for(var option of options)
    {
        const jobTitle = await option.textContent();
        //console.log("Job title : ",jobTitle);
        if(jobTitle.includes('QA Engineer')){
            await option.click();
            break;    
        }


    }




    await page.waitForTimeout(5000)
});
