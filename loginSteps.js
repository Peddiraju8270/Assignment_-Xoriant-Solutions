const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/LoginPage');
const LOGIN_USERS = require('../data/loginUsers');

Given(/^I launch the app$/, async () => {
    // App launch is handled automatically by WebdriverIO
});

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login(LOGIN_USERS.STANDARD.username, LOGIN_USERS.STANDARD.password);
});

When(/^I login with invalid credentials$/, async () => {
    await LoginPage.login(LOGIN_USERS.NO_MATCH.username, LOGIN_USERS.NO_MATCH.password);
});

When(/^I try to login without credentials$/, async () => {
    await LoginPage.login(LOGIN_USERS.NO_USER_DETAILS.username, LOGIN_USERS.NO_USER_DETAILS.password);
});

Then(/^I should see the dashboard page$/, async () => {
    await expect(LoginPage.isLoggedIn()).toBeTrue();
});

Then(/^I should see an error message$/, async () => {
    await expect(LoginPage.isErrorDisplayed()).toBeTrue();
});

Then(/^I should see an error message for missing details$/, async () => {
    await expect(LoginPage.isErrorDisplayed()).toBeTrue();
});
