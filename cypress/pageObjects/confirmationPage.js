class confirmationPage{
    static cartTotalValueValidation(number){
        let indexTotal=0
        let costElement =0
        cy.get('table tr th').each(($ele,index,$list)=>{
            let text=''
             cy.wrap($ele).then(function(elementText){
                text= elementText.text()
                if(text.toLowerCase().includes('total')){
                    indexTotal=index+1
                 }
              })      
            }).then(()=>{
                        cy.get(`tr td:nth-child(${indexTotal})[class*=text]`).each(($ele,index,$list)=>{
                        cy.wrap($ele).then(function(textTotal){
                                    let newcostElement= textTotal.children().text().split(" ")[1].trim()
                                    costElement= costElement+Number(newcostElement)
                                    cy.log(costElement)
                                    cy.wrap(costElement).then(function(total){
                                    expect(total).to.be.lessThan(number)
                            })
                        })
            })
        }) 
    }
    static clickCartSuccess(){
        cy.get('button[class*=success]').click()
    }
    
}
export default confirmationPage