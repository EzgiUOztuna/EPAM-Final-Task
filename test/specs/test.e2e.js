const { $, browser } = require('@wdio/globals');
const { expect } = require('chai');
const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('UC-1: Should show error when username and password are empty', async () => {
        await LoginPage.setUsername('');
        await LoginPage.setPassword('');
        await LoginPage.clickLogin();

        const error = await LoginPage.getErrorMessage();
        console.log('Error message: ', error);
        expect(error).to.include('Username is required');

    });


    it('UC-2: Should show error when password is empty', async () => {
        await LoginPage.setUsername('standard_user');
        await LoginPage.setPassword('');
        await LoginPage.clickLogin();

        const error = await LoginPage.getErrorMessage();
        console.log('Error message: ', error);
        expect(error).to.include('Epic sadface');
    });

    const users = [
        { username: 'standard_user', shouldLogin: true },
        { username: 'locked_out_user', shouldLogin: false, expectedError: 'Epic sadface: Sorry, this user has been locked out.' },
        { username: 'problem_user', shouldLogin: false }, // but wrong pictures
        { username: 'performance_glitch_user', shouldLogin: false }, //delayed
        { username: 'error_user', shouldLogin: false },
        { username: 'visual_user', shouldLogin: false },
    ];

    users.forEach((user) => {
        it(`UC-3: Should behave correctly with user: ${user.username}`, async () => {
            await LoginPage.open();
            await LoginPage.login(user.username, 'secret_sauce');

            const currentUrl = await browser.getUrl();

            if (user.shouldLogin) {
                expect(currentUrl).to.include('inventory.html');
            } else {
                expect(currentUrl).to.not.include('inventory.html');

                if (user.expectedError) {
                    const error = await LoginPage.getErrorMessage();
                    expect(error).to.include(user.expectedError);
                }
            }
        });
    });
});
