describe('Cypress DropBox Handling',()=>{
    it ('DropBox Handling',()=>{
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.get('label input[type="checkbox"]').check(['option1','option2'])
       cy.get('select').select('option2').should('have.value','option2')
       cy.get('#autocomplete').as('dynamicSelect')
       cy.get('@dynamicSelect').type('ind')
       cy.get('li[class*="menu-item"]').each(function($el){
              const actualValue= $el.text()  
              if(actualValue==='India'){
                cy.wrap($el).click()
              }  
       })
       cy.get('@dynamicSelect').should('have.value','India')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')
       cy.get('label').contains('Radio1').find('input.radioButton').click().should('be.checked')

    })
})