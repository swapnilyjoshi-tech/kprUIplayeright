import{test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'


test.describe(' kapruka Login ',()=>{

   test('Valid use should be login successfully',async ({page})=>{
           
       const loginPage = new LoginPage(page);
      await loginPage.goto();
       await loginPage.login(process.env.TEST_EMAIL || "playwrightfreeaccess@gmail.com",process.env.TEST_PASSWORD ||"Omganesh@123456");
       await loginPage.veryLoginSuccess();
   })
})

