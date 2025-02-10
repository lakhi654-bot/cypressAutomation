class loginPage{
    static goTo(url){
       cy.visit(url)
    }
    static enterUser(username,password){
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('input[value*=user]').click()
    }
    static signIn(){
        cy.get('select.form-control').select('stud',{ force: true }).should('have.value','stud')
        cy.get('input#terms').check({ force: true })
        cy.get('#signInBtn').click({ force: true })
        cy.get('a.nav-link').eq(0).contains('Home').should('have.text','Home')   
        cy.get('app-card').as('cardList').should('have.length',4)
    }
}
export default loginPage