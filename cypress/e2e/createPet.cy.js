import { PSPage } from "../../page-object/PetstoreLandingPage"

describe('empty spec', () => {

  const petInfo=[12,'Daisy']

  it('passes', () => {

    const store = new PSPage
    store.createPet(petInfo)
    store.findPet(petInfo) 
    
  })
})