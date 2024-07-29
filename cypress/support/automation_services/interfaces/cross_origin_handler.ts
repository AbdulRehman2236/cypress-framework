interface CrossOriginHandler {
  /**
   * Sets up handling for cross-origin errors.
   * @returns void
   */
  setupCrossOriginHandling(): void;

  /**
   * Removes handling for cross-origin errors.
   * @returns void
   */
  removeCrossOriginHandling(): void;
}
