
describe('ChildWindow',function(){
    Cypress.env('url', "https://rahulshettyacademy.com/AutomationPractice/" ) 
    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        let newHref
        cy.get('#opentab')
          .then(function(newTab)
           { newHref = newTab.prop('href') 
            Cypress.env('newTabHref', newHref ) 
           })
      })
    
    it ('Open new Tab',function(){
             
        cy.get('#opentab')
          .invoke('removeAttr','target')
          .click()
        cy.origin(Cypress.env('newTabHref'),function(){
            cy.get('ul[class*=navbar] a[href*=about]').click()
           cy.get('div[class*=mt-50] h2').should('have.text','Welcome to QAClick Academy ')
           cy.go('back')
        cy.visit(Cypress.env('url'))   
        })
        
        
    })
})