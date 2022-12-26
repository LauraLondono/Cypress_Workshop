
export class ContactModal {
    emailField='#recipient-email'
    nameField='#recipient-name'
    msgField='#message-text'
    
    sendMessageButtonLocator='#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    fillOutFields(contactInfo){
        console.log(contactInfo)
        cy.get(this.emailField).type(contactInfo[0]).should('contain','@')
        cy.get(this.nameField).type(contactInfo[1])
        cy.get(this.msgField).type(contactInfo[2])
        
    }

    sendMessage(){
        cy.get(this.sendMessageButtonLocator).click()
    }

    checkEmail(){
        cy.get(this.emailField).should('contain','@')

    }
}