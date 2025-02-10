class cartPage{
    static cartPageLoadedValidation(){
        cy.get('a.nav-link').eq(0).contains('Home').should('have.text','Home') 
    }
    static productsValidation(){
        cy.get('app-card').as('cardList').should('have.length',4)
    }
    static addProducts(products){
        cy.wrap(products).should('have.length',2).each((number,index,$list)=>{
            cy.get('app-card').filter(`:contains("${number}")`)
                         .then(function($element){
                               cy.wrap($element).contains('button','Add').click()
                         })
                        })
    }
    static clickCheckout(){
        cy.contains('a','Checkout').click()
    }
}
    export default cartPage;
