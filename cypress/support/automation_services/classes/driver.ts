/**
 * Class for interacting with web elements and handling various actions.
 */
export default class Driver
  implements
    Clickable,
    Getable,
    Fillable,
    Selectable,
    Navigable,
    PromiseCreator,
    CrossOriginHandler,
    ElementManipulator
{
  /**
   * @implements {Navigable}
   */
  navigateToUrl(url: string): void {
    cy.visit(url);
  }

  /**
   * @implements {Clickable}
   */

  clickOnElement(locator: string): void {
    this.getElement(locator).click();
  }

  clickOnElementByText(text: string): void {
    cy.contains(text).click();
  }

  clickOnElementByIndex(locator: string, index: number): void {
    this.getElement(locator).eq(index).click();
  }

  /**
   * @implements {Fillable}
   */

  fillElement(element: string, text: string): void {
    this.getElement(element).type(text);
  }

  /**
   * @implements {Getable}
   */

  getTextFromHtmlElement(element: HTMLElement): string {
    return Cypress.$(element).text();
  }

  getElement(element: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(element);
  }

  getEnvVariable(key: string): string {
    return Cypress.env(key);
  }

  getFixtureData<T>(filePath: string, callback: (data: T) => void): Cypress.Chainable<T> {
    return cy.fixture(filePath).then(callback);
  }

  /**
   * @implements {Selectable}
   */

  selectDropdownValue(element: string, value: string | number | Array<string | number>): void {
    this.getElement(element).select(value);
  }

  /**
   * @implements {PromiseCreator}
   */

  createPromise<T>(
    executor: (resolve: (value: T | Promise<T>) => void, reject: (reason?: any) => void) => void
  ): Promise<T> {
    return new Cypress.Promise(executor);
  }

  /**
   * @implements {CollectionManipulator}
   */

  each<T>(
    collection: Cypress.ObjectLike,
    iteratee: (value: T, key: string | number, collection: Cypress.ObjectLike) => void
  ): void {
    Cypress._.each(collection, iteratee);
  }

  /**
   * @implements {CrossOriginHandler}
   */

  setupCrossOriginHandling(): void {
    Cypress.on("uncaught:exception", (error: Error) => {
      if (error.stack?.includes("PrimaryOriginCommunicator.toSource")) return false;
      return true;
    });
  }

  removeCrossOriginHandling(): void {
    Cypress.off("uncaught:exception", (error: Error) => {
      if (error.stack?.includes("PrimaryOriginCommunicator.toSource")) return true;
    });
  }

  /**
   * @implements {ElementManipulator}
   */

  removeAttributeAndClick(element: string, attribute: string): void {
    this.invokeMethod(element, "removeAttr", attribute).click();
  }

  invokeMethod(element: string, method: string, ...args: any[]): Cypress.Chainable<any> {
    return this.getElement(element).invoke(method, ...args);
  }
}
