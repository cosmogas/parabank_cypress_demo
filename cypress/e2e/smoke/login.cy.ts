describe('Smoke Test: Login with registered user', () => {
    before(() => {
        cy.fixture('createdUser').as('user');
    });

    it('should log in with valid registered credentials', function () {
        cy.visit('/');
        cy.get('input[name="username"]').type(this.user.username);
        cy.get('input[name="password"]').type(this.user.password);
        cy.get('input[type="submit"]').click();

        cy.contains('Accounts Overview').should('be.visible');
    });
});
