import { LandingPage } from "../../page-object/landingpage.js"

describe('empty spec', () => {

  const contactInfo=['hello123testmail.com', 'Maria Lopez', 'Testing the contact function']

  it('passes', () => {
    const home = new LandingPage
    const contactMessage=home.contact()

    contactMessage.fillOutFields(contactInfo)

    // contactMessage.sendMessage()

    // contactMessage.checkEmail()
 
  })
})