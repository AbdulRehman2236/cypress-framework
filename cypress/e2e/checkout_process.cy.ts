import { IOrderDetails } from "../support/contracts/order";
import CartPage from "../support/pages/cart_page";
import CheckoutPage from "../support/pages/checkout_page";
import InventoryPage from "../support/pages/inventory_page";
import LoginPage from "../support/pages/login_page";
import JsonFileReader from "../support/utils/json_file_reader";
import RandomUtil from "../support/utils/random_util";

const cart = new CartPage();
const login = new LoginPage();
const checkout = new CheckoutPage();
const inventory = new InventoryPage();
const { username, password } = login.getUserCredentials();

describe("Checkout Process Tests", () => {
  let product: any;
  let order: IOrderDetails;

  beforeEach(() => {
    JsonFileReader.getProduct().then((productData) => (product = productData));

    order = {
      firstName: RandomUtil.generateString(),
      lastName: RandomUtil.generateString(),
      postalCode: RandomUtil.generateNumber(),
    };

    login.goToApplicationUrl();
    login.loginToApplication(username, password);
  });

  it("Verify order is placed successfully", () => {
    inventory.addToCartProductByName(product.name);
    inventory.clickOnCart();
    cart.clickCheckout();

    checkout.placeOrder(order);
    checkout.verifyOrderPlacedSuccessfully();
  });

  it("Verify order is cancel successfully", () => {
    inventory.addToCartProductByName(product.name);
    inventory.clickOnCart();
    cart.clickCheckout();

    checkout.cancelOrder(order);
    checkout.verifyOrderCancelledSuccessfully();
  });
});
