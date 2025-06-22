const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('UC-1: Should show error when username and password are empty', async () => {
        await LoginPage.setUsername('something');
        await LoginPage.setPassword('something');
        await LoginPage.setUsername('');
        await LoginPage.setPassword('');

        const error = await LoginPage.getErrorMessage();
        console.log('Error message: ', error);
        expect(error).to.include('Username is required.');
    });
})

