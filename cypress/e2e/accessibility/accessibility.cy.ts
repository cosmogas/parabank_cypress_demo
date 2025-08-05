describe('Accessibility: Axe-core soft check', () => {
    it('logs accessibility issues without failing the test', () => {
        cy.visit('/');
        cy.injectAxe();

        cy.checkA11y(null, null, (violations) => {
            if (violations.length) {
                cy.task('log', `${violations.length} accessibility violation(s) found:`);

                violations.forEach((v) => {
                    const nodes = v.nodes.map(n => n.html).join('\n');
                    cy.task('log', `---\n[${v.id}] ${v.help}\nImpact: ${v.impact}\nHelp: ${v.helpUrl}\nNodes:\n${nodes}`);
                });
            }
        }, { skipFailures: true });
    });
});

