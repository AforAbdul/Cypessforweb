describe('testing diff view ports', ()=> {
    before( () => {
        console.log('running my test');
    })
    beforeEach(()=>{
        cy.visit(' https://www.google.com')
    })
    it('open in iPhone', ()=>{
        cy.viewport('iphone-6') // Set viewport to 375px x 667px
        cy.screenshot()
        cy.wait(200)
    })
    
    it('open in Samsung', ()=>{
        cy.viewport('samsung-s10') // Set viewport to 375px x 667px
        cy.screenshot()
        cy.wait(200);
    })

})