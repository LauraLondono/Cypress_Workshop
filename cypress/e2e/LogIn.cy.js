import { LandingPage } from "../../page-object/DemoblazeLandingpage"

describe('empty spec', () => {
  it('User logged in', () => {

    const loginInformation=['user232', 'password']
    const expectedText='Welcome user232'

    const home = new LandingPage
    const login = home.logIn()
    login.fillOutFields(loginInformation)
    login.LogIn()

    login.checkUsername(expectedText)

  })
})