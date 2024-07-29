interface PromiseCreator {
  /**
   * Creates a new promise.
   * @param executor - A function that is passed with the arguments resolve and reject.
   * @returns A new promise.
   */
  createPromise<T>(
    executor: (resolve: (value: T | Promise<T>) => void, reject: (reason?: any) => void) => void
  ): Promise<T>;
}
