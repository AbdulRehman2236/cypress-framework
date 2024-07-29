import Expect from "../automation_services/assertions/expect";
import { Urls } from "../enums/url";
import BasePage from "./base_page";

export default class CartPage extends BasePage {
  private readonly elemCheckout: string = '[data-test="checkout"]';

  clickCheckout() {
    this.clickOnElement(this.elemCheckout);
  }

  verifyCartPageUrl() {
    Expect.url(Urls.CART);
  }
}
