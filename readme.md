# Full Stack Drills

**GOAL**

- Your goal is to eventually comfortable building ANY ExpressJS fullstack application.
- Get practice with seeing it can all come together
- The steps below are guidelines, do what makes sense for you, what you need to focus on
- After doing this a few times, challenge yourself to create your own application without any directions.
- If you feel comfortable with everything, think about adding additional features / CSS

## Getting started

- Navigate to the root directory
- Run npm `run install-all`
- To start your react app run npm `run start:react`
- Before starting your server make sure to change your database configuration inside of queries.s
- To seed your database run `npm run seed`
- To start your server run `npm run start:server`

## Part 1: Server API

Objectives _(read this carefully)_:

- Create a server that responds to the specified restful routes
- Each route responds back with **dummy data for now**

Technologies:

- Node
- Express
- NPM
- Git

_ROUTES (PART 1)_

| METHOD | PATH           | DESCRIPTION                             |
| ------ | -------------- | --------------------------------------- |
| GET    | /employees     | respond with string "all the employees" |
| GET    | /employees/:id | respond string "single employee"        |

## Part 2: MySQL Queries

- Connect your server to your database using MySQLJS (mysql javascript)
- Complete the Routes in the route table (use the queries.js helper functions)

Technologies:

- MySQL
- MySQLJS
- Postman

_ROUTES:_

| METHOD | PATH           | DESCRIPTION                    |
| ------ | -------------- | ------------------------------ |
| GET    | /employees     | respond with all the employees |
| GET    | /employees/:id | respond single employee        |

## Part 3: ReactJS

In your frontend folder:

- It should allow a users to do the following from their web browser:
  - View all employees from the server
  - View a specific employee from the server
- You will need to use AJAX (Fetch, Axios, etc) to allow your client side code to talk to your server.
- You can create as many React components as you want

You've already created the endpoints below, now you need to use AJAX to communicate to them and get the info you need to the client-side code:

| METHOD | PATH           | DESCRIPTION                    |
| ------ | -------------- | ------------------------------ |
| GET    | /employees     | respond with all the employees |
| GET    | /employees/:id | respond single employee        |
