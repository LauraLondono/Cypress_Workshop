function checkWithPattern(text){
    const pattern = '[0-9a-zA-Z+._-]+@[0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}'
    if(!(text.match(pattern))) {
        return false    
    }
    else{
        return true
    }
}

export class ContactModal {
    emailField='#recipient-email'
    nameField='#recipient-name'
    msgField='#message-text'
    sendMessageButtonLocator='#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    fillOutFields(contactInfo){
        // console.log(contactInfo)
        cy.get(this.emailField).type(contactInfo[0])
        cy.get(this.nameField).type(contactInfo[1])
        cy.get(this.msgField).type(contactInfo[2])
        this.checkEmail(contactInfo[0])
    }

    sendMessage(){

        cy.get(this.sendMessageButtonLocator).click()
    }

    checkEmail(text) {
        // cy.get(checkWithPattern(text)).isTrue(true, 'Valid email')
        // cy.get(this.emailField).should('match', text)

        console.log(this.emailField.value)
    }    
}   
    