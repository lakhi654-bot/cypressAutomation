describe('Data Table',function(){
    it ('Data Table validation',function(){
          cy.visit('https://rahulshettyacademy.com/AutomationPractice')  
          cy.get('table.table-display tr td:nth-child(2)')
            .each(function($el,index,$list){
                 const course = $el.text()
                
                 if(course.toLowerCase().includes('python')){
                    cy.get('table.table-display tr td:nth-child(2)')
                      .eq(index)
                      .next()
                      .then(function($price){
                        const priceElement = $price.text()
                        expect(priceElement).to.equal('25')
                      })
                     
                 }
            }) 
    })
})