
 **User Management Backend Application**

 API oriented backend application which provides API endpoints to manage users and their details.



## Table of Content

- Prerequisites
- Installation
- Running the Application
- API Endpoints
- Logging
- Tests
- Questions
## Prerequisites

- Node.js (v14 or higher)
- MongoDB
## Run Locally

Clone the project

```bash
https://github.com/amresh012/INDDevAssigFSI.git
```

Go to the project directory

```bash
  cd INDDevAssigFSI
```

Install dependencies

```bash
  npm install
```

```bash
  MONGO_URI=mongodb://localhost:27017/userdb
  PORT=3000
```

Start the server

```bash
  npm run dev
```


## API Reference

- GET /api/users
- POST /api/users
- GET /api/users/{id}
- PUT /api/users/{id}
- DELETE /api/users/{id}

**Query Parameter**:

- page (optional): Page number for pagination.
- limit (optional): Number of users per page (default is 5).
- search (optional): Search for users by first or last name (case-insensitive).
- sort (optional): Sort by a field (prefix with - for descending).

#### Get all users

```http://localhost:5000
  GET /api/users
```

| Parameter | Type     
| :-------- | :------- 


#### Get users

```http://localhost:5000
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create users

```http://localhost:5000
   POST /api/users/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstname`      | `string` | **Required**. |
| `lastname`      | `string` | **Required**. |
| `Companyname`      | `string` | **Required**. |
| `age`      | `number` | **Required**. |
| `city`      | `string` | **Required**. |
| `state`      | `string` | **Required**. |
| `zip`      | `string` | **Required**. |
| `email`      | `string` | **Required** and **Unique** |
| `web`      | `string` | **Required**. |


#### Update user

```http://localhost:5000
  PUT /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to Update |


#### Delete user

```http://localhost:5000
  DELETE /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to Delete user |

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Questions


**How long did it take you to complete this assignment?**
 - It took approximately 4 hours to complete the assignment.

**What about this assignment did you find most challenging**
- Implementing the pagination, search, and sorting functionality was the most challenging part.

**What about this assignment did you find unclear**
The requirements were clear. There were no ambiguities.

**What challenges did you face that you did not expect?**
- Integrating pagination with search and sorting in MongoDB queries was more complex than anticipated.

**Do you feel like this assignment has an appropriate level of difficulty**
- Yes, the assignment has an appropriate level of difficulty.

**Briefly explain your decisions to use tools, frameworks, and libraries.**

- Express: Lightweight and flexible Node.js web application framework.
- Mongoose: Elegant MongoDB object modeling for Node.js.
- dotenv: Loads environment variables from a .env file into process.env.
- Jest and Supertest: Provides a robust testing environment for API testing.
- Winston: Flexible and easy-to-configure logging library.

**Did you make certain assumptions and decisions around the application? Please elaborate on your reasonings.**

- I assumed that email should be unique for each user and my assumption is based on the common requirement for user management systems.