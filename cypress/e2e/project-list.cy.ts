import mockProjects from "../fixtures/projects.json";
import { ProjectStatus } from "@api/projects.types";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders loading icon", () => {
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        delayMs: 100,
        fixture: "projects.json",
      });

      cy.visit(`http://localhost:3000/dashboard`);

      // Check if the loader is visible
      cy.get(`[data-cy="loader"]`).should("be.visible");

      // Check if the loader is not visible
      cy.get(`[data-cy="loader"]`).should("not.exist");
    });

    context("serror handling", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard");
      });

      it("renders error message", () => {
        cy.intercept("GET", "https://prolog-api.profy.dev/project", {
          statusCode: 500,
          body: { error: "Internal Server Error" },
        });

        cy.wait(7000);

        cy.get('[data-cy="alert"]').should("be.visible");
      });

      it("reloads page after error", () => {
        cy.intercept("GET", "https://prolog-api.profy.dev/project", {
          statusCode: 500,
          body: { error: "Internal Server Error" },
        });

        cy.wait(7000);

        cy.get('[data-cy="alert-button"]').click();

        cy.intercept("GET", "https://prolog-api.profy.dev/project", (req) => {
          req.reply();
        });
      });
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusMessages = {
        [ProjectStatus.info]: "Stable",
        [ProjectStatus.warning]: "Warning",
        [ProjectStatus.error]: "Critical",
      };

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          const status = mockProjects[index].status as ProjectStatus;
          cy.wrap($el).contains(statusMessages[status]);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
