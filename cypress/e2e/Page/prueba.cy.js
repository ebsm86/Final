import LoginPage1 from '../Components/prueba/components-prueba';

describe('Login Test Cases', () => {
  const loginPage1 = new LoginPage1();

  beforeEach(() => {
   loginPage1.visit();
   
  });

  it('should log in successfully with valid credentials', () => {
    loginPage1.fillUsername('applytesters@mydomain.com');
    loginPage1.fillPassword('Apply123!!!');
    loginPage1.submit();
});
});