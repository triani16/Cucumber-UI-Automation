const element = require("../locator.json")

class DashboardPage {
    async header() {
        return $(element.dashboardPage.header)
    }

    async btnCategory(){
        return $(element.dashboardPage.btnCategory)
    }


}

module.exports = new DashboardPage();
