describe('My third Test', () => {
    it('should check wrong way 3', () => {
        cy.visit('http://localhost:3000/#/');
        cy.get('button[type="submit"]').click();
        cy.get('.ant-form-item:eq(0)').should('have.class', 'ant-form-item-has-error')
        cy.get('.ant-form-item:eq(1)').should('have.class', 'ant-form-item-has-error')
        cy.get('.ant-form-item:eq(2)').should('have.class', 'ant-form-item-has-error')
    })
})