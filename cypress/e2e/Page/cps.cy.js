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
  });
});