const { test, expect } = require("@playwright/test")

test('Mouse Double Click', async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']");

    //Double Copy
    await btnCopy.dblclick();

    const textField2 = await page.locator("#field2");

    await expect(textField2).toHaveValue('Hello World!');

    await page.waitForTimeout(3000);

});