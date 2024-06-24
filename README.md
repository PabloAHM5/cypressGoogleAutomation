# Cypress Google Search Automation

This project automates Google search using Cypress. The tests are designed to validate the acceptance criteria defined in the user story.

## User Story

As a user, I want to search for any term using the on-screen search bar. After submitting a search, users should be able to see how many results were found and how long the search took. If the search term does not match any results, the system should display an error message.

## Acceptance Criteria

1. **Acceptance Criteria 1**: As a user, I want to search for any term using the single on-screen search bar.
2. **Acceptance Criteria 2**: After submitting any search, users should be able to see how many results were found.
3. **Acceptance Criteria 3**: After submitting any search, users should be able to see how long the search took.
4. **Acceptance Criteria 4**: If the search term does not match any results, the system should display an error message.


## Prerequisites

- Node.js installed
- Cypress installed (`npm install cypress`)
- Mochawesome installed (`npm install mochawesome`)

## Project Configuration

1. Clone this repository on your local machine.
2. Install the necessary dependencies by running:
   
   npm install
   
To run the tests, use the following command:

npx cypress open

or to run in headless mode:

npx cypress run

Test Report
The test report is generated using Mochawesome. To generate the report, run the tests in headless mode with the following command:


npx cypress run --reporter mochawesome

The reports will be generated in the mochawesome-report folder.
