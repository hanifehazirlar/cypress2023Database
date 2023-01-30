
describe('Male and Female Physicians',()=>{
    it('Male Physicians',()=>{
        cy.task("DATABASE",{
            dbConfig: Cypress.env('DB'),
            sql:"select*from physician where gender='MALE'"
        }).then((result)=>{
            console.log(result.rows)
            expect(result.rowCount).to.eq(553)
        })
    })
    it.only('Female Physicians',()=>{
        cy.task("DATABASE",{
            dbConfig: Cypress.env('DB'),
            sql:"select*from physician where gender='FEMALE'"
        }).then((result)=>{
            console.log(result.rows)
            expect(result.rowCount).to.eq(99)
        })
    })

})