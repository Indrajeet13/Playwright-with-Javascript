// const {test, expect} = require ("@playwright/test");

// test('test1', {tag: '@sanity'}, async ({page}) => {
//     console.log('This is my test 1 ....')
// });

// test('test2', {tag: '@sanity'}, async ({page}) => {
//     console.log('This is my test 2 ....')
// });


// test('test3', {tag: '@reg'}, async ({page}) => {
//     console.log('This is my test 3 ....')
// });

// test('test4', {tag: '@reg'}, async ({page}) => {
//     console.log('This is my test 4 ....')
// });



// test('test5', {tag: '@reg'}, async ({page}) => {
//     console.log('This is my test 5 ....')
// });



const { test, expect } = require("@playwright/test");

test('test1 @sanity', async ({ page }) => {
    console.log('Test 1 - sanity');
});

test('test2 @sanity', async ({ page }) => {
    console.log('Test 2 - sanity');
});

test('test3 @reg', async ({ page }) => {
    console.log('Test 3 - reg');
});

test('test4 @reg', async ({ page }) => {
    console.log('Test 4 - reg');
});

test('test5 @sanity @reg', async ({ page }) => {
    console.log('Test 5 - both');
});
