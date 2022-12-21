
export class AsusFullPage{
    addToCartButtonLocator='.col-sm-12 > .btn'
    
    clickAddToCart(){
        cy.get(this.addToCartButtonLocator).click()
    }   

}