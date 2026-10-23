import {Page,Locator} from '@playwright/test'
import { BasePage_SOLID } from './BasePage_SOLID'

export interface ProductInfo
{
    name:string;
    price:string;

}


export class comboGiftPage extends BasePage_SOLID
{

    page:Page;
    prodcutNames :Locator;
    constructor(page:Page)
{
    super(page)
    this.page = page;
    this.prodcutNames  = page.locator(".catalogueV2heading");

}

async goto()
{
    await this.navigate("/online/combogifts");
}

async isLoaded(): Promise<void> {
    
    this.prodcutNames.first().waitFor({state:'visible',timeout:20000})
}



}

  