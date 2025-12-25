const { test, expect } = require('@playwright/test');

test('Select date from Calendar', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator("#datepicker").fill("10/21/2025");

    await page.click('#datepicker');               // open calendar

    const year = "2026";
    const month = "April";
    const date = "15";

    while (true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentMonth === month && currentYear === year) {
            break;
        }

        await page.locator('[title="Next"]').click();  // go next month
    }

    // Select date
    const dates = await page.$$("//a[@class='ui-state-default']");
    
    //Date selection using loop
    // for(const dt of dates)
    //     {
    //     if(await dt.textContent() == date)
    //         {
    //         await dt.click();
    //         break;
    //     }
    // }


    //date selection - without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(5000);
});
