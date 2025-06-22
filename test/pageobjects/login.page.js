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
    get btnSubmit() { return $('button[type="submit"]'); }
    get errorMsg() { return $('h3[data-test="error"]'); }

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

    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        if (username !== undefined) await this.setUsername(username);
        if (password !== undefined) await this.setPassword(password);
        await this.clickLogin();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
