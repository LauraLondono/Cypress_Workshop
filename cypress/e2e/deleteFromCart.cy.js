import { LandingPage } from "../../page-object/DemoblazeLandingpage"

describe('empty spec', () => {
  it('Items deleted from cart', () => {

    const home = new LandingPage
    const laptops = home.goToLaptopsPage()
    const Macbook = laptops.clickMacbookPro()
    Macbook.clickAddToCart()
    Macbook.clickAddToCart()
    Macbook.clickAddToCart()
    
    const Cart=home.gotoCart()
    Cart.checkAmountOfItems(3)
    Cart.checkTotalText(3300)
    Cart.deleteFromCart()
    Cart.checkAmountOfItems(2)    
    Cart.checkTotalText(2200)
    Cart.deleteFromCart()
    Cart.checkAmountOfItems(1)
    Cart.checkTotalText(1100)


  })
})


//borrar productos
//agregar productos de todas categorias
//completar compra
//log in con POM y AAA
//try contacto with incorrect and correct email

