
export class Nexus6Page{
    addToCartButtonLocator='.col-sm-12 > .btn'
    
    clickAddToCart(){
        cy.get(this.addToCartButtonLocator).click()
    }   

}