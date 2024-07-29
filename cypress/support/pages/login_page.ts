import Expect from "../automation_services/assertions/expect";
import { ErrorMessages } from "../enums/error_message";
import { Urls } from "../enums/url";
import BasePage from "./base_page";

export default class LoginPage extends BasePage {
  private readonly elemUsername: string = "#user-name";
  private readonly elemPassword: string = "#password";
  private readonly elemLogin: string = "#login-button";
  private readonly elemLogout: string = "Logout";
  private readonly elemErrorMessage: string = "[data-test='error']";

  goToApplicationUrl() {
    this.navigateToUrl(Urls.LOGIN);
  }

  loginToApplication(username: string, password: string) {
    this.fillElement(this.elemUsername, username);
    this.fillElement(this.elemPassword, password);
    this.clickOnElement(this.elemLogin);
  }

  verifyLoginIsSuccessful(): void {
    Expect.url(Urls.INVENTORY);
  }

  logoutUser() {
    this.clickOnElement(this.elemMenu);
    this.clickOnElementByText(this.elemLogout);
  }

  verifyLoginErrorMessage() {
    Expect.elementHaveText(this.elemErrorMessage, ErrorMessages.INVALID_LOGIN);
  }

  verifyUserLogoutSuccessfully() {
    Expect.url(Urls.LOGIN);
  }
}
