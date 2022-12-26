
export class OrderModal {
    nameField='#name'
    countryField='#country'
    cityField='#city'
    creditCardField='#card'
    monthField='#month'
    yearField='#year'
    purchaseButtonLocator='#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    fillOutFields(orderInfo){
        console.log(orderInfo)
        cy.get(this.nameField).type(orderInfo[0])
        cy.get(this.countryField).type(orderInfo[1])
        cy.get(this.cityField).type(orderInfo[2])
        cy.get(this.creditCardField).type(orderInfo[3])
        cy.get(this.monthField).type(orderInfo[4])
        cy.get(this.yearField).type(orderInfo[5])
    }

    purchase(){
        cy.get(this.purchaseButtonLocator).click()
    }
}