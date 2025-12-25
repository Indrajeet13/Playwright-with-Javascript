const {test, expect} = require ('@playwright/test')


test('Assertion Test', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register")

    //expect(locator).toHaveURL() - Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //expect(locator).toHaveTitle() - Page has Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //expect(locator).toBeVisible() - Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //expect(locator).toBeEnabled() - Control is enabled
    const searchStoreBtn = await page.locator('#small-searchterms')
    await expect(searchStoreBtn).toBeEnabled()

    //expect(locator).toBeDisabled() - Control is disabled
    //await expect(searchStoreBtn).toBeDisabled()

    //expect(locator).toBeChecked() - Control is disabled
    //Radio button
    const genderMale = await page.locator('#gender-male')
    await genderMale.click()
    await expect(genderMale).toBeChecked()

    //Checkbox
    const newsLetterCheckbox = await page.locator('#NewsLetterSubscriptions_0__IsActive')
    //await newsLetterCheckbox.click()
    await expect(newsLetterCheckbox).toBeChecked()

    //expect(locator).toHaveAttribute() - Element has attribute
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type','submit')

    //expect(locator).toHaveText() - Element matches Text
    //expect(locator).toContainText() - Element Contains Text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')
    await expect(await page.locator('.page-title h1')).toContainText('Register')

    //expect(locator).toHaveValue(value) - Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    //expect(locator).toHaveCount() - A list of elements has a given lengths
    //const options =  await page.locator('locators')
    //await expect(options).toHaveCount(13)
    

});