describe('Counter component e2e tests', () => {
  it('should render 0, when prop "start" is not passed', () => {
    cy.visit('http://localhost:3000/');
    const strong = cy.get('strong');
    strong.should('have.text', '0');
  });
  it('should have increment and decrement button', () => {
    cy.visit('http://localhost:3000/');
    const incrBtn = cy.get('#incr-btn');
    incrBtn.should('have.text', '+');
    const decrBtn = cy.get('#decr-btn');
    decrBtn.should('have.text', '-');
  });
  it('should increment counter', () => {
    cy.visit('http://localhost:3000/');
    const incrBtn = cy.get('#incr-btn');
    incrBtn.click();
    incrBtn.click();
    incrBtn.click();
    const strong = cy.get('strong');
    strong.should('have.text', '3');
  });
  it('should decrement counter', () => {
    cy.visit('http://localhost:3000/');
    const decrBtn = cy.get('#decr-btn');
    decrBtn.click();
    decrBtn.click();
    decrBtn.click();
    const strong = cy.get('strong');
    strong.should('have.text', '-3');
  });
  it('should set input value, change counter value after "change" button click and reset counter value after "reset" button click', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').type('45');
    cy.get('#change-btn').click();
    cy.get('strong').should('have.text', '45');
    cy.get('#reset-btn').click();
    cy.get('strong').should('have.text', '0');
  });
});
