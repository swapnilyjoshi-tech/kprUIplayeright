import {Page,test,expect, Locator} from '@playwright/test'
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator
    readonly page:Page;
    constructor(page:Page)
    {
        super(page);
         this.page = page;
         this.emailInput = page.locator("#exampleInputEmail1");
         this.passwordInput = page.locator("#exampleInputPassword1");
         this.loginButton = page.getByRole('button',{name:'Login'});

    }
     
   async isLoaded(): Promise<void> {
     await expect(this.emailInput).toBeVisible();
     await expect(this.passwordInput).toBeVisible();
     await expect(this.loginButton).toBeVisible();


    }




    async goto()
    {
        await this.navigate("https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp?error=lg")
    }
    
    async login(email:string,password:string)
    {
        await this.fill(email,this.emailInput);
        await this.fill(password,this.passwordInput);
        await this.click(this.loginButton);
    }
    
     
async veryLoginSuccess():Promise<void>
{ 
    const currentUrl = this.page.url();
    if(currentUrl.includes('error'))
    {
        throw new Error("Login Failed");
    }
    await expect(this.page).not.toHaveURL('/accoutnLogin'); 
}

}


