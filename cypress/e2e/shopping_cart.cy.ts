import InventoryPage from "../support/pages/inventory_page";
import LoginPage from "../support/pages/login_page";
import JsonFileReader from "../support/utils/json_file_reader";

const login = new LoginPage();
const inventory = new InventoryPage();
const { username, password } = login.getUserCredentials();

describe("Shopping Cart Functionality Tests For Single Product Selection", () => {
  let product: any;

  beforeEach(() => {
    JsonFileReader.getProduct().then((products) => (product = products));
    login.goToApplicationUrl();
    login.loginToApplication(username, password);
  });

  it("Verify product is added on cart successfully", () => {
    inventory.addToCartProductByName(product.name);
    inventory.verifyCartBadgeCount(1);
  });

  it("Verify product is removed from cart successfully", () => {
    inventory.addToCartProductByName(product.name);
    inventory.removeProductFromCartByName(product.name);
    inventory.verifyCartBadgeNotExist();
  });
});

describe("Shopping Cart Functionality Tests For Multiple Product Selection", () => {
  let productList: any;

  beforeEach(() => {
    JsonFileReader.getMultipleProducts(3).then((products) => (productList = products));
    login.goToApplicationUrl();
    login.loginToApplication(username, password);
  });

  it("Verify multiple products can be added on cart successfully", () => {
    productList.forEach((product: any) => inventory.addToCartProductByName(product.name));
    inventory.verifyCartBadgeCount(productList.length);
  });

  it("Verify cart should become when reset app state", () => {
    productList.forEach((product: any) => inventory.addToCartProductByName(product.name));
    inventory.resetAppState();
    inventory.verifyCartBadgeNotExist();
  });
});
