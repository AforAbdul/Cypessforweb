describe('element get concept', ()=> {
    it ('element get testing',()=>{
        cy.visit('https://qajandi.codesorbit.net');

        // Targeting an element with exact attribute value match
        // cy.contains('Ver perfil').click();
        // cy.url().should('include', '/worker-service')
        // cy.get('div.flex.flex-col.gap-4 h1.text-xl.font-semibold.capitalize')
        // .eq(2)  // selects the third element (index 0,1,2)
        // .should('be.visible')
        // .and('contain', 'Disponibilidad');


// Targeting an element with attribute value contains
        // cy.get('div.footer-section ul li')
        // .should('have.length', 3)
        // cy.get('div.footer-section ul li')
        // .find("a[href*='/services']")
        // .should('have.length',1);

//Targeting an email and password field and logging in with custom command
        // cy.contains('☰').click();
        // cy.contains('Iniciar sesión').click();
        // cy.login('new.feature@yopmail.com', 'Test@123');
        // cy.contains('☰').click().wait(5000);
        // cy.contains('Cerrar sesión').click();
        // cy.logout();

// Using Fixtures for login
cy.fixture('example').then(function (data){
    this.data = data;
    cy.contains('☰').click();
    cy.contains('Iniciar sesión').click();
    cy.login(this.data.email, this.data.password);
    cy.contains('☰').click();
  
    cy.logout();
    
})

    });

});
