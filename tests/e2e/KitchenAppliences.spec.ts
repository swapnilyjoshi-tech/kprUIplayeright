import {test} from '@playwright/test'

import { HomePage } from '../../pages/HomePage'


test.describe('kapruka electronic page',()=>{

test('Verify kitchen Applience on ToolTip Hover',async ({page})=>{
  test.setTimeout(10000);   // too short, remove or increase
   const homePage = new HomePage(page);
   await homePage.goto();
   await homePage.isLoaded();
   await homePage.hoverkitchenAppliences();
   await homePage.verifykitchenApplienncesToolTip();
   console.log(await homePage.verifykitchenApplienncesGetText());


})

})