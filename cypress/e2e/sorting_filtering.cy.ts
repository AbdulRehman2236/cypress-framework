import { Sorting } from "../support/enums/sorting";
import InventoryPage from "../support/pages/inventory_page";
import LoginPage from "../support/pages/login_page";

const login = new LoginPage();
const inventory = new InventoryPage();
const { username, password } = login.getUserCredentials();
const sorting = [Sorting.PRICE_ASCENDING, Sorting.NAME_ASCENDING, Sorting.PRICE_DESCENDING, Sorting.NAME_DESCENDING];

describe("Product Sorting Tests", () => {
  beforeEach(() => {
    login.goToApplicationUrl();
    login.loginToApplication(username, password);
  });

  sorting.forEach((sortingType) => {
    it(`Verify products are sorted by ${sortingType}`, () => {
      inventory.applySorting(sortingType);
      inventory.verifyProductsAreSorted(sortingType);
    });
  });
});
