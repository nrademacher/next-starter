export default describe('Counter manipulation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('default to 0', () => {
    cy.get('[class*=value]').should('have.text', '0');
  });

  it('decrements value', () => {
    cy.get('[aria-label="Decrement value"]').click();
    cy.get('[class*=value]').should('have.text', '-1');
  });

  it('increments value', () => {
    cy.get('[aria-label="Increment value"]').click();
    cy.get('[class*=value]').should('have.text', '1');
  });

  it('increments by amount', () => {
    cy.get('[aria-label="Set increment amount"]').type("{backspace}42");
    cy.get('#add-amount-btn').click();
    cy.get('[class*=value]').should('have.text', '42');
  });

  it('increments async', () => {
    cy.get('[aria-label="Set increment amount"]').type("{backspace}7");
    cy.get('[class*=asyncButton]').click();
    cy.get('[class*=value]').should('have.text', '7');
  });

  it('increments if amount is odd', () => {
    cy.get('[aria-label="Set increment amount"]').type("{backspace}8");
    cy.get('#add-amount-btn').click();
    cy.get('#increment-odd-btn').click();
    cy.get('[class*=value]').should('have.text', '8');
    
    cy.get('[aria-label="Increment value"]').click();
    cy.get('#increment-odd-btn').click();
    cy.get('[class*=value]').should('have.text', '17');
  });
});
