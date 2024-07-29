interface Getable {
  /**
   * Gets the value of an environment variable.
   * @param {string} key - The key of the environment variable.
   * @returns {*} The value of the environment variable.
   */

  getEnvVariable(key: string): any;

  /**
   * Gets an element using a locator.
   * @param {string} locator - The locator of the element to be retrieved.
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>} A chainable object for further actions.
   */

  getElement(locator: string): Cypress.Chainable<JQuery<HTMLElement>>;

  /**
   * Gets text from an HTML element.
   * @param {HTMLElement} element - The HTML element from which text needs to be retrieved.
   * @returns {string} The extracted text.
   */

  getTextFromHtmlElement(element: HTMLElement): string;

  /**
   * Gets fixture data and processes it with a callback
   * @param {string} filePath - The path to the fixture file.
   * @param {(data: T) => void} callback - A callback function to process the fixture data.
   * @returns {Cypress.Chainable<T>} A chainable object containing the fixture data.
   */

  getFixtureData<T>(filePath: string, callback: (data: T) => void): Cypress.Chainable<T>;
}
