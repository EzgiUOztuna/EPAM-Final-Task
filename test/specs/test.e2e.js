const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
    })
    it('should login with valid credentials', async () => {


        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    });


    it('UC-1: Should show error when username and password are empty', async () => {

    });
})

