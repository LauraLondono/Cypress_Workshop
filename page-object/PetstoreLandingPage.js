
export class PSPage{
    baseUrl= 'https://petstore.swagger.io/v2'
    petsPath='/pet'
    storePath='/store'
    apiKey='1000'

    createPet(petInfo){
        cy.request({
            method: 'POST', 
            url: this.baseUrl+this.petsPath,
            body: {
                "id": petInfo[0],
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": petInfo[1],
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                    "id": 0,
                    "name": "string"
                    }
                ],
                "status": "available"
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
          })
    }

    findPet(petInfo, status){
        cy.request({
            method: 'GET', 
            url: this.baseUrl+this.petsPath+'/'+petInfo[0],
            headers:{api_key:this.apiKey},
            failOnStatusCode:false
        }).then((response) => {
            expect(response.status).to.eq(status)
            expect(response.body.name).equal(petInfo[1])
          })    
    }

    deletePet(petId){
        cy.request({
            method: 'DELETE', 
            url: this.baseUrl+this.petsPath+'/'+petId,
            headers:{api_key:this.apiKey}
        }).then((response) => {
            expect(response.status).to.eq(200)
          })  
    }

    createOrder(orderInfo, status){
        cy.request({
            method: 'POST', 
            url: this.baseUrl+this.storePath+'/order',
            body:{
                "id": orderInfo[0],
                "petId": orderInfo[1],
                "quantity": orderInfo[2],
                "shipDate": "2022-12-29T18:10:40.473Z",
                "status": "placed",
                "complete": true
              }
        }).then((response) => {
            expect(response.status).to.eq(status)
          })

    }

    findOrder(orderId, status, text){
        cy.request({
            method: 'GET', 
            url: this.baseUrl+this.storePath+'/order/'+orderId,
            failOnStatusCode:false
        }).then((response) => {
            expect(response.status).to.eq(status)
            expect(response.body.status).equal(text)
            expect(response.body.id).equal(orderId)

          })   
    }

    deleteOrder(orderId, status){
        cy.request({
            method: 'DELETE', 
            url: this.baseUrl+this.storePath+'/order/'+orderId,
            headers:{api_key:1000}
        }).then((response) => {
            expect(response.status).to.eq(status)
          })  
    }

    

}