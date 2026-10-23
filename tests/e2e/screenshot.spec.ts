import {test,expect} from '@playwright/test'
import path from 'path' 

test("screenshot method 1 png ",async({page})=>{


    await page.goto("https://playwright.dev/");

    await page.screenshot({path:'screenshot/method1fullpage.png',fullPage:true});
    await expect(page).toHaveTitle(/Playwright/);


})

//just change extension 
test("screenshot method 2 JPG ",async({page})=>{


    await page.goto("https://playwright.dev/");

    await page.screenshot({path:'screenshot/method1fullpage.jpg',type:'jpeg',quality:80});
    await expect(page).toHaveTitle(/Playwright/);


})


test("screenshot method 2 cliped ",async({page})=>{


    await page.goto("https://playwright.dev/");

    await page.screenshot({path:'screenshot/cliped.png',type:'png',clip:{

        x:0,
        y:0,
        width:800,
        height:600

    }});
    await expect(page).toHaveTitle(/Playwright/);


})


test("screenshot method 3 cliped ",async({page})=>{


    await page.goto("https://playwright.dev/");

    await page.screenshot({path:'screenshot/backgroung.png',type:'png',omitBackground:true,fullPage:true});
    await expect(page).toHaveTitle(/Playwright/);


})


test("screenshot method 3 Buffer ",async({page})=>{


    await page.goto("https://playwright.dev/");

    const buffer = await page.screenshot({path:'screenshot/backgroung.png'});
  //  await expect(buffer).toBeInstanceOf(new buffer<Buffer>);
    await expect(buffer.length).toBeGreaterThan(0);


})







//basic
//fullpage
//cliped
//jpeg/png
//omit backgroung//used for acceiblity testing 