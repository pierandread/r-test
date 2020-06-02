describe('test', () => {
  it('input should have the value typed', () => {
    cy.visit('/')
      .contains('Loading...')
    cy.contains('Rakuten TV')
      .get('a').first()
      .click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.include('/movie')
      })
    cy.get('button')
      .click()
      .location().should((loc) => {
        expect(loc.pathname).to.include('/trailer')
      })
    }
  );

})




