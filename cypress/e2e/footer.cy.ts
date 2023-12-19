import packageJSON from "./../../package.json";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("Desktop", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders app version", () => {
      cy.get("footer").find("p").contains(`Version: ${packageJSON.version}`);
    });

    it("renders the footer links", () => {
      cy.get("footer ul li a").each((linkElement, index) => {
        const linkNames = ["Docs", "API", "Help", "Community"];
        expect(linkElement.text().trim()).to.equal(linkNames[index]);
        cy.wrap(linkElement).should("have.attr", "href", "#");
      });
    });
  });

  context("Mobile", () => {
    beforeEach(() => {
      cy.viewport(375, 667);
    });

    it("checks if footer elements are in correct order", () => {
      cy.get("footer ul").should("have.css", "order", "0");
      cy.get("footer").find("img").should("have.css", "order", "0");
      cy.get("footer").find("p").should("have.css", "order", "0");
    });
  });
});
