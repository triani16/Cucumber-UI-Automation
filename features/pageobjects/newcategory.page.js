const element = require("../locator.json")

class NewCategoryPage {
    async btnAdd() {
        return $(element.categoryPage.btnAdd)
    }


    async inputNamaField() {
        return $(element.addNewCategoryPage.nama);
    }

    async inputDeskripsiField() {
        return $(element.addNewCategoryPage.deskripsi);
    }

    async btnSave() {
        return $(element.addNewCategoryPage.btnSave)
    }


    async Message() {
        return $(element.addNewCategoryPage.message)
    }

//     async add (nama,deskripsi) {
//         await this.inputNamaField.setValue(nama);
//         await this.inputDeskripsiField.setValue(deskripsi);
//         await this.btnSave.click()
//    }
}

module.exports = new NewCategoryPage();