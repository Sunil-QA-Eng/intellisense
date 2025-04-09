const { expect } = require("@playwright/test");

exports.DashPage = class DashPage {
    constructor(page) {
        this.page = page;
        this.projectName = page.locator("//h3[@class='MuiTypography-root MuiTypography-h3 mui-1jri6bs']");
        this.menuButton = page.getByTestId('new-brains-menu-button');
        this.homeLink = page.getByRole('link', { name: 'Home' });
        //this.notificationButton = page.getByTestId('BrainsAlerts-button');
        this.notificationButton = page.locator("(//span[@class='MuiChip-label MuiChip-labelSmall mui-1pjtbja'])[2]");
        this.notificationText = page.getByText('copy of test alert qa manual');
        this.supportButton = page.locator("//button[@aria-label='add']");
        this.supportPopupCloseButton = page.locator('iframe[name="intercom-messenger-frame"]').contentFrame().getByRole('button', { name: 'Close' });
        this.profileIcon = page.getByTestId("BrainsAppScreenFrame-profileButton");
        this.grafanaButton = page.locator("//span[@class='MuiBadge-root mui-1rzb3uu']");
        this.grafanaAnnotationsText = this.page.getByText('Grafana Annotations');
    }

    async getProjectNameText() {
        return await this.projectName.textContent();
    }

    async clickMenuButton() {
        await this.menuButton.click();
    }

    async clickNottificationButton() {
        await this.notificationButton.click();
    }
    async getNotificationText() {
        return await this.notificationText.innerText();

    }
    async clickSupportButton() {
        await this.supportButton.click();
    }

    async clickProfileIcon() {
        await this.profileIcon.click();
    }

    async clickGrafanaButton() {
        await this.grafanaButton.click();
    }
};