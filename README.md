# BOOK CART CYPRESS

A project for a example e-commerce website: https://bookcart.azurewebsites.net/  with a few test cases to practice and join to my CV

## Installation

1. Clone the repository:
    git clone <repository URL>

2. Install dependencies:
   npm install


## Usage

To run Cypress in interactive mode:
npm run cy:open


To run Cypress headlessly:
npm run cy:run

By default, Cypress runs in headless mode on the Electron browser. To run tests on other browsers, set the `BROWSER` environment variable to the desired browser name (e.g. `chrome` or `firefox`).

## Project Structure

The project is structured as follows:

├── cypress
│ ├── fixtures
│ ├── integration
│ ├── plugins
│ └── support
├── cypress.json
├── package.json
├── README.md
└── ...

## Contributing

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name
3. Make changes and commit: git commit -am 'Add some feature'
4. Push to the branch: git push origin feature/your-feature-name
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

