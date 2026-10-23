import {Page,Locator,expect} from '@playwright/test'
import { BasePage } from './BasePage'


export class CurrencyPage extends BasePage
{
    
    readonly currencyDropdown:Locator;
    constructor(page:Page)
    {
        super(page);
        this.currencyDropdown = page.getByRole('combobox',{name:'Select Currency'});
    }


    async goto()
    {
       await this.navigate('/');
    }


   async isLoaded(): Promise<void> 
    {
        await expect(this.currencyDropdown.waitFor({state:'visible'}))
    }
    
    async selectCurrency(currency:'INR'|'USD'):Promise<void>
    {
        this.currencyDropdown.waitFor({state:'visible'});
        await this.currencyDropdown.selectOption({label:currency});
        await this.page.waitForLoadState('load');
    }

    async verifyCurrency(expected:string):Promise<void>
    {
        await expect(this.currencyDropdown).toHaveValue(expected);
    }
}