import { PSPage } from "../../page-object/PetstoreLandingPage"

describe('empty spec', () => {

  const orderInfo=[2, 15, 2]
  const petInfo=[15,'Chocko' ]

  it('Order deleted', () => {
    const store = new PSPage
    store.createPet(petInfo)
    store.findPet(petInfo,200)
    store.createOrder(orderInfo, 200)
    store.findOrder(orderInfo[0], 200, 'placed')
    store.deleteOrder(orderInfo[0], 200)
    store.findOrder(orderInfo[0], 404, undefined)
  })
})