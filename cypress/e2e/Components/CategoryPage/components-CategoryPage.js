class CategoryPage {
  selectSubcategory(subcategoryName) {
    cy.get(`a[href*="${subcategoryName}"]`).click();
  }
}

export const categoryPage = new CategoryPage();