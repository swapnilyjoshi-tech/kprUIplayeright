import { test, expect } from '@playwright/test';
import { LoginPage_SOLID } from '../../pages/LoginPage_SOLID';

// Fail fast if credentials aren't set - never fall back to a hardcoded literal
const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_PASSWORD = process.env.TEST_PASSWORD;

if (!TEST_EMAIL || !TEST_PASSWORD) {
  throw new Error(
    'Missing TEST_EMAIL or TEST_PASSWORD environment variable. ' +
    'Set these in config/.env.qa (copy from config/.env.example) before running tests. ' +
    'You need an account that already exists on kapruka.com - ' +
    'create one via signup.spec.ts or manually first.'
  );
}

test.describe('Login using Data Driven testing', () => {
  // One parametrized test, 4 sets of data
  const cases = [
    { label: 'wrong password', email: TEST_EMAIL, password: 'wrong pass', shouldSucceed: false },
    { label: 'wrong email', email: 'wrong@user.com', password: TEST_PASSWORD, shouldSucceed: false },
    { label: 'empty fields', email: '', password: '', shouldSucceed: false },
    { label: 'valid credentials', email: TEST_EMAIL, password: TEST_PASSWORD, shouldSucceed: true },
  ];

  for (const { label, email, password, shouldSucceed } of cases) {
    
    test(label, async ({ page }) => {
      const loginPage = new LoginPage_SOLID(page);
      await loginPage.goto();
      await loginPage.isLoaded();
      await loginPage.login(email, password);

     
    });
  }
});
