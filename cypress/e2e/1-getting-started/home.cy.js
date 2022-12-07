/// <reference types="cypress" />

// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Test header and paragraph elements", () => {
  it("displays the header and paragraph elements with the correct text", () => {
    cy.visit("http://localhost:3000"); // visit the page
    cy.get("#header") // get the element with the id "header"
      .should("have.text", "Front-end developer test project"); // ensure the element has the correct text
    cy.get(".text-gray-600") // get the element with the class "text-gray-600"
      .should(
        "have.text",
        "Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then, typing text, and hitting enter."
      ); // ensure the element has the correct text
  });
});

describe("Test form and input elements", () => {
  it("displays the form and input elements with the correct classes and placeholder text", () => {
    cy.visit("http://localhost:3000"); // visit the page
    cy.get("form") // get the form element
      .find("input") // find the input element within the form
      .should("have.class", "outline-none") // ensure the input has the class "outline-none"
      .should("have.class", "mt-8") // ensure the input has the class "mt-8"
      .should(
        "have.attr",
        "placeholder",
        "type / for blocks, @ to link docs or people"
      ); // ensure the input has the correct placeholder text
  });
});

describe("Test form and input elements", () => {
  it('displays the PopUpCard component when the input value is "/1" or "/"', () => {
    cy.visit("http://localhost:3000"); // visit the page
    cy.get("form") // get the form element
      .find("input") // find the input element within the form
      .type("/1"); // type the "/1" string into the input
    cy.get(".PopUpCard") // get the PopUpCard component
      .should("exist"); // ensure the PopUpCard component exists
    cy.get("form") // get the form element
      .find("input") // find the input element within the form
      .clear() // clear the input
      .type("/"); // type the "/" string into the input
    cy.get(".PopUpCard") // get the PopUpCard component
      .should("exist"); // ensure the PopUpCard component exists
  });
});

describe("Test form and input elements", () => {
  it('displays the PopUpCard component when the input value is "/1" or "/", and clears the input and adds the correct classes after the form is submitted', () => {
    cy.visit("http://localhost:3000"); // visit the page
    cy.get("form") // get the form element
      .find("input") // find the input element within the form
      .type("/1"); // type the "/1" string into the input
    cy.get(".PopUpCard") // get the PopUpCard component
      .should("exist"); // ensure the PopUpCard component exists
    cy.get("form") // get the form element
      .submit(); // submit the form
    cy.get(".PopUpCard") // get the PopUpCard component
      .should("not.exist"); // ensure the PopUpCard component does not exist
    cy.get("form") // get the form element
      .find("input")
      .should("have.class", "outline-none")
      .should("have.class", "text-2xl");
  });
});
