const{test, expect} = require ('@playwright/test')


test('Handling Tables', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator("#productTable");

    //1) Total number of rows and columns
    const columns = await table.locator('thead tr th')
    console.log("Number of Columns: ", columns.count());

    const rows = await table.locator('tbody tr')
    console.log("Number of Rows: ", rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    //2) Select checkbox for project 4
    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })

    // await matchedRow.locator('input').check();


    // 3) Select multiple products using reusable function
    // await selectProduct(rows, 'Laptop');
    // await selectProduct(rows, 'Tablet');
    // await selectProduct(rows, 'Wireless Earbuds');


    // 4) Print all product details
    // for(let i=0; i<await rows.count(); i++)
    // {   
    //     const row = rows.nth(i);
    //     const tds = row.locator('td')

    //     for(let j=0; j<await tds.count()-1; j++)
    //     {
    //         console.log(await tds.nth(j).textContent());
    //     }

    // }


    // 5) Read data from all the projects in the table

    const pages = await page.locator('.pagination li a')
    console.log('Number of pages in the table : ', await pages.count());


    for(let p=0; p<await pages.count(); p++)
    {   
        if(p>0){
            await pages.nth(p).click();
        }
        
        for(let i=0; i<await rows.count(); i++)
        {   
            const row = rows.nth(i);
            const tds = row.locator('td')

            for(let j=0; j<await tds.count()-1; j++)
            {
                console.log(await tds.nth(j).textContent());
            }

        }
      
    }

    await page.waitForTimeout(3000);

});


// Reusable function
async function selectProduct(rows, productName) {
    const matchedRow = rows.filter({
        hasText: productName
    });

    await matchedRow.locator('input[type="checkbox"]').check();
}