const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('UC-1: Should show error when username and password are empty', async () => {
        await LoginPage.setUsername('something');
        await LoginPage.setPassword('something');
        await LoginPage.setUsername('');
        await LoginPage.setPassword('');
        await LoginPage.clickLogin();

        const error = await LoginPage.getErrorMessage();
        console.log('Error message: ', error);
        expect(error).to.include('Username is required.');
    });


    it('UC-2: Should show error when password is empty', async () => {
        await LoginPage.setUsername('standard_user');
        await LoginPage.setPassword('something');
        await LoginPage.setPassword('');
        await LoginPage.clickLogin();

        const error = await LoginPage.getErrorMessage();
        console.log('Error message: ', error);
        expect(error).to.include('Password is required.');
    });


    const validUsers = [standard_user, locked_out_user, problem_user, performance_glitch_user, error_user, visual_user];

    validUsers.forEach(user => {
        it(`UC-3: Should login successfully with valid user: ${user}`, async () => {
            await LoginPage.login(user, 'secret_sauce');
            const title = await $('.app_logo').getText();
            console.log('Page Title: ', title);
            expect(title).to.equal('Swag Labs');
        });
    });
});

