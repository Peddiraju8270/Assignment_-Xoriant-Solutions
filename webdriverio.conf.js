exports.config = {
    runner: 'local',
    path: '/wd/hub',
    port: 4723,
    specs: ['./features/**/*.feature'],
    capabilities: [
        {
            platformName: 'Android',
            automationName: 'UiAutomator2',
            app: './path/to/Android-MyDemoAppRN.1.3.0.build-244.apk',
            deviceName: 'Android Emulator',
            platformVersion: '11.0'
        },
        {
            platformName: 'iOS',
            automationName: 'XCUITest',
            app: './path/to/iOS-Real-Device-MyRNDemoApp.1.3.0-162.ipa',
            deviceName: 'iPhone 12',
            platformVersion: '16'
        }
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        timeout: 60000
    },
    reporters: [
        ['allure', { outputDir: 'allure-results' }]
    ],
};
