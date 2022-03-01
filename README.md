# GFW-test
A test project for GFW using Node.js, Express, Typescript, React and MongoDB in a Docker container

## Software Requirements
- Node.js
- Docker Desktop

## How to install
### Using Git (recommended)
1. Clone the project from github.
```
git clone https://github.com/deepc-6/GFW-test.git
```
### Using manual download ZIP
1. Download repository.
2. Uncompress to your desired directory.
### Install dependencies after installing (Git or manual download)
Install Docker Desktop from https://docs.docker.com/engine/install/
```
cd GFW-test/
npm install
npm run setup
```
### Setting up environments
Copy the .env file sent to you by e-mail inside the api directory.

## How to run
```
docker compose up -d
npm start
```

## ESLint
### Running Eslint
```
npm run lint
```

## MongoDB
### Accessing MongoDB
```
docker exec -it api-mongo-1 mongo
```
### Mongo Shell - Switching to api database
```
> use api-db
```
### Mongo Shell - Finding the list of users
```
> db.users.find().pretty()
```

## License
This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
