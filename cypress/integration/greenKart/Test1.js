//cypress - Spec
describe('My First Test', () => {
    it('Visits the Practice page', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca');
      cy.wait(2000)
      cy.get('.products').as('productList')
      cy.get('@productList').children().should('have.length',4)
      cy.get('.products').find('.product').contains('Cashews').parent().contains('ADD TO CART').click().then(function(){
        cy.log('Cashews are added to the cart')
      })
      cy.get('@productList').find('.product').each(($el, index, $list) => {
       const elementText =  $el.find('.product-name').text()
       if(elementText.includes('Carrot')){
        $el.find('button').click()
       }
      })
      cy.get('.brand').should('has.text','GREENKART').log('successfully verified text')
       cy.get('.brand').then(function(logElement){
             cy.log(logElement.text())
      })
      cy.get('a.cart-icon').click()
      cy.get('button').contains('CHECKOUT').click()
      cy.get('span.discountAmt~button').click()
      cy.get('input.chkAgree~button').should('be.visible').log('checkout page launched')
    })
  })