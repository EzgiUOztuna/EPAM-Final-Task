const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('#login-button'); }
    get errorMsg() { return $('#login_button_container form div:nth-child(3) h3'); }

    async setUsername(username) {
        await this.inputUsername.setValue(username);
    }

    async setPassword(password) {
        await this.inputPassword.setValue(password);
    }

    async clickLogin() {
        await this.btnSubmit.click();
    }

    async getErrorMessage() {
        await this.errorMsg.waitForDisplayed();
        return await this.errorMsg.getText();
    }

    async login(username, password) {
        if (username !== undefined) await this.setUsername(username);
        if (password !== undefined) await this.setPassword(password);
        await this.clickLogin();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return browser.url(`https://www.saucedemo.com/`);
    }
}

module.exports = new LoginPage();