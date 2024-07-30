import Expect from "../automation_services/assertions/expect";
import BasePage from "./base_page";
import { Sorting } from "../enums/sorting";
import { IProductDetails } from "../contracts/product";

export default class InventoryPage extends BasePage {
  private readonly elemInventoryImg: string = "img.inventory_item_img";
  private readonly elemCart: string = '[data-test="shopping-cart-link"]';
  private readonly elemInventoryItemImg: string = ".inventory_details_img";
  private readonly elemActiveOption: string = '[data-test="active-option"]';
  private readonly elemInventoryItem: string = '[data-test="inventory-item"]';
  private readonly elemRestAppState: string = '[data-test="reset-sidebar-link"]';
  private readonly elemInventoryItemName: string = '[data-test="inventory-item-name"]';
  private readonly elemInventoryItemDesc: string = '[data-test="inventory-item-desc"]';
  private readonly elemInventoryItemPrice: string = '[data-test="inventory-item-price"]';
  private readonly elemShoppingCartBadge: string = '[data-test="shopping-cart-badge"]';
  private readonly elemSortContainer: string = '[data-test="product-sort-container"]';

  private getElemAddProductName(productName: string): string {
    return `[data-test="add-to-cart-${productName}"]`;
  }

  private getElemRemoveProductName(productName: string): string {
    return `[data-test="remove-${productName}"]`;
  }

  private getElemSocialAppName(appName: string): string {
    return `[data-test="social-${appName}"]`;
  }

  addToCartProductByName(product: string): void {
    const productName = product.toLowerCase().split(" ").join("-");
    this.clickOnElement(this.getElemAddProductName(productName));
  }

  selectProductByImage(index: number): void {
    this.clickOnElementByIndex(this.elemInventoryImg, index);
  }

  selectProductByName(productName: string): void {
    this.clickOnElementByText(productName);
  }

  removeProductFromCartByName(product: string): void {
    const productName = product.toLowerCase().split(" ").join("-");
    this.clickOnElement(this.getElemRemoveProductName(productName));
  }

  resetAppState(): void {
    this.clickOnElement(this.elemMenu);
    this.clickOnElement(this.elemRestAppState);
  }

  verifyProductDetails(product: IProductDetails): void {
    const { name, description, price, img } = product;
    Expect.elementHaveText(this.elemInventoryItemName, name);
    Expect.elementHaveText(this.elemInventoryItemDesc, description);
    Expect.elementHaveText(this.elemInventoryItemPrice, price);
    Expect.elementHaveAttribute(this.elemInventoryItemImg, "src", img);
  }

  verifyCartBadgeCount(badgeCount: number): void {
    Expect.elementHaveText(this.elemShoppingCartBadge, `${badgeCount}`);
  }

  verifyCartBadgeNotExist(): void {
    Expect.elementNotExist(this.elemShoppingCartBadge);
  }

  clickOnCart(): void {
    this.clickOnElement(this.elemCart);
  }

  verifyInventoryCount(inventoryCount: number): void {
    Expect.elementHaveLength(this.elemInventoryItem, inventoryCount);
  }

  navigateToSocialLinks(appName: string): void {
    this.setupCrossOriginHandling();
    this.removeAttributeAndClick(this.getElemSocialAppName(appName.toLowerCase()), "target");
    this.removeCrossOriginHandling();
  }

  verifySocialLinksOpenSuccessfully(socialUrl: string): void {
    Expect.url(socialUrl);
  }

  applySorting(sortBy: Sorting): void {
    this.selectDropdownValue(this.elemSortContainer, sortBy);
    Expect.elementHaveText(this.elemActiveOption, sortBy);
  }

  verifyProductsAreSorted(sortedBy: Sorting): void {
    const isSortingByName = sortedBy === Sorting.NAME_ASCENDING || sortedBy === Sorting.NAME_DESCENDING;
    const element = isSortingByName ? this.elemInventoryItem : this.elemInventoryItemPrice;

    this.getElement(element)
      .then((elements) => this.extractTextOrPrice(elements, sortedBy))
      .then((sortedProduct: (string | number)[]) => {
        const isAscending = sortedBy === Sorting.NAME_ASCENDING || sortedBy === Sorting.PRICE_ASCENDING;
        const isSorted = isAscending
          ? this.verifyArrayIsSortedInAscendingOrder(sortedProduct)
          : this.verifyArrayIsSortedInDescendingOrder(sortedProduct);

        expect(isSorted).to.be.true;
      });
  }

  private extractTextOrPrice(elements: JQuery<HTMLElement>, sortedBy: Sorting): Promise<(string | number)[]> {
    let sortedProduct: (string | number)[] = [];
    const isSortingByPrice = sortedBy === Sorting.PRICE_ASCENDING || sortedBy === Sorting.PRICE_DESCENDING;

    return this.createPromise((resolve) => {
      this.each(elements, (elem: HTMLElement) => {
        const text = this.getTextFromHtmlElement(elem);
        sortedProduct.push(isSortingByPrice ? Number(text.slice(1)) : text);
      });
      resolve(sortedProduct);
    });
  }

  private verifyArrayIsSortedInAscendingOrder(array: (string | number)[]): boolean {
    return array.every((val, i, arr) => !i || arr[i - 1] <= val);
  }

  private verifyArrayIsSortedInDescendingOrder(array: (string | number)[]): boolean {
    return array.every((val, i, arr) => !i || arr[i - 1] >= val);
  }
}
