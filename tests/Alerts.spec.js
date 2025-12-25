const{test, expect} = require ('@playwright/test')


test.skip('Alert with OK ', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enabling Dialog window handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept(); //Close by using OK button

    })

    await page.click("//button[@id='alertBtn']");

    await page.waitForTimeout(5000);
});


test.skip('Confirmation Dialog', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enabling Dialog window handling
    page.on('Confirmation dialog with Ok and Cancel button', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();  //close using OK button
        //await dialog.dismiss();   //Close using Cancel button

    })

    await page.click("//button[@id='confirmBtn']");
    expect(await page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    
    await page.waitForTimeout(5000);
});



test('Prompt Dialog', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enabling Dialog window handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        //expect(dialog.defaultValue()).toContain('Harry Potter')
        
        await dialog.accept('John');  //close using OK button
        //await dialog.dismiss();   //Close using Cancel button

    })

    await page.click("//button[@id='promptBtn']");
    expect(await page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?");
    
    await page.waitForTimeout(5000);
});