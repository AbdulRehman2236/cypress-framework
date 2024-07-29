import { SocialApps } from "../support/enums/social_app";
import { Urls } from "../support/enums/url";
import CartPage from "../support/pages/cart_page";
import InventoryPage from "../support/pages/inventory_page";
import LoginPage from "../support/pages/login_page";

const login = new LoginPage();
const cart = new CartPage();
const inventory = new InventoryPage();
const { username, password } = login.getUserCredentials();

describe("Navigation Tests", () => {
  beforeEach(() => {
    login.goToApplicationUrl();
    login.loginToApplication(username, password);
  });

  it("Verify user navigate to the cart page", () => {
    inventory.clickOnCart();
    cart.verifyCartPageUrl();
  });

  it("Verify inventory page display all the products", () => {
    inventory.verifyInventoryCount(6);
  });

  it("Verify user is redirected to linkedin media links when click on linkedIn", () => {
    inventory.navigateToSocialLinks(SocialApps.LINKEDIN);
    inventory.verifySocialLinksOpenSuccessfully(Urls.SAUCE_LAB_LINKEDIN);
  });

  it("Verify user is redirected to facebook media links when click on facebook", () => {
    inventory.navigateToSocialLinks(SocialApps.FACEBOOK);
    inventory.verifySocialLinksOpenSuccessfully(Urls.SAUCE_LAB_FACEBOOK);
  });
});
