import { PSPage } from "../../page-object/PetstoreLandingPage"

describe('empty spec', () => {

  const petInfo=[14,'Polo']

  it('Pet deleted', () => {
    const store = new PSPage
    store.createPet(petInfo)
    store.findPet(petInfo,200)

    store.deletePet(petInfo[0])
    store.findPet(petInfo[0],404)  
  })
})