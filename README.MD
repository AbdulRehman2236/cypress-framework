# Cypress-Automation-Framework

## Overview

The Cypress Automation Framework is designed to enable reliable end-to-end testing for modern web applications. This project leverages Cypress and TypeScript to showcase a robust and effective structure for end-to-end testing, adhering to best practices and principles for e2e test architecture. The aim is to create a maintainable, scalable, and easy-to-navigate test framework.

### Features

- **Cypress:** A popular browser automation tool for interacting with web applications.
- **Mocha:** A JavaScript test framework running on Node.js, featuring a rich set of assertions and the ability to create and organize tests using a BDD or TDD interface.
- **TypeScript:** The programming language used for writing the test scripts.
- **Node JS:** A JavaScript runtime built on Chrome's V8 engine, used for executing test scripts and managing dependencies.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Project Structure

### Installation

1. Clone the repo using below URL:

   ```
   https://github.com/AbdulRehman2236/cypress-automation-framework.git
   ```

2. Navigate to the project directory:
   ```
   cd cypress-automation-framework
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running Test

- Before running test scenarios, execute the following command to clean previous results:

  ```bash
  npm run prereport
  ```

- Open Cypress Test Runner:

  ```bash
  npm run e2e:open:mode
  ```

For execution of test scenarios, use below command:

- Open Cypress Test Runner:

  ```bash
  npm run e2e:open:mode
  ```

- Run tests in different browsers:

  ```bash
  npm run e2e:chrome
  ```

  ```bash
  npm run e2e:edge
  ```

  ```bash
  npm run e2e:firefox
  ```

  ```bash
  npm run e2e:electron
  ```

- Run tests in different mode (headless):

  ```bash
  npm run e2e:chrome:headless
  ```

  ```bash
  npm run e2e:edge:headless
  ```

  ```bash
  npm run e2e:firefox:headless
  ```

  ```bash
  npm run e2e:electron:headless
  ```

## Reporting

### Mocha Awesome Report

To generate Mocha Awesome Report, you can run the following command:

- `npm run e2e:report`: This command generates the mocha html report in the mochawesome-report folder.

## Contact Information

- Email: abdulrehmanfayyaz3083@gmail.com

Feel free to reach out to me if you have any questions or feedback about my project. I'm always happy to help!
