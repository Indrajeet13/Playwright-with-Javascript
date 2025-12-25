const{test, expect} = require ('@playwright/test')

test('Handle MultipleDropdowns', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/", {
        waitUntil: 'commit',
        timeout: 10000   // 10s max wait
    });

    //Select multiple options from multiselect dropdown
    //await page.selectOption('#colors',['Blue', 'Red', 'Yellow']);


    //Assertions
    // 1) check number of options in dropdown
    // const options = await page.locator('#colors option');
    // expect(options).toHaveCount(5);

    // 2) Check number of options in dropdown using javascript array
    // const options = await page.$$('#colors option');
    // console.log("Number of options : ", options.length)
    // expect(options.length).toBe(5);

    // 3) Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();



    await page.waitForTimeout(5000);
});  