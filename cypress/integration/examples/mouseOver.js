describe('mouseover',function(){
    it ('mouseover functionality validation',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
    })
})