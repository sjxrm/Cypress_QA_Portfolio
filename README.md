# Cypress QA Automation Portfolio

This repository contains automated end-to-end test cases built with **Cypress**, 
created as part of my QA Engineer learning journey and portfolio.

## Tech Stack

- Cypress
- JavaScript

## Skills Demonstrated

- Writing E2E test scenarios (`describe` & `it`)
- Element selection using ID, class, and attribute selectors
- User interaction simulation (`type`, `click`, `check`, `select`)
- Assertions (`should`, `contain`, `have.value`, `have.text`)
- Reusable setup with `beforeEach`
- Test data management using Fixtures
- Multi-step E2E flow testing (login → cart → checkout)
- Bug identification and root cause analysis

## Test Files

| File | Feature Tested | Description |
|------|----------------|-------------|
| 01.login.cy.js | Login Form | Basic login test - valid credentials |
| 02.challenge-login.cy.js | Login Form | Multiple login scenarios (valid, invalid password, invalid username) |
| 03.easy2-checkbox-dropdown.cy.js | Checkbox & Dropdown | Interaction testing with checkbox and dropdown elements |
| 04.regression-login.cy.js | Login Regression | Regression test including locked-out user scenario |
| 05.TextBox.cy.js | Form Submission | Form input testing with Fixtures and beforeEach |
| 06.ShoppingFlow.cy.js | E2E Shopping Flow | Full flow: login → add to cart → checkout |

## How to Run

Install dependencies:
```bash
npm install
```

Open Cypress Test Runner (visual mode):
```bash
npx cypress open
```

Run all tests headlessly (terminal):
```bash
npx cypress run
```

## Author

Bangkit Sanjaya  
GitHub: [SanjayaRM](https://github.com/SanjayaRM)