import { log } from 'async';
import LoginPage from '../Components/loginpage/components-loginpage'

describe('Login Tests', () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    
    loginPage.visit();
  });

  it('should log in successfully with valid credentials', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
    cy.url().should('include', '/inventory.html'); 
  });

  it('should show an error message for invalid username', () => {
    loginPage.fillUsername('wrong_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
    loginPage.errorMessage().should('contain', 'Username and password do not match');
  });

  it('should show an error message for invalid password', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('wrong_password');
    loginPage.submit();
    loginPage.errorMessage().should('contain', 'Username and password do not match');
  });

  it('should show an error message when no username or password is provided', () => {
    loginPage.submit();
    loginPage.errorMessage().should('contain', 'Username is required');
  });

  it('should show an error message when only username is provided', () => {
    loginPage.fillUsername('standard_user');
    loginPage.submit();
    loginPage.errorMessage().should('contain', 'Password is required');
  });

  it('should show an error message when only password is provided', () => {
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
    loginPage.errorMessage().should('contain', 'Username is required');
  });

  it('should hide password input as it is being typed', () => {
    loginPage.fillPassword('secret_sauce');
    loginPage.fillPassword2();
  });

  it('should retain the username after a failed login attempt', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('wrong_password');
    loginPage.submit();
    loginPage.errorMessage().should('be.visible');
    loginPage.fillUsernameStandar();
  });

  it('should allow user to log in with Enter key', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.fillPasswordEnter();
    cy.url().should('include', '/inventory.html'); 
  });

  it('should display the login button as enabled when fields are filled', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submitNotDisabled();
  });

  it('should not navigate away from login page on failed login', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('wrong_password');
    loginPage.submit();
    loginPage.errorMessage().should('be.visible');
    cy.url().should('not.include', '/inventory.html'); 
  });
});
