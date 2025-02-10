class placeOrder{
    static countryCheck(country){
        cy.get('#country').type(country)  
        cy.get('div.suggestions').each(($ele,index,$list)=>{
          const suggestions= $ele.find('a').text()
          if(suggestions===country){
              cy.wrap($ele).click()
          }
      })
    }
    static clickConfirmCountry(){
        cy.get('input[id*=checkbox]').click({force:true})
        cy.get('input[class*=btn-success]').click()
    }
    static successOrderValidation(){
        cy.get('div[class*=alert]').should('contain','Success')  
    }
}
export default placeOrder