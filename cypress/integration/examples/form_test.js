describe('Tesing form inputs', () => {
    beforeEach(() => {
        cy.visit("http://10.0.0.186:3000/")
    })
    it("adding text inputs and submits the form", () => {
        cy.get("[data-cy=name]").type("Emily").should("have.value", "Emily");

        cy.get("[data-cy=email]").type("test@gmail.com").should("have.value", "test@gmail.com");
        
        cy.get("[data-cy=motivation]").type("I want to help").should("have.value", "I want to help");

        cy.get("[data-cy=positions]").select("Tabling").should("have.value", "Tabling");

        cy.get("[data-cy=terms]").check().should("be.checked");

        cy.get("[data-cy=submit]").click();
    });
})