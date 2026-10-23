import {test} from '../../fixture/auth/fixtures'

import {expect} from '@playwright/test'


test.describe('kapruka currency dropdown',()=>{

    test('switch from usd to INR',async({currencyPage})=>{
        //const currencyPage = new CurrencyPage(page);
        await currencyPage.goto();
        await currencyPage.isLoaded();
        await currencyPage.selectCurrency('USD');
        await currencyPage.verifyCurrency('USD');
        await currencyPage.selectCurrency('INR');
        await currencyPage.verifyCurrency('INR');
        
    })
})