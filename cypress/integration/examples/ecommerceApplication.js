import cartPage from '../../pageObjects/cartPage'
import loginPage from '../../pageObjects/loginPage'
import confirmationPage from '../../pageObjects/confirmationPage'
import placeOrder from '../../pageObjects/placeOrder'
describe('ecommerce Application practise',function(){
    before(function(){
        cy.fixture('ecommerceData.json').then(function(data){
            this.data=data
        })
    })
   
    it('login Page',function(){
        
        loginPage.goTo(Cypress.env('url'))
        loginPage.enterUser(this.data.username,this.data.password)
        loginPage.signIn()
          
        cartPage.cartPageLoadedValidation()
        cartPage.productsValidation()
        cartPage.addProducts(this.data.product)
        cartPage.clickCheckout()
        
        confirmationPage.cartTotalValueValidation(200000)
        confirmationPage.clickCartSuccess()
         
        placeOrder.countryCheck('India')
        placeOrder.clickConfirmCountry()
        placeOrder.successOrderValidation()         
        
    })
})