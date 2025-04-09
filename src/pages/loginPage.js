const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.getByRole('textbox', { name: 'Email address' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.signinButton = page.getByTestId('SignInLocal-signInButton');
  }

  async navigateToLoginPage() {
    await this.page.goto("https://qa-test.intellisense.io/next/signin?ourl=%2Fnext%2Fdashboards%2Fg%2F2082%2FQA");
  }

  async loginToApplication(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signinButton.click();
  }
};