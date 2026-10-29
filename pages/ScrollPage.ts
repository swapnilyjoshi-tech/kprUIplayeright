import {test,Page,Locator,expect} from '@playwright/test'
import { BasePage_SOLID } from './BasePage_SOLID';


export class ScrollPage extends BasePage_SOLID{


   readonly page:Page;
   readonly bestSellingGifts:Locator;
    constructor(page:Page)
    {
        super(page);
        this.page = page;
        this.bestSellingGifts = page.getByText("Order by WhatsApp",{exact:true});

    }

    async goto():Promise<void>
    {
        this.navigate("/");
        this.page.waitForTimeout(2000);
    }

    async isLoaded(): Promise<void> {
        await expect(this.bestSellingGifts).toBeVisible();
    }

    async scrollbestSellingGift(): Promise<void> {
        this.scrollDirectlyToElement(this.bestSellingGifts);
    }

//

}