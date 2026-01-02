import {test, expect, chromium} from "@playwright/test";
import { escape } from "querystring";

test('test 1', async ({page}) => {

    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');

});


test('test 2', async ({page}) => {

     await page.goto('https://www.opencart.com/');
    await expect(page).toHaveTitle('OpenCart - Open Source Shopping Cart Solution');

});


test('test 3', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');

});
