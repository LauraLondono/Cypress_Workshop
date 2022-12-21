import { LandingPage } from "../../page-object/landingpage.js"

describe('empty spec', () => {
  
  const expectedResult=['Nexus 6','Macbook Pro', 'Asus Full HD']
  
  it('passes', () => {
    const home = new LandingPage
    const phones = home.goToPhonesPage()
    const Nexus6 = phones.clickNexus6()
    Nexus6.clickAddToCart()
    home.goBacktoLandingPage()
    const laptops = home.goToLaptopsPage()
    const Macbook = laptops.clickMacbookPro()
    Macbook.clickAddToCart()
    home.goBacktoLandingPage()
    const monitors = home.goToMonitorsPage()
    const Asus=monitors.clickAsusFullHD()
    Asus.clickAddToCart()
    const Cart=home.gotoCart()
        
    Cart.checkAmountOfItems()
    Cart.checkElementTexts()
    
  
    // Cart.checkFirstElementName(expectedText)
 
  })
})