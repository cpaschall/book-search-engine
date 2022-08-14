![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

# Book Search Engine

## Table of Contents

1. [Description](#Description)
2. [Technologies](#Technology)
3. [Instructions](#Instructions)
4. [Usage](#Usage)
5. [Testing](#Testing)
6. [Contributing](#Contributing)
7. [Questions](#Questions)

## <a id="Description">Description</a>

A book search engine using the free Google book database API.  A user can cretae a profile a login to view books then save books which can be viewed as a collection on the page and deleted individually.

## <a id="Technology">Technologies</a>

The following technologies are used and will need to be installer prior to running the server:

- [react](https://reactjs.org/)
- [graphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [Mongo DB](https://www.mongodb.com/)
- [express.js](https://expressjs.com/)

## <a id="Instructions">Instructions</a>

Fork the repo and clone the code into a VScode or a similiar code editor. Open the filepath containing the repo in a new terminal session and install npm packages before running the server by executing the ```npm install``` command. Once installed, run the command ```npm run start```.

## <a id="Usage">Usage</a>

A new User can click the ```login/signup``` at the top of the page to login.  Once logged in the User can search book by a keyword and save selected books to their user profile.

[Book Search Engine](https://book-serch-engine-aug2022.herokuapp.com/)
  <br>
![Deployment](./Assets/deployment.gif)

## <a id="Testing">Testing</a>
The following errors were encounter during deployment and currently need to be addressed:

**Deployment via ```npm run develop```:**
<br>
 - On Login
 <br>
 ```index.js:1 Error: Response not successful: Received status code 400```
 <br>
 - 'See Your Books' link
 <br>
 ```module.js:62 Uncaught TypeError: Cannot read properties of undefined (reading 'length')```
 <br>
**Heroku Errors**
<br>
```at=error code=H10 desc="App crashed" method=GET path="/favicon.ico"```

## <a id="Contributing">Contributing</a>

Fork the repo and contact me to be added to the project.

## <a id="Questions">Questions</a>

Github: [cpaschall](https://github.com/cpaschall)
<br>
Email: cpaschall216@gmail.com

---

[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)