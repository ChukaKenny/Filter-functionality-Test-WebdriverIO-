# Filter Functionality Test using WebdriverIO

## Project Description
This project is dedicated to testing the filtering functionality of a web application using the WebdriverIO automation framework. The goal is to ensure that all filtering features work correctly under various conditions and user interactions.

## Overview
The test suite validates filter operations including:
- Single and multi-select filtering
- Date range filtering  
- Search-based filtering
- Filter reset and clearing functionality
- Filter persistence across page navigation
- Dynamic filter updates
- Error handling for invalid filter inputs

## Features
- **Comprehensive Testing**: Automated tests covering various filtering functions and edge cases
- **Cross-Browser Compatibility**: Tests run on multiple browsers to ensure consistent behavior
- **Detailed Reporting**: Test results are reported in a clear and concise manner using Mocha and the spec reporter
- **Visual Testing**: Visual regression testing with screenshot comparisons
- **Assertion Library**: Powerful assertions using Chai and expect-webdriverio

## Tech Stack

- **WebdriverIO 9.11.0** - Browser automation and end-to-end testing framework
- **Mocha 9.11.0** - Test runner and framework
- **Chai 5.2.0** - Assertion library
- **Expect-WebdriverIO 5.1.0** - Custom matchers for WebdriverIO
- **Visual Service 6.3.2** - Visual regression testing
- **Chalk 5.4.1** - Terminal output styling

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation

```bash
# Clone the repository
git clone https://github.com/ChukaKenny/Filter-functionality-Test-WebdriverIO-
cd Filter-functionality-Test-WebdriverIO-

# Install dependencies
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Or directly with WebdriverIO CLI
npx wdio run wdio.conf.js
```

## Project Structure

```
.
├── tests/              # Test files and test suites
├── specs/              # Test specifications
├── config/             # WebdriverIO configuration
├── utils/              # Helper functions and utilities
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## Test Scenarios

The test suite covers:
- Filter input validation
- Multiple filter combinations
- Filter performance and response times
- UI state changes after filtering
- Error handling for invalid filters
- Accessibility compliance for filter components
- Data accuracy after filtering

## Contributing

Feel free to fork the project and submit pull requests. Contributions are welcome to enhance testing coverage and improve test quality.

## License

This project is licensed under the MIT License.