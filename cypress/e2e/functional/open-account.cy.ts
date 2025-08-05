describe('Functional: Open New Account', () => {
    before(() => {
        cy.fixture('createdUser').as('user');
    });

    beforeEach(function () {
        cy.visit('/');
        cy.get('input[name="username"]').type(this.user.username);
        cy.get('input[name="password"]').type(this.user.password);
        cy.get('input[type="submit"]').click();
        cy.contains('Accounts Overview').should('be.visible');
    });

    it('should open a new account successfully', () => {
        cy.contains('Open New Account').click();

        cy.get('select#type').select('SAVINGS');

        cy.get('select#fromAccountId')
            .find('option')
            .first()
            .then(option => {
                const value = option.val();
                if (value) {
                    cy.get('select#fromAccountId').select(value.toString());
                } else {
                    throw new Error('No account options found');
                }
            });

        cy.get('input.button').click();

        cy.contains('Account Opened!').should('be.visible');
        cy.get('#newAccountId').should('exist');
    });
});

