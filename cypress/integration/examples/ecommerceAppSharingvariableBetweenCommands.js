Cypress.env('url',"https://rahulshettyacademy.com/loginpagePractise/#/")
const product = ['Nokia','iphone']
let indexTotal=0
let costElement =0

describe('ecommerce Application practise',function(){
    it('login Page',function(){
        
        cy.visit(Cypress.env('url'))
        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')
        cy.get('input[value*=user]').click()
        cy.get('select.form-control').select('stud',{ force: true }).should('have.value','stud')
        cy.get('input#terms').check({ force: true })
        cy.get('#signInBtn').click({ force: true })
        cy.get('a.nav-link').eq(0).contains('Home').should('have.text','Home')   
        cy.get('app-card').as('cardList').should('have.length',4)
        cy.log(`${product[0]}`)
        cy.wrap(product).should('have.length',2).each((number,index,$list)=>{
            cy.get('app-card').filter(`:contains("${number}")`)
                         .then(function($element){
                               cy.wrap($element).contains('button','Add').click()
                         })
                        })
        cy.contains('a','Checkout').click()
        
        cy.get('table tr th').each(($ele,index,$list)=>{
            let text=''
            cy.wrap($ele).then(function(elementText){
                text= elementText.text()
                if(text.toLowerCase().includes('total')){
                    indexTotal=index+1
                    cy.wrap(indexTotal).as('index')
                 }
              })      
            })
        cy.get('@index').then(function(number){
                cy.get(`tr td:nth-child(${number})[class*=text]`).each(($ele,index,$list)=>{
                        cy.wrap($ele).then(function(textTotal){
                                    let newcostElement= textTotal.children().text().split(" ")[1].trim()
                                    costElement= costElement+Number(newcostElement)
                                    cy.log(costElement)
                                    cy.wrap(costElement).then(function(total){
                                    expect(total).to.be.lessThan(200000)
                            })
                        })
            })
        })                
        
    })
})