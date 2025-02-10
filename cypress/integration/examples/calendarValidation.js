Cypress.env('url',"https://rahulshettyacademy.com/seleniumPractise/#/")
describe('CalenderValidation',function(){
    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        cy.get('.cart a[href*=offers]').as('hrefElement').then(function($element){
            const href= $element.prop('href')
            Cypress.env('href',href)
         })
      })
    it('CalenderValidation',function(){
        // cy.get('@hrefElement').click()
       cy.visit(Cypress.env('href'))
        cy.get('input[class*=month]').type('6')
        cy.get('input[class*=day]').type('16')
        cy.get('input[class*=year]').type('2025')
        cy.get('button[class*=calendar-button]').click()
       
    })
})