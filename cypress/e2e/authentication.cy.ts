import LoginPage from "../support/pages/login_page";
import JsonFileReader from "../support/utils/json_file_reader";
import RandomUtil from "../support/utils/random_util";

const login = new LoginPage();

describe("Authentication Tests for SauceDemo", () => {
  let user: any;
  beforeEach(() => {
    JsonFileReader.getUser().then((userData) => (user = userData));
    login.goToApplicationUrl();
  });

  it("Verify user is login successfully with valid credentials", () => {
    login.loginToApplication(user.username, user.password);
    login.verifyLoginIsSuccessful();
  });

  it("Verify user logout successfully", () => {
    login.loginToApplication(user.username, user.password);
    login.logoutUser();
    login.verifyUserLogoutSuccessfully();
  });

  it("Verify error message appears when login with invalid credentials", () => {
    login.loginToApplication(RandomUtil.generateString(), RandomUtil.generateString());
    login.verifyLoginErrorMessage();
  });
});
