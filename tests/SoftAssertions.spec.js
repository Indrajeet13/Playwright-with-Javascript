const {test, expect} = require ('@playwright/test')


test('Soft Assertion Test', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html')

    //Hard Assertions
    // await expect(page).toHaveTitle('STORE')
    // await expect(page).toHaveURL('https://demoblaze.com/index.html')
    // await expect(await page.locator('#nava')).toBeVisible()

    //Soft Assertions
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(await page.locator('#nava')).toBeVisible()


});