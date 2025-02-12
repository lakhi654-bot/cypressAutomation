// import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
const {
    Before,
    After,
    Given,
    Then
  } = require("cypress-cucumber-preprocessor/steps");
import cartPage from '../../../../pageObjects/cartPage'
import loginPage from '../../../../pageObjects/loginPage'
import confirmationPage from '../../../../pageObjects/confirmationPage'
import placeOrder from '../../../../pageObjects/placeOrder'
Before(function(){
    cy.fixture('ecommerceData.json').then(function(data){
        this.data=data
    })
})
Given('customer launchs url',function(){
    loginPage.goTo(Cypress.env('url'))
   
})
When ('user enters username and password',function(){
    loginPage.enterUser(this.data.username,this.data.password)
    loginPage.signIn()
    cartPage.cartPageLoadedValidation()
    
})
When ('user enters username and password portal',function(datatable){
    loginPage.enterUser(datatable.rawTable[1][0],datatable.rawTable[1][1])
    loginPage.signIn()
    cartPage.cartPageLoadedValidation()
    
})
And ('add items in the cart and checkout',function(){
    cartPage.productsValidation()
    cartPage.addProducts(this.data.product)
    cartPage.clickCheckout()
})
And ('validate the total limit',function(){
    confirmationPage.cartTotalValueValidation(200000)
    confirmationPage.clickCartSuccess()
     
})
Then ('select the country and validate success',function(){
    placeOrder.countryCheck('India')
    placeOrder.clickConfirmCountry()
    placeOrder.successOrderValidation() 
})