import { Nexus6Page } from "./nexus6page"

export class PhonesPage{

    phonePage = '[onclick="byCat(\'phone\')"]'
    NexusLinkLocator=':nth-child(3) > .card > .card-block > .card-title > .hrefch'

    constructor(){
        cy.get(this.phonePage).click()
    }

    clickNexus6(){
        cy.get(this.NexusLinkLocator).click()
        return new Nexus6Page
    }
    
}