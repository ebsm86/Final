import { homePage } from '../../pages/homePage';
import { registerPage } from '../../pages/registerPage';
import { loginPage } from '../../pages/loginPage';
import { categoryPage } from '../../pages/categoryPage';

describe('CasaIdeas User Actions', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('should register a new user', () => {
    const user = {
      firstName: 'Juan',
      lastName: 'Perez',
      email: 'juan.perez@example.com',
      password: 'Password123',
      confirmPassword: 'Password123'
    };

    homePage.goToRegisterPage();
    registerPage.fillRegistrationForm(user);
    registerPage.submit();

    // Add assertions to verify successful registration
  });

  it('should login with an existing user', () => {
    homePage.goToLoginPage();
    loginPage.fillLoginForm('juan.perez@example.com', 'Password123');
    loginPage.submit();

    // Add assertions to verify successful login
  });

  it('should select a category and a subcategory', () => {
    homePage.selectCategory('cocina'); // Example category
    categoryPage.selectSubcategory('ollas'); // Example subcategory

    // Add assertions to verify successful navigation
  });
});