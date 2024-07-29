import Expect from "../automation_services/assertions/expect";
import { IOrderDetails } from "../contracts/order";
import { Urls } from "../enums/url";
import BasePage from "./base_page";

export default class CheckoutPage extends BasePage {
  private readonly elemFirstName: string = '[data-test="firstName"]';
  private readonly elemLastName: string = '[data-test="lastName"]';
  private readonly elemPostalCode: string = '[data-test="postalCode"]';
  private readonly elemContinue: string = '[data-test="continue"]';
  private readonly elemFinish: string = '[data-test="finish"]';
  private readonly elemCancel: string = '[data-test="cancel"]';
  private readonly elemCompleteHeader: string = '[data-test="complete-header"]';

  placeOrder(order: IOrderDetails): void {
    this.fillCheckoutForm(order);
    this.clickOnElement(this.elemFinish);
  }

  cancelOrder(order: IOrderDetails): void {
    this.fillCheckoutForm(order);
    this.clickOnElement(this.elemCancel);
  }

  verifyOrderPlacedSuccessfully(): void {
    Expect.elementHaveText(this.elemCompleteHeader, "Thank you for your order!");
  }

  verifyOrderCancelledSuccessfully(): void {
    Expect.url(Urls.INVENTORY);
  }

  private fillCheckoutForm(order: IOrderDetails): void {
    const { firstName, lastName, postalCode } = order;
    this.fillElement(this.elemFirstName, firstName);
    this.fillElement(this.elemLastName, lastName);
    this.fillElement(this.elemPostalCode, `${postalCode}`);
    this.clickOnElement(this.elemContinue);
  }
}
