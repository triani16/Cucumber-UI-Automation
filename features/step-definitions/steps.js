const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboard.page');
const newCategoryPage = require('../pageobjects/newcategory.page')


const pages = {
    login: LoginPage
}

Given(/^user already on (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^user input email (.+) and password (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});
 
Then(/^url contain (.+) and showing title kasirAja$/, async (pathName) => {
    const url = browser.getUrl();
    expect(url).toHaveUrlContaining(pathName);
});

When(/^user input invalid email (\w+) and invalid password (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^alert message displayed (.+)$/, async (alertMessage) => {
    const message = await LoginPage.alertMessage();
    expect(message).toHaveTextContaining(alertMessage);
});

Given (/^user already (\w+) to dashboard page$/, async (page) => {
    await pages[page].open();
    await LoginPage.successLogin()
})

When(/^user click kategori list$/, async () => {
    await dashboardPage.btnCategory()
});

When(/^user click tambah$/, async () => {
    await newCategoryPage.btnAdd()
});

When(/^user input nama (.+) and deskripsi (.+)$/, async (nama, deskripsi) => {
    await newCategoryPage.inputNamaField(nama);
    await newCategoryPage.inputDeskripsiField(deskripsi);
    await newCategoryPage.btnSave()
});

Then(/^user get (.+) message displayed$/, async (Message) => {
    const message = await newCategoryPage.Message();
    expect(message).toHaveTextContaining(Message)
});
