function checkWithPattern(text){
    // const pattern = '[0-9a-zA-Z+._-]+@[0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}'
    const pattern = '^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$'
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
    pattern='[a-zA-Z]*'

    fillOutFields(contactInfo){
        cy.get(this.emailField).type(contactInfo[0])
        cy.get(this.nameField).type(contactInfo[1])
        cy.get(this.msgField).type(contactInfo[2])
    }

    sendMessage(){
        cy.get(this.sendMessageButtonLocator).click()
    }

    checkEmail() {
        cy.get(this.emailField).invoke('val')
        .then((text)=>{
            expect(checkWithPattern(text)).to.be.true
        })    

    }   

    


    
    checkName() {
        // cy.get(this.nameField).invoke('val')
        // .then((text)=>{
        //     assert.isNotNumber(text, 'Name should not contain numbers')
        // }) 
        
        // cy.get(this.nameField).invoke('val').then(cy.log)
        // cy.get(this.nameField).invoke('val')
        // .should(value => {
        //     expect(Number.isNaN(value), 'Name should not have numbers').to.eq(false)    
        // })
        

         cy.get(this.nameField).invoke('val')
         .should('match',/[0-9]+/)
    }    
}   
    