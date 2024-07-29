import Driver from "../automation_services/classes/driver";

export default class BasePage extends Driver {
  protected readonly elemMenu: string = "#react-burger-menu-btn";

  /**
   * Retrieves the username and password from environment variables.
   * @returns {{username: string, password: string}} An object containing the username and password.
   */
  getUserCredentials(): {
    username: string;
    password: string;
  } {
    const username = this.getEnvVariable("username");
    const password = this.getEnvVariable("password");
    return { username, password };
  }
}
