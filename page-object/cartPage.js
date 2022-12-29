import { OrderModal } from "./orderModalPage"

function texts(elements){
    return Cypress.$.map(elements,(value,index)=>
    value.innerText
    )
  }

export class CartPage{
    firstProductnameLocator= '.success > :nth-child(2)'
    namesLocator='#tbodyid > .success > :nth-child(2)'
    deleteFromCartButtonLocator= '#tbodyid > :nth-child(1) > :nth-child(4) > a'
    totalTextLocator='#totalp'
    placeOrderButtonLocator='.col-lg-1 > .btn'
    totalTextInModalLocator='#totalm'

    checkFirstElementName(name){
        cy.get(this.firstProductnameLocator).should('have.text',name)
    }

    checkElementTexts(names){
      cy.get(this.namesLocator).then((elements)=>{
        const textsOfItems= texts(elements)
        expect(textsOfItems).to.be.oneOf(names)
       })
    }

    checkAmountOfItems(numberItems){
        cy.get(this.namesLocator).should('have.length', numberItems)
    }

    deleteFromCart(){
      cy.get(this.deleteFromCartButtonLocator).click()
    }

    checkTotalText(totalText){
      cy.get(this.totalTextLocator).should('have.text', totalText)
    }

    checkTotalTextInModal(totalText){
      cy.get(this.totalTextInModalLocator).should('have.text', totalText)
    }

    placeOrder(){
      cy.get(this.placeOrderButtonLocator).click()
      return new OrderModal
    }

}