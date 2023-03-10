import { LandingPage } from "../../page-object/DemoblazeLandingpage"

describe('empty spec', () => {
  it('Purchase complete', () => {

    const orderInfo=['Anna Diaz','Colombia', 'Cali', 122344, 'December', '2022']

    const home = new LandingPage
    const laptops = home.goToLaptopsPage()
    const Macbook = laptops.clickMacbookPro()
    Macbook.clickAddToCart()
    home.goBacktoLandingPage()

    const phones = home.goToPhonesPage()
    const Nexus6 = phones.clickNexus6()
    Nexus6.clickAddToCart()
       
    const Cart=home.gotoCart()
    Cart.checkTotalText(1750)
    const Order=Cart.placeOrder()
    Cart.checkTotalTextInModal('Total: 1750')
    Order.fillOutFields(orderInfo)
    Order.purchase()

  })
})