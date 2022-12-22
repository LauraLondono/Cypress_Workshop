import { LandingPage } from "../../page-object/landingpage"

describe('empty spec', () => {
  it('passes', () => {

    const home = new LandingPage
    const laptops = home.goToLaptopsPage()
    const Macbook = laptops.clickMacbookPro()
    Macbook.clickAddToCart()
    Macbook.clickAddToCart()
    Macbook.clickAddToCart()
    
    const Cart=home.gotoCart()
    Cart.checkAmountOfItems(3)
    Cart.deleteFromCart()
    Cart.checkAmountOfItems(2)
    Cart.deleteFromCart()
    Cart.checkAmountOfItems(1)


  })
})


//borrar productos
//agregar productos de todas categorias
//completar compra
//log in con POM y AAA
//try contacto with incorrect and correct email

