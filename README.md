# Playwright API Tests Repository

This repository contains automated API tests written using the Playwright test framework. The tests are designed to interact with the API available at [ReqRes](https://reqres.in/), a REST API that you can use to make simulated API requests for testing.

## Files

### Api-demo Test

This file contains the following automated API tests:

1. **Basic get request to get users list**: This test fetches a list of users and checks if a user with a specific ID (7) exists and verifies the email address associated with that ID.
2. **Create an user and check if he exists**: This test creates a new user with specific details and verifies if the user creation was successful.

3. **API put test**: This test updates the details of an existing user (ID: 2) and verifies if the update was successful.

4. **API login test**: This test simulates a user login with specific credentials and verifies if the login was successful.

## How to Run

Before running the tests, make sure to install all necessary dependencies. You can run the tests using the following command:

```bash
# Command to run the tests
npx playwright test
```

## Contributions

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
