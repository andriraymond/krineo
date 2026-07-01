import { createBdd} from 'playwright-bdd';
import { LoginPage } from "../pages/login.page";
import { Page } from '@playwright/test';

const { Given, When, Then } = createBdd();

function resolveEnv(value: string) {
    if (value.startsWith('${process.env.') && value.endsWith('}')) {
        const key = value.substring(14, value.length - 1);
        return process.env[key] || value;
    }
    return value;
}

Given('user on the login page', async ({page}: {page: Page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); 
});

When('user enters email {string}', async ({page}: {page: Page}, email: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(resolveEnv(email));
});

When('user enters password {string}', async ({page}: {page: Page}, password: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillPassword(resolveEnv(password));
});

When('user clicks on the login button', async ({page}: {page: Page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickLogin();
});

Then('user is redirected to the dashboard', async ({page}: {page: Page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifySuccessLogin();
})

Then('the sistem displays the error message {string}', async ({page}: {page:Page}, msg:string) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyErrorLogin(msg);
})