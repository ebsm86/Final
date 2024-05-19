import LoginPage1 from '../Components/prueba/components-prueba';

describe('Login Test Cases', () => {
  const loginPage1 = new LoginPage1();

  beforeEach(() => {
   loginPage1.visit();
   
  });

  it('should log in successfully with valid credentials', () => {
    loginPage1.fillUsername('standard_user');
    loginPage1.fillPassword('secret_sauce');
    loginPage1.submit();
});
});