import { CartPage } from "./cartPage"
import { LaptopsPage } from "./laptopsPage"
import { MonitorsPage } from "./monitorsPage"
import { PhonesPage } from "./phonesPage"


export class LandingPage{
    landingPageUrl='https://www.demoblaze.com'
    SamsungLinkLocator=':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    homepageUrl='#nava'
    cartButtonLocator='#cartur'

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

}

