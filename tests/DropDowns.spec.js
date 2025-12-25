const{test, expect} = require ('@playwright/test')

test('Handle Dropdowns', async ({page}) => {

   await page.goto("https://testautomationpractice.blogspot.com/", {
        waitUntil: 'commit',
        timeout: 10000   // 10s max wait
    });


    //Multiple ways to select an option from the dropdown
    //await page.locator("#country").selectOption({label:'India'}); //Using label - visible text
    //await page.locator("#country").selectOption('India');   //Visible text only
    //await page.locator("#country").selectOption({value:'uk'}); //Using value attribute
    //await page.locator("#country").selectOption({index: 2}); //Using Index - starting from 0

    //await page.selectOption("#country", 'India')    //By text - another way

    //Assertions ----------------------------------------------------------------------------

    // 1) Check number of options in dropdown - Approch 1
    // const options = await page.locator("#country option" );
    // expect(options).toHaveCount(10);

    // 2) Check number of options in dropdown - Approch 2
    // const options = await page.$$('#country option')
    // console.log("Number of Options: ",options.length);
    // await expect(options.length).toBe(10);

    // 3) Check presence of value in the dropdown - Approch 1
    // const content =  await page.locator("#country").textContent()
    // expect(content.includes('India')).toBeTruthy();
    
    // 4) Check presence of value in the dropdown - Approch 2 - using looping
    // await page.locator('#country').waitFor();
    // const options = await page.$$('#country option')
    // let status = false;

    // for(const option of options)
    // {
    //     //console.log(await option.textContent())
    //     let value = await option.textContent();
    //     if(value.includes('France'))
    //     {
    //         status = true;
    //         break;
    //     }

    // }
    // expect(status).toBeTruthy();


    // 5) Select options from dropdown - using looping
    await page.locator('#country').waitFor();
    const options = await page.$$('#country option')

    for(const option of options)
    {
        let value = await option.textContent();
        if(value.includes('france'))
        {
            await page.selectOption("#country", value)
            break;
        }
    }

   await page.waitForTimeout(5000);

})