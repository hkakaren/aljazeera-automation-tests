# AlJazeera Automation Tests

CodeceptJS + WebDriver tests for AlJazeera website.

## Setup

```bash
npm install
```

## Run Tests

```bash
npm test                      # all tests
npm run test:mostread         # most read tests
npm run test:livestream       # livestream tests
npm run test:desktop          # desktop only
npm run test:mobile           # mobile only
npm run test:accessibility    # accessibility tests
```

## Reports

```bash
npm run report:open
```

## Structure

```
features/           - test scenarios
step_definitions/   - step implementations  
pages/             - page objects
output/            - reports and screenshots
```
