describe('user login', () => {
  it('open the website', () => {
    cy.visit('https://trade.sveradi.com/en/login')
    cy.xpath('//input[@name="email"]').type('farisbegovic87+5@gmail.com')
    cy.xpath('//input[@name="password"]').type('Sarajevo.123!')
    cy.xpath('//button[text()="Login"]').click()
    cy.xpath('//p[text()="Welcome to"]').should('be.visible')
  })
})
