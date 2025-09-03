describe('element get concept', ()=> {
    it ('element get testing',()=>{
        cy.visit('https://jandipr.com/');
        cy.contains('Ver perfil').click();
        cy.url().should('include', '/worker-service')
cy.get('div.flex.flex-col.gap-4 h1.text-xl.font-semibold.capitalize')
  .eq(2)  // selects the third element (index 0,1,2)
  .should('be.visible')
  .and('contain', 'Disponibilidad');

    } );

});