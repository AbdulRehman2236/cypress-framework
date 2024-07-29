import { IProductDetails } from "../contracts/product";
import BasePage from "../pages/base_page";
import RandomUtil from "./random_util";

const base = new BasePage();
export type JsonData<T> = Cypress.Chainable<T>;

export default class JsonFileReader {
  private static readonly USER_FILE_PATH = "users.json";
  private static readonly PRODUCT_FILE_PATH = "products.json";

  static getUser(): JsonData<any> {
    return base.getFixtureData(this.USER_FILE_PATH, (users) => {
      return users[RandomUtil.generateNumber(users.length)];
    });
  }

  static getProduct(): JsonData<any> {
    return base.getFixtureData(this.PRODUCT_FILE_PATH, (products) => {
      const index = RandomUtil.generateNumber(products.length);
      return this.extractProductDetails(products, index);
    });
  }

  static getMultipleProducts(numberOfProducts: number): JsonData<any> {
    return base.getFixtureData(this.PRODUCT_FILE_PATH, (products) => {
      const productIndices = new Set<number>();

      while (productIndices.size < numberOfProducts) productIndices.add(RandomUtil.generateNumber(products.length));

      const selectedProducts: IProductDetails[] = [];
      Array.from(productIndices).forEach((index) => selectedProducts.push(this.extractProductDetails(products, index)));
      return selectedProducts;
    });
  }

  private static extractProductDetails(products: IProductDetails[], index: number): IProductDetails {
    return {
      index: index,
      name: products[index].name,
      description: products[index].description,
      price: products[index].price,
      img: products[index].img,
    };
  }
}
