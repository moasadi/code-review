```markdown
# Xcoins Project

Welcome to My Project! This project is built with TypeScript and Node.js, and it provides an API for managing profiles, favorites, and simulators.

## Features

- Create, update, and delete profiles
- Manage favorite items for each profile
- Track simulator data for profiles

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- MongoDB (installed and running)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/moasadi/your-repository.git
   ```

2. Install the dependencies:

   ```shell
   cd your-repository
   npm install
   ```

3. Configure the environment variables:

   - Create a `.env` file in the project root.
   - Set the required environment variables. You can refer to `.env.example` for the required variables.

4. Start the server:

   ```shell
   npm start
   ```

5. The server should now be running at `http://localhost:3000`.

## API Documentation

API documentation is available in the Swagger UI. You can access it by navigating to `http://localhost:3000/api-docs` in your browser.

## Testing

To run the tests, use the following command:

```shell
npm test
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Support

If you have any questions or need assistance, please reach out to our support team at m.asadi.dev@gmail.com

### Profile Routes

#### Get All Profiles

```shell
curl -X GET http://localhost:3000/api/profile
```

#### Create a Profile

```shell
curl -X POST -H "Content-Type: application/json" -d '{"name": "mo asadi", "email": "m.asadi.dev@gmail.com", "nickname": "moasadi"}' http://localhost:3000/api/profile
```

#### Get a Profile

```shell
curl -X GET http://localhost:3000/api/profile/{profile_id}
```

### Favorite Routes

#### Get All Favorites

```shell
curl -X GET http://localhost:3000/api/favorite
```

#### Create a Favorite

```shell
curl -X POST -H "Content-Type: application/json" -d '{"profile_id": "{profile_id}", "name": "Favorite 1", "favorites": ["Item 1", "Item 2", "Item 3"]}' http://localhost:3000/api/favorite
```

#### Get Favorites for a Profile

```shell
curl -X GET http://localhost:3000/api/favorite/{profile_id}
```

### Simulator Routes

#### Get All Simulators

```shell
curl -X GET http://localhost:3000/api/simulator
```

#### Create a Simulator Entry

```shell
curl -X POST -H "Content-Type: application/json" -d '{"profile_id": "{profile_id}", "dateRecorded": "2023-05-26", "cryptocurrency": "Bitcoin", "euros": 1000, "price": 50000, "quantity": 0.02}' http://localhost:3000/api/simulator
```

#### Get Simulators for a Profile

```shell
curl -X GET http://localhost:3000/api/simulator/{profile_id}
```

Replace `{profile_id}` with the actual ID of the profile you want to interact with.
