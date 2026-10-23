import{Page, Locator} from '@playwright/test';

export abstract class BasePage_SOLID
{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page; //store this.page
    }

    async click(locator: Locator): Promise<void>
    {
        await locator.waitFor({state: 'visible'});
        await locator.click();
    }

    async navigate(url: string): Promise<void>
    {
        await this.page.goto(url, {waitUntil: 'load'});
    }

    async fill(locator: Locator, value: string): Promise<void>
    {
        await locator.waitFor({state: 'visible'});
        await locator.fill(value);
    }
     //Scroll with axes  
     async scrollToElement():Promise<void>
     {
        await this.page.mouse.wheel(0,1500);
        await this.page.waitForTimeout(1000);
        await this.page.mouse.down();

     }
     //scroll directly to element
     async scrollDirectlyToElement(locator:Locator)
     {
        await locator.scrollIntoViewIfNeeded();
     }
     //Option 3
     async scrollUsingJavaScript():Promise<void>
     {
        await this.page.evaluate(()=>window.scrollBy(0,1500));
     }


     //await this.page.mouse.click(10,56);
     //Drag and drop
// await page.mouse.move(100, 200);
// await page.mouse.down();   // press and hold
// await page.mouse.move(300, 400); // drag
// await page.mouse.up();     // release





    abstract isLoaded(): Promise<void>;
}
