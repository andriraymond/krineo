import { expect, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly email: string;
    readonly password: string;
    readonly btnLogin: string;
    readonly errorMsg: string;

    constructor(page: Page) {
        this.page = page;
        this.email = '[data-testid="login-email"]';
        this.password = '[data-testid="login-password"]';
        this.btnLogin = '[data-testid="login-submit"]';
        this.errorMsg = '#login-error-msg';
    }

    async goto() {
        await this.page.goto('/login');
    }

    async fillEmail(email: string) {
        await this.page.fill(this.email, email);
    }

    async fillPassword(password: string) {
        await this.page.fill(this.password, password);
    }

    async clickLogin() {
        await this.page.click(this.btnLogin);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verifyErrorLogin(msg:string){
        await expect(this.page.locator(this.errorMsg)).toBeVisible();
        await expect(this.page.locator(this.errorMsg)).toHaveText(msg);
    }

    async verifySuccessLogin() {
        await expect(this.page.locator('#navbar-user-name')).toBeVisible();
        await expect(this.page.locator('#navbar-user-name')).not.toBeEmpty();
        await expect(this.page.locator('#navbar-user-name')).toBeVisible();
        await expect(this.page.locator('#navbar-user-name')).not.toBeEmpty();
    }
}