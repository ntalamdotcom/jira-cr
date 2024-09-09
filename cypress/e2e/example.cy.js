describe('Next.js Homepage', () => {
    it('should load the homepage and display the correct title', () => {
        // Visit the homepage
        cy.visit('http://localhost:3000/');

        // Assert that the title is correct
        cy.title().should('include', 'Create');
        // cy.title().should('include', 'Home');
        // Assert that a specific element exists and contains expected text
        cy.get('h1').contains('testing');
    });

    it('try to load the page again', () => {
        cy.visit('http://localhost:3000/')
    });
});