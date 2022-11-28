declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Use inject rather than mount
       * @example cy.inject(<Thing />)
       */
      inject(value: JSX.Element): Cypress.Chainable<any>;
    }
  }
}

export {};
