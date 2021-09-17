export default describe('starter greets with Hello World', () => {
  it('should say Hello World', () => {
    cy.get('h1').should('have.text', 'Hello, world!');
  });
});
