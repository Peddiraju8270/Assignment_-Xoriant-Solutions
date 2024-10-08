class LoginPage {
    // Android and iOS locators (use Appium Inspector to get actual values)
    get usernameInput() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-Username")')
            : $('~test-Username');
    }

    get passwordInput() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-Password")')
            : $('~test-Password');
    }

    get loginButton() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-LOGIN")')
            : $('~test-LOGIN');
    }

    get errorMessage() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-ErrorMessage")')
            : $('~test-ErrorMessage');
    }

    get welcomeMessage() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-Welcome")')
            : $('~test-Welcome');
    }

    // Login action
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    // Validation methods
    async isLoggedIn() {
        return await this.welcomeMessage.isDisplayed();
    }

    async isErrorDisplayed() {
        return await this.errorMessage.isDisplayed();
    }
}

module.exports = new LoginPage();
