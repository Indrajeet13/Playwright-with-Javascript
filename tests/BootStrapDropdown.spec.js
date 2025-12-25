const{test, expect} = require ('@playwright/test')

test('Handle Bootstap Dropdowns', async ({page}) => {

    await page.goto("https://getbootstrap.com/docs/4.0/components/dropdowns/", {
        waitUntil: 'commit',
        timeout: 10000   // 10s max wait
    });

    await page.locator("//button[@class='btn btn-primary dropdown-toggle']").click();

    // 1
    // const options = await page.locator("//div[@class='dropdown-menu show']//a")
    // expect(options).toHaveCount(4);


    // 2
    // const options = await page.$$("//div[@class='dropdown-menu show']//a")
    // expect(options.length).toBe(4)

    // 3 Select option from dropdown
    // const options = await page.$$("//div[@class='dropdown-menu show']//a")
    // for(let option of options)
    // {
    //     const value = await option.textContent();
    //     // console.log("The Value is : ", value);

    //     if(value.includes('Another action'))
    //     {
    //         await option.click();
    //         break;
    //     }

    // }

    //De-select options which are selected -  in case of dropdown with the checkbox
     const options = await page.$$("//div[@class='dropdown-menu show']//a")
    for(let option of options)
    {
        const value = await option.textContent();
        // console.log("The Value is : ", value);

        if(value.includes('Another action'))
        {
            await option.click();
            break;
        }

    }

    await page.waitForTimeout(5000);
});