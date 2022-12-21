import { MacbookProPage } from "./macbookProPage"

export class LaptopsPage{

    laptopPage = '[onclick="byCat(\'notebook\')"]'
    MacbookLinkLocator=':nth-child(6) > .card > .card-block > .card-title > .hrefch'

    constructor(){
        cy.get(this.laptopPage).click()
    }

    clickMacbookPro(){
        cy.get(this.MacbookLinkLocator).click()
        return new MacbookProPage
    }



    
    
}