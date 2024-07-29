interface CollectionManipulator {
  /**
   * Iterates over a collection and invokes an iteratee for each element.
   * @param collection - The collection to iterate over.
   * @param iteratee - The function invoked per iteration.
   * @returns void
   */
  each<T>(
    collection: Cypress.ObjectLike,
    iteratee: (value: T, key: string | number, collection: Cypress.ObjectLike) => void
  ): void;
}
