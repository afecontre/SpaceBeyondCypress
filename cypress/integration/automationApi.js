describe('Get Your Votes api', () => {
    context('GET /votes', () => {
        it('Returns all the Votes belonging to your Account', () => {
            cy.request({
                method: 'GET',
                url: 'https://api.thecatapi.com/v1/votes',
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "DEMO-API-KEY"
                },
            })

                .should((response) => {
                    expect(response.status).to.eq(200)

                    Cypress._.each(response.body.array, (array) => {
                        expect(array.id).to.not.be.null
                        expect(array.id).to.have.all.keys('country_code', 'created_at', 'id', 'image_id', 'sub_id', 'value')

                    })

                });
        });
    });


    context('POST /Create Votes', () => {
        it('Send  Vote', () => {
            cy.request({
                method: 'POST',
                url: 'https://api.thecatapi.com/v1/votes',
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "DEMO-API-KEY"
                },

                body: {
                    "image_id": "31400",

                    "value": 0
                }
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body).has.property("message", "SUCCESS")

                });

        });
    });

    context('DELET /Delete Votes', () => {
        it('Delete Vote', () => {
            cy.request({
                method: 'DELETE',
                url: 'https://api.thecatapi.com/v1/votes/471058',
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "DEMO-API-KEY",

                },
                Path_Variables: {

                }
            })
                .then((response) => {
                    expect(response.status).eq(200);
                    expect(response).to.have.property('headers')
                    expect(response).to.have.property('duration')
                    expect(response.body).has.property("message", "SUCCESS")

                });

        })

    })

})










