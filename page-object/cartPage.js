function texts(elements){
    return Cypress.$.map(elements,(value,index)=>
    value.innerText
    )
  }

export class CartPage{
    firstProductnameLocator= '.success > :nth-child(2)'
    namesLocator='#tbodyid > .success > :nth-child(2)'
    
    
    checkFirstElementName(name){
        cy.get(this.firstProductnameLocator).should('have.text',name)
    }

    checkElementTexts(names){
      cy.get(this.namesLocator).then((elements)=>{
        textsOfItems= texts(elements)
        expect(textsOfItems).to.be.oneOf(names)
        
       })

    }

    checkAmountOfItems(){
        cy.get(this.namesLocator).should('have.length', 3)
    }



}