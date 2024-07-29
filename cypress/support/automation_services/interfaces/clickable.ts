interface Clickable {
  /**
   * Click on an element using locator
   * @param {string} locator - The locator of element that to be clicked
   * @returns {void} Clicks on the element and returns nothing
   */
  clickOnElement(locator: string): void;

  /**
   * Click on an element using its text content
   * @param {string} text - The text content of the element to be clicked
   * @returns {void} Clicks on the element and returns nothing
   */
  clickOnElementByText(text: string): void;

  /**
   * Clicks on an element at a particular index
   * @param {string} locator - The locator of an element
   * @param {number} index - The index at which the element is located
   * @returns {void} Clicks on the element and returns nothing
   */
  clickOnElementByIndex(locator: string, index: number): void;
}
