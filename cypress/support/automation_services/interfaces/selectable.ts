interface Selectable {
  /**
   * Selects a value or values in a dropdown element.
   * @param {string} locator - The locator of the dropdown element
   * @param {string | number | Array<string | number>} value - The value or values to be selected
   * @returns {void} Selects the value(s) in the dropdown element and returns nothing
   */

  selectDropdownValue(locator: string, value: string | number | Array<string | number>): void;
}
