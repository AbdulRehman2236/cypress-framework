interface Fillable {
  /**
   * Fills an element with the specified text using a locator
   * @param {string} locator - The locator of element to be filled
   * @param {string} text - The text that needs to be entered into the element
   * @returns {void} fills the element and returns nothing
   */

  fillElement(locator: string, text: string): void;
}
