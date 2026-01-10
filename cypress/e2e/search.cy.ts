describe('search product', () => {
  it('should be able to search for a product', () => {
    cy.visit('/');

    const searchQuery = 'moletom';
    cy.get('input[name=q]').type(searchQuery).parent('form').submit();

    cy.location('pathname').should('include', '/search');
    cy.location('search').should('include', `q=${searchQuery}`);

    cy.get('a[href^="/product"]').should('exist');
  });

  it('should be able redirected to homepage if search page is accessed without a search query', () => {
    // Next.js redirect comes back as exception on Cy
    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.visit('/search');

    cy.location('pathname').should('equal', '/');
  });
});
