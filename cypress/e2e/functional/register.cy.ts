describe('Functional: User Registration', () => {
    it('should successfully register a new user', () => {
        const user = {
            firstName: 'Test',
            lastName: 'User',
            address: '123 Test Street',
            city: 'Testville',
            state: 'TS',
            zipCode: '12345',
            phone: '1234567890',
            ssn: '123-45-6789',
            username: `user${Date.now()}`, // уникальное имя
            password: 'TestPass123',
        };

        cy.visit('/');
        cy.contains('Register').click();

        cy.get('input[name="customer.firstName"]').type(user.firstName);
        cy.get('input[name="customer.lastName"]').type(user.lastName);
        cy.get('input[name="customer.address.street"]').type(user.address);
        cy.get('input[name="customer.address.city"]').type(user.city);
        cy.get('input[name="customer.address.state"]').type(user.state);
        cy.get('input[name="customer.address.zipCode"]').type(user.zipCode);
        cy.get('input[name="customer.phoneNumber"]').type(user.phone);
        cy.get('input[name="customer.ssn"]').type(user.ssn);
        cy.get('input[name="customer.username"]').type(user.username);
        cy.get('input[name="customer.password"]').type(user.password);
        cy.get('input[name="repeatedPassword"]').type(user.password);

        cy.get('input[value="Register"]').click();

        cy.contains('Your account was created successfully').should('be.visible');


        cy.writeFile('cypress/fixtures/createdUser.json', user);
    });
});
