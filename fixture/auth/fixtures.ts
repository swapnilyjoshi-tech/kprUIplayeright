import {test as base} from '@playwright/test'
import { CurrencyPage } from '../../pages/CurrencyPage'

type PageFixture = {
    currencyPage: CurrencyPage;
}


export const test  = base.extend<PageFixture>({
  currencyPage: async({page},use)=>{
    const currenctPage = new  CurrencyPage(page);
    await use(currenctPage)
  }
})