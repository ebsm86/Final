class HomePage {
  visit() {
    cy.visit('https://www.casaideas.cl/');
  }

  goToRegisterPage() {
    cy.get('a[href="/register"]').click();
  }

  goToLoginPage() {
    cy.get('a[href="/login"]').click();
  }

  selectCategory(categoryName) {
    cy.get(`a[href*="${categoryName}"]`).click();
  }
}

export const homePage = new HomePage();