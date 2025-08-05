describe('Critical: Transfer Funds Between Accounts', () => {
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

    it('should transfer funds between accounts', function () {
        cy.contains('Transfer Funds').click();

        cy.get('input#amount').type('100');

        cy.get('select#fromAccountId')
            .find('option')
            .eq(0)
            .then(fromOption => {
                const fromValue = fromOption.val();
                if (fromValue) {
                    cy.get('select#fromAccountId').select(fromValue.toString());
                }
            });

        cy.get('select#toAccountId')
            .find('option')
            .eq(1)
            .then(toOption => {
                const toValue = toOption.val();
                if (toValue) {
                    cy.get('select#toAccountId').select(toValue.toString());
                }
            });

        cy.get('input.button').click();

        cy.contains('Transfer Complete!').should('be.visible');
        cy.contains('$100.00').should('be.visible');
    });
});
