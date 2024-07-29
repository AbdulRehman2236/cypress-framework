import { IProductDetails } from "../support/contracts/product";
import InventoryPage from "../support/pages/inventory_page";
import LoginPage from "../support/pages/login_page";
import JsonFileReader from "../support/utils/json_file_reader";

const login = new LoginPage();
const inventory = new InventoryPage();
const { username, password } = login.getUserCredentials();

describe("Product Interaction Tests", () => {
  let product: any;
  let selectedProduct: IProductDetails;

  beforeEach(() => {
    JsonFileReader.getProduct()
      .then((productData) => {
        product = productData;
      })
      .then(() => {
        selectedProduct = {
          name: product.name,
          description: product.description,
          price: product.price,
          img: product.img,
        };
      });

    login.goToApplicationUrl();
    login.loginToApplication(username, password);
  });

  it("Verify details of the selected product when selected by title", () => {
    inventory.selectProductByName(selectedProduct.name);
    inventory.verifyProductDetails(selectedProduct);
  });

  it("Verify details of the selected product when selected by image", () => {
    inventory.selectProductByImage(product.index);
    inventory.verifyProductDetails(selectedProduct);
  });
});
