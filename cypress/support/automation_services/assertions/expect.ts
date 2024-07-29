import Driver from "../classes/driver";

const driver = new Driver();

export default class Expect {
  /**
   * Asserts that the current URL matches the expected URL
   * @param expectedUrl - The expected URL to match
   * @returns Asserts the URL and return nothing
   */
  static url(expectedUrl: string): void {
    cy.url().should("eq", expectedUrl);
  }

  /**
   * Asserts that an element does not exist in the DOM
   * @param {string} locator - The selector of the element to check
   * @returns {void} - Asserts the element does not exist and returns nothing
   */
  static elementNotExist(locator: string): void {
    driver.getElement(locator).should("not.exist");
  }

  /**
   * Asserts that an element has a specific length
   * @param {string} locator - The selector of the element to check
   * @param {number} length - The expected length of the element
   * @returns {void} - Asserts the element has the expected length and returns nothing
   */
  static elementHaveLength(locator: string, length: number): void {
    driver.getElement(locator).should("have.length", length);
  }

  /**
   * Asserts that an element has a specific text
   * @param {string} locator - The selector of the element to check
   * @param {string} text - The expected text of the element
   * @returns {void} - Asserts the element has the expected text and returns nothing
   */
  static elementHaveText(locator: string, text: string): void {
    driver.getElement(locator).should("have.text", text);
  }

  /**
   * Asserts that an element has a specific attribute with a specific value
   * @param {string} locator - The selector of the element to check
   * @param {string} attributeType - The type of attribute to check
   * @param {string} attributeValue - The expected value of the attribute
   * @returns {void} - Asserts the element has the expected attribute and value and returns nothing
   */
  static elementHaveAttribute(locator: string, attributeType: string, attributeValue: string): void {
    driver.getElement(locator).should("have.attr", attributeType, attributeValue);
  }
}
