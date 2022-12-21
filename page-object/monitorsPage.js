import { AsusFullPage } from "./asusFullPage"

export class MonitorsPage{

    monitorsPage = '[onclick="byCat(\'monitor\')"]'
    MonitorLinkLocator=':nth-child(2) > .card > .card-block > .card-title > .hrefch'

    constructor(){
        cy.get(this.monitorsPage).click()
    }

    clickAsusFullHD(){
        cy.get(this.MonitorLinkLocator).click()
        return new AsusFullPage
    } 
    
}