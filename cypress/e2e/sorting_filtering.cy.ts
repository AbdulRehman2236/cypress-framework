import { Sorting } from "../support/enums/sorting";
import InventoryPage from "../support/pages/inventory_page";
import LoginPage from "../support/pages/login_page";

const login = new LoginPage();
const inventory = new InventoryPage();
const { username, password } = login.getUserCredentials();

describe("Product Sorting Tests", () => {
  beforeEach(() => {
    login.goToApplicationUrl();
    login.loginToApplication(username, password);
  });

  it("Verify products are sorted in ascending order by price", () => {
    inventory.applySorting(Sorting.PRICE_ASCENDING);
    inventory.verifyProductsAreSorted(Sorting.PRICE_ASCENDING);
  });

  it("Verify products are sorted in ascending order by name", () => {
    inventory.applySorting(Sorting.NAME_ASCENDING);
    inventory.verifyProductsAreSorted(Sorting.NAME_ASCENDING);
  });

  it("Verify products are sorted in descending order by price", () => {
    inventory.applySorting(Sorting.PRICE_DESCENDING);
    inventory.verifyProductsAreSorted(Sorting.PRICE_DESCENDING);
  });

  it("Verify products are sorted in descending order by name", () => {
    inventory.applySorting(Sorting.NAME_DESCENDING);
    inventory.verifyProductsAreSorted(Sorting.NAME_DESCENDING);
  });
});
