describe('PIZZA', () => {
    it('RUNS THE SITE', () => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('HAS A NAME', () => {
        cy.get('input[name="name"]')
            .type('Erick Canales')
            .should('have.value', 'Erick Canales')
    })
    it('HAS A SIZE', () => {
        cy.get('select[name="size"]')
            .select('large')
    })
    it('HAS TOPPINGS', () => {
        cy.get('input[name="pepperoni"]')
            .check()
        cy.get('input[name="sausage"]')
        .check()
    })

    it('CAN SUBMIT FORM', () => {
        cy.get('input[name="name"]')
            .should('have.value', 'Erick Canales')
        cy.contains('Add to Order')
            .click()
    })
        
})