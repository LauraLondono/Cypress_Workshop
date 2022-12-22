import { LandingPage } from "../../page-object/landingpage"

describe('empty spec', () => {
  it('Purchase complete', () => {

    const home = new LandingPage
    const laptops = home.goToLaptopsPage()
    const Macbook = laptops.clickMacbookPro()
    Macbook.clickAddToCart()
    home.goBacktoLandingPage()
    const phones = home.goToPhonesPage()
    const Nexus6 = phones.clickNexus6()
    Nexus6.clickAddToCart()
       
    const Cart=home.gotoCart()
    Cart.checkTotalText()
    const Order=Cart.placeOrder()
    Order.fillOutFields()
    


  })
})