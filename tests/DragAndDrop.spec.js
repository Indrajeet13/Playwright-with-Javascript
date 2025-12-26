const{test, expect} = require("@playwright/test")

test('Drag and Drop', async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/dragdrop/");

    const one = await page.locator("#one");
    const two = await page.locator("#two");


    const destination = await page.locator("#bin");

    //Approch1 - Drag and Drop
    /*
    await one.hover();
    await page.mouse.down();

    await destination.hover();
    await page.mouse.up();

    */

    //Approch 2 

    await two.dragTo(destination);


    await page.waitForTimeout(3000);

})