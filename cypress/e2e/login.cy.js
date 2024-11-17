describe('Localstack login tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081')
    }) 

    it('Successfully logs in', () => {
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button').contains('Login').click()
        cy.contains('Hi Slawomir')
    })

    it('Failed log in', () => {
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('badpass')
        cy.get('button').contains('Login').click()
        cy.contains('Invalid username/password supplied')
    })
})