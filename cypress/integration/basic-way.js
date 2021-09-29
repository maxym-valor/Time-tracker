describe('My First Test', () => {
    it('should check basic way', () => {
        cy.visit('http://localhost:3000/#/');
        cy.get('#name').type('Maxym');
        cy.get('.ant-select-selection-search-input').click();
        cy.get('[title="Clementine Bauch"]').click();
        cy.get('#time').type('03:00:00', {force: true});
        cy.get('.ant-picker-ok button').click();
        cy.get('button[type="submit"]').click();
    })
})