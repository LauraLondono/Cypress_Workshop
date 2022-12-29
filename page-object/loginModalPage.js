
export class LoginModal {
    usernameField='#loginusername'
    passwordField='#loginpassword'
    usernameText='#nameofuser'    
    loginButtonLocator='#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    fillOutFields(loginInfo){
        cy.get(this.usernameField).type(loginInfo[0])
        cy.get(this.passwordField).type(loginInfo[1])        
    }

    LogIn(){
        cy.get(this.loginButtonLocator).click()
    }

    checkUsername(expectedText){
        cy.get(this.usernameText).should('have.text',expectedText)
    }
}