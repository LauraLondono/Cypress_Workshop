import { LandingPage } from "../../page-object/DemoblazeLandingpage"

describe('empty spec', () => {

  const contactInfo=['hello123@testmail.com', '1Ma.ri^a Lopez', 'Testing the contact function']

  it('passes', () => {
    const home = new LandingPage
    const contactMessage=home.contact()

    contactMessage.fillOutFields(contactInfo)
    contactMessage.checkEmail()
    // contactMessage.checkName()
   
 
  })
})