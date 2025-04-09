const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { DashPage } = require("../pages/dashPage");

test.describe("Dashboard Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.loginToApplication('qateam-auto+guest@intellisense.io', 'QateamIS@2025');
  });

  test("Verify the project title is matching correctly", async ({ page }) => {
    const dashPage = new DashPage(page);
    const projectText = await dashPage.getProjectNameText();
    expect(projectText.trim()).toBe('QA Automation test Project');;
  });

  test("Verify the Home link is visible", async ({ page }) => {
    const dashPage = new DashPage(page);
    await dashPage.clickMenuButton();
    await expect(dashPage.homeLink).toBeVisible();
  });

  test("Verify support popup is visible", async ({ page }) => {
    const dashPage = new DashPage(page);
    await dashPage.clickSupportButton();
    await expect(dashPage.supportPopupCloseButton).toBeVisible;
  });

  test("Verify user is able to see Grafana annotations pop-up successfully", async ({ page }) => {  
    const dashPage = new DashPage(page);
    await dashPage.clickGrafanaButton();
    await expect(dashPage.grafanaAnnotationsText).toBeVisible();
  });

  test("Verify user is able to navigate to profile page successfully", async ({ page }) => {  
    const dashPage = new DashPage(page);
    await dashPage.clickProfileIcon();
    await expect(page).toHaveURL(/.*profile/);
  });

  test("Verify notification popup is visible", async ({ page }) => {
    const dashPage = new DashPage(page);
    await dashPage.clickNottificationButton();
    const notificationText = await dashPage.getNotificationText();
    expect(notificationText.trim()).toBe('copy of test alert qa manual hold');
  });

});