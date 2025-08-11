describe('Smoke: Logout', () => {
    before(() => cy.fixture('createdUser').as('user'));
    it('logs out successfully', function () {
        cy.login(this.user.username, this.user.password);
        cy.contains('Log Out').click();
        cy.get('input[name="username"]').should('be.visible');
    });
});