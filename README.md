
# Playwright with JavaScript-POM-Git Hub Actions

This repository contains the test automation scripts for (https://qa-test.intellisense.io/next/dashboards/g/2082/QA), using Playwright with JavaScript. The tests are based on the Page Object Model (POM) pattern, and test cases are defined in the manual_test_cases.txt file.


Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js (v18 or later): Install Node.js

npm: Node package manager comes with Node.js

Playwright: For browser automation

Allure Report: For generating Allure test reports


## Installation

Install project with npm

```bash
  npm install
```
    
Install Playwright Browsers

```bash
  npx playwright install --with-deps
```

Install Allure Dependencies

```bash
  npm install allure-playwright --save-dev
```


## Running Tests

To run tests, run the following command

```bash
  npx playwright test
```


## Generating Reports

After the test execution completes, generate the Allure report using the following command:

```bash
  npx allure generate allure-results --clean -o allure-report
```

This will generate the Allure report in the allure-report folder.

To view the Allure report in a browser, run the following command:


```bash
  npx allure open allure-report
```
## CI/CD

Job triggers on github action automatically on push request. Once workflow is completed it will upload report under artifacts.

