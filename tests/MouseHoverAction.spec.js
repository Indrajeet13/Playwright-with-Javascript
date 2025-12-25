const { test, expect } = require('@playwright/test');

test('Mouse Hover Action', async ({ page }) => {

    await page.goto("https://tutorialsninja.com/demo/");

    const desktops = await page.locator("//a[normalize-space()='Desktops']");

    const macbook = await page.locator("//a[normalize-space()='Mac (1)']");

    //Mouse hover
    await desktops.hover();
    await macbook.hover();

    await page.waitForTimeout(3000)

});