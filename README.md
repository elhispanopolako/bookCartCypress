# BookCart E-commerce Website Testing

BookCart E-commerce Website Testing
This is a Cypress project for testing an example e-commerce website called BookCart, which can be accessed at https://bookcart.azurewebsites.net/. The purpose of this project is to showcase your skills in writing automated tests for an e-commerce website and to add it to your CV as a demonstrable project.

## Installation

1. Clone the repository:
    git clone https://github.com/elhispanopolako/bookCartCypress.git

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

