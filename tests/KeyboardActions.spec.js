const{test, expect} = require("@playwright/test")

test('Keyboard Actions', async ({page}) => {

    await page.goto("https://gotranscript.com/text-compare");
    
    await page.locator('[name="text1"]').fill("Welcome To Automation");

    // Ctrl + A
    await page.keyboard.press('Control+A') 
    //await page.keyboard.press('CTRL+keyA') 

    //CTRL + C
    await page.keyboard.press('Control+C')

    //TAB
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //CTRL + V
    await page.keyboard.press('Control+V');


    await page.waitForTimeout(3000)
})  