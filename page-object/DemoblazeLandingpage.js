import { CartPage } from "./cartPage"
import { ContactModal } from "./contactModalPage"
import { LaptopsPage } from "./laptopsPage"
import { LoginModal } from "./loginModalPage"
import { MonitorsPage } from "./monitorsPage"
import { PhonesPage } from "./phonesPage"


export class LandingPage{
    landingPageUrl='https://www.demoblaze.com'
    SamsungLinkLocator=':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    homepageUrl='#nava'
    cartButtonLocator='#cartur'
    contactButtonLocator=':nth-child(2) > .nav-link'
    loginButtonLocator='#login2'

   constructor(){
        cy.visit(this.landingPageUrl)
    }

    goBacktoLandingPage(){
        cy.get(this.homepageUrl).click()
    }

    goToPhonesPage(){
        return new PhonesPage
    }

    goToLaptopsPage(){
        return new LaptopsPage
    }

    goToMonitorsPage(){
        return new MonitorsPage
    }

    gotoCart(){
        cy.get(this.cartButtonLocator).click()
        return new CartPage
    }

    contact(){
        cy.get(this.contactButtonLocator).click()
        return new ContactModal
    }

    logIn(){
        cy.get(this.loginButtonLocator).click()
        return new LoginModal
    }

}

