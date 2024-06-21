describe('Meu Primeiro teste', () =>{
  it('Não faz muito!', ()=>{
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})