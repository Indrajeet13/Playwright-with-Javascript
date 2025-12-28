const { test, expect } = require("@playwright/test");


//only
// test.only('test 1', async ({page}) => {
    
//     console.log('This is test 1');
// });


//skip
// test.skip('test 2', async ({page}) => {
    
//     console.log('This is test 2');
// });

// skip - based on certain condition
// test('test 3', async ({page, browserName}) => {
    
//     console.log('This is test 3');
//     if(browserName=='chromium'){
//         test.skip();
//     }
// });

//fixme
// test('test 4', async ({page}) => {
//     test.fixme();
//     console.log('This is test 4..');
// });

//fail
// test('test 5', async ({page}) => {
//     test.fail();    //expected
//     console.log('This is test 5..');
//     expect(1).toBe(2);      //actual
//     //if both expected and actual is failed then test gets passed
// });

//fail
// test('test 6', async ({page, browserName}) => {
    
//     console.log('This is test 6..');
//     if(browserName==='firefox'){
//         test.fail();    //expected
//     }
    
// });


//slow
test('test 7', async ({page}) => {
    
    //test.slow();
    test.setTimeout(6000);
    await page.goto("https://demoblaze.com/");
    console.log('This is test 7..');
    
});