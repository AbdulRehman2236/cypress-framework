interface ElementManipulator {
  /**
   * Removes an attribute from an element and clicks on it.
   * @param element - The selector of the element.
   * @param attribute - The attribute to be removed.
   * @returns void
   */
  removeAttributeAndClick(element: string, attribute: string): void;

  /**
   * Invokes a method on an element.
   * @param element - The selector of the element.
   * @param method - The method to be invoked.
   * @param args - Additional arguments for the method.
   * @returns A chainable Cypress object.
   */
  invokeMethod(element: string, method: string, ...args: any[]): Cypress.Chainable<any>;
}
