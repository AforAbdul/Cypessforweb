describe('Amazon webiste', ()=>{
    it('Amazon search',()=>{
        cy.visit('https://www.amazon.in/');
        cy.get('.nav-search-field').within(()=>{
            cy.get('#twotabsearchtextbox').type('Apple Mac Book Laptop');
        })
    })

});