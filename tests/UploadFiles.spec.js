const{test,expect} = require("@playwright/test")

test("Single File", async ({page})=> {

    await page.goto("https://www.file.io/")

    await page.locator("//label[normalize-space()='Upload Files']").setInputFiles('tests/UploadFiles/TestFile1.txt')


    await page.waitForTimeout(5000)
})


test.only("Multiple File", async ({page})=> {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("#filesToUpload").setInputFiles(['tests/UploadFiles/TestFile1.txt', 'tests/UploadFiles/TestFile2.txt']);

    
    await page.waitForTimeout(3000);
    
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText('TestFile1.txt');
    expect(await page.locator("#fileList li:nth-child(2)")).toHaveText('TestFile2.txt');

    
    await page.waitForTimeout(3000);

    //Removing files
    await page.locator("#filesToUpload").setInputFiles([]);
    await page.waitForTimeout(3000);

    expect(await page.locator("ul[id='fileList'] li")).toHaveText('No Files Selected');

})