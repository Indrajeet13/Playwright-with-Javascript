import {test, expect} from '@playwright/test';


test('Page Sceenshot', async ({page})=> {

    await page.goto("https://tutorialsninja.com/demo/");
    await page.screenshot({path : 'tests/Screenshots/'+ Date.now()+'HomePage.png'})
});

test('Full Page Sceenshot', async ({page})=> {

    await page.goto("https://tutorialsninja.com/demo/");
    await page.screenshot({path : 'tests/Screenshots/'+ Date.now()+'FullPage.png' , fullPage : true})
});

test.only('Element Sceenshot', async ({page})=> {

    await page.goto("https://tutorialsninja.com/demo/");
    await page.locator("//*[@id='content']/div[2]/div[1]/div").screenshot({path : 'tests/Screenshots/'+ Date.now()+'MacBook.png'})

});
