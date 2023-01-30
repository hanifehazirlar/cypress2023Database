
describe('DataBase test',()=>{
    it('Test01',()=>{
        cy.task('DATABASE',{
            dbConfig: Cypress.env('DB'),
            sql:'select * from physician where id=277670'
        }).then((result)=>{
            console.log(result)
            expect(result.rowCount).to.equal(1)
            expect(result.rows[0].id).to.eq('277670')
            expect(result.rows[0].first_name).to.eq('alime')
            expect(result.rows[0].last_name).to.eq('cann')
            expect(result.rows[0].phone).to.eq('5667890909')

            
            /*
    
    {id: '277670', first_name: 'alime', last_name: 'cann', 
      birth_date: '2001-10-13T18:00:00.000Z', phone: '5667890909', …}
    */
        })
       
    })

    it('Test02',()=>{
        cy.task('DATABASE',{
            dbConfig: Cypress.env('DB'),
            sql:'select * from physician where id=277670'
        }).then((result)=>{
            console.log(result)
            expect(result.rowCount).to.equal(1)
            assert.equal(result.rows[0].id,'277670')
            assert.equal(result.rows[0].first_name,'alime')
            assert.equal(result.rows[0].last_name,'cann')
            assert.equal(result.rows[0].phone,'5667890909')   
        })
       
    })
    it.only('Test03',()=>{
        cy.task('DATABASE',{
            dbConfig: Cypress.env('DB'),
            sql:'select * from physician where id=277670'
        }).then((result)=>{
            console.log(result)
            expect(result.rowCount).to.equal(1)
            expect(result.rows[0].id).to.have.string('277670')
            expect(result.rows[0].first_name).to.have.string('alime')
            expect(result.rows[0].last_name).to.have.string('cann')
            expect(result.rows[0].phone).to.have.string('5667890909')  
          // .to.have.string() methoduyla 2 dogrulama birden yapiliyor
        // 1. gelen data string mi
        // 2. gelen data beklenenle ayni mi?      
          
        })
       
    })
    
    })