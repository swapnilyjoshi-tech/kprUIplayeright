import {test} from '@playwright/test'
import { ScrollPage } from '../../pages/ScrollPage'


test.describe('kapruka scroll to popular search',()=>{

    test('kapruka scroll to popular search ',async ({page})=>{
        const scrollPage = new ScrollPage(page);
        await scrollPage.goto();
        await page.screenshot({path:'screenshot/beforescroll.png'});
        await scrollPage.scrollbestSellingGift();
        await page.screenshot({path:'screenshot/afterscroll.png'});
        await page.screenshot({path:'screenshot/afterscrollfullpage.png',fullPage:true});
        

    })
})