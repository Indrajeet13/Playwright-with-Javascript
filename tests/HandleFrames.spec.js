const{test, expect} = require ('@playwright/test')


test('frames', async ({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Total frames
    const allframes= await page.frames();
    console.log("Number of frames : ",allframes.length);
    
    //Approch 1 - Using name or url of the page
    //const var = await page.frame('name')  //if name is present 
    // const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame1.fill("[name='mytext1']", 'Hello')

    //Approch 2 - Using frame locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    inputbox.fill("Hello");
    
    await page.waitForTimeout(5000);

});