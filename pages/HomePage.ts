import {Page,Locator,expect} from '@playwright/test'
import { BasePage_SOLID } from './BasePage_SOLID';


export class HomePage extends BasePage_SOLID{


    readonly page:Page;
    readonly kitchenApplience:Locator;
    constructor(page:Page)
    {
        super(page);
         this.page = page;
        // this.kitchenApplience = page.getByRole('link',{name:'Kitchen Appliances',exact:false});
         this.kitchenApplience = page.getByRole('link',{name:/Kitchen Appliances/});


    }

    async goto():Promise<void>
    {
        this.navigate('https://www.kapruka.com/online/electronics');
    }
    async isLoaded(): Promise<void> {

        await expect(this.kitchenApplience).toBeVisible();
        
    }

    async hoverkitchenAppliences():Promise<void>
    {
        await this.kitchenApplience.hover();
    }

    async getKithenApplienceTooltip():Promise<string|null>
    {
       return await this.kitchenApplience.getAttribute('title');
    }

    async verifykitchenApplienncesToolTip():Promise<void>
    {
        await expect(this.kitchenApplience).toHaveAttribute('title','Shop For Kitchen Appliances b(1168)b')
        
    }

     async verifykitchenApplienncesGetText():Promise<string|null>
    {
        return this.kitchenApplience.textContent();
        
    }







}
