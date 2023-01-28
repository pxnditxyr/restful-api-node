# Base of RESTful API Server in Node.js | Typescript

This is the initial setup for a RESTful API built with Node.js and TypeScript, it serves as a starting point for developing a full-featured and scalable API. It includes a basic "Hello World" endpoint for testing purposes, but no other endpoints have been added yet.

## Dependencies
- Node.js
- TypeScript (installed globally)
- nodemon (installed globally)
- Prisma

## Technologies
- Node.js
- TypeScript
- Express
- Cors
- Dotenv
- Prisma

## Getting Started
To get started, you will need to have Node.js installed on your machine. Once you have that set up, follow these steps:

1. Clone this repository on your machine by running the following command:
```bash
git clone https://github.com/pxnditxyr/restful-api-node.git
```

2. Run the following command to install TypeScript globally:
```bash
npm i -g typescript
```
3. Run the following command to install nodemon globally:
```bash
npm i -g nodemon
```
4. Run the command 
```bash
npm i
```
to install the necessary dependencies

5. Rename the `.env.example` file to `.env` and configure the necessary environment variables for your project
```bash
cp .env.example .env
```

## Runnig TSC
To compile project and watch for changes, execute the following command in the terminal
```bash
tsc --watch
```

## Running with nodemon
To run the project with nodemon, execute the following command in the terminal:
```bash
npm run dev
```

## Running on production
To run the project on production, execute the following command in the terminal:
```bash
npm start
```

## Usage
- Make a GET request using tools such as Postman or by visiting `http://localhost:<PORT>/example/hello-world` in your browser.

### Optional
- You can use rest.nvim for testing. 
- Go to the `example.http` file and run.

### Database
1.  Prisma is configured but without Schemes, to make it run you must add some Schemes
Models: [Prisma Schema Documentation](https://www.prisma.io/docs/concepts/components/prisma-schema)
2. To migrate run this commands
```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Documentation
For additional information on the technologies used in this project, please refer to the official documentation:
- [Node.js](https://nodejs.org/en/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Cors](https://www.npmjs.com/package/cors#installation)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Prisma](https://www.prisma.io/docs/getting-started/quickstart)

## License
This project is licensed under the MIT license.

## Author
### Pxndxs Dev - Enrique Ricaldi
