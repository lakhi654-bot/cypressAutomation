describe('alertAutomation',function(){
    it ('alertValidation',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy .get('#alertbtn').click()
        
        cy.on('window:alert',(str)=>{
            expect(str).to.contains('share this practice page and share your knowledge')
        })

        // cy .get('#confirmbtn').click()
        // cy.on('window:confirm',(str)=>{
        //     expect(str).to.contains('Are you sure you want to confirm?')
        // })
        cy.on('window:false',(str)=>{
            return false
        })
        cy .get('#confirmbtn').click()
    })
})