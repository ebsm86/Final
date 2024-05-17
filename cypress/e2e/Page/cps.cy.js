import LoginPage from '../Components/loginpage/components-loginpage';

describe('Login Test Cases', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should log in successfully with valid credentials', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
    cy.url().should('include', '/inventory.html'); // Verificar que la URL cambió a la página de inventario después del login
  });

  it('should display an error message for invalid credentials', () => {
    loginPage.fillUsername('invalid_user');
    loginPage.fillPassword('invalid_password');
    loginPage.submit();
    cy.get('.error-message-container').should('be.visible'); // Asegúrate de usar el selector correcto para el mensaje de error
  });
  
    it('should not log in with an empty username', () => {
      loginPage.fillUsername('');
      loginPage.fillPassword('secret_sauce');
      loginPage.submit();
      cy.get('.error-message-container').should('be.visible');
    });
  
    it('should not log in with an empty password', () => {
      loginPage.fillUsername('standard_user');
      loginPage.fillPassword('');
      loginPage.submit();
      cy.get('.error-message-container').should('be.visible');
    });
  
    it('should not log in with both fields empty', () => {
      loginPage.fillUsername('');
      loginPage.fillPassword('');
      loginPage.submit();
      cy.get('.error-message-container').should('be.visible');
    });
  
    it('should display an error for a locked out user', () => {
      loginPage.fillUsername('locked_out_user');
      loginPage.fillPassword('secret_sauce');
      loginPage.submit();
      cy.get('.error-message-container').should('contain', 'Sorry, this user has been locked out.'); // Asegúrate de que el mensaje de error sea el correcto
    });
  
    it('should experience performance glitch with performance_glitch_user', () => {
      loginPage.fillUsername('performance_glitch_user');
      loginPage.fillPassword('secret_sauce');
      loginPage.submit();
      cy.url().should('include', '/inventory.html');
      // Aquí podrías agregar una verificación para asegurarte de que la página de inventario se carga después de un retraso
    });
  
    it('should log in successfully and then log out', () => {
      loginPage.fillUsername('standard_user');
      loginPage.fillPassword('secret_sauce');
      loginPage.submit();
      cy.url().should('include', '/inventory.html');
      cy.get('#logout_sidebar_link').click(); // Asegúrate de usar el selector correcto para el botón de cierre de sesión
      cy.url().should('include', '/index.html');
    });
  
    // Puedes continuar agregando más casos de prueba según los requisitos de tu aplicación
  });