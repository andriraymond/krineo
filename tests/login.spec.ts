import { test, expect } from '@playwright/test';

test('Verify user can login with valid credentials', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Situs Jual Beli Online Mudah & Aman/);
  // Go to Login Page
  await page.locator('[id="nav-link-sign in"]').click();
  // Perform Login
  await page.getByTestId('login-email').fill(process.env.EMAIL ?? '');
  await page.getByTestId('login-password').fill(process.env.PASSWORD ?? '');
  await page.getByTestId('login-submit').click();
  await page.waitForLoadState('domcontentloaded');
  // Verifikasi elemen terlihat dan ada isinya (tidak null/kosong)
  const userNameLocator = page.locator('#navbar-user-name');
  await expect(userNameLocator).toBeVisible();
  await expect(userNameLocator).not.toBeEmpty();
});