# Web_app_Vue_and_Express
A Vue.js / Express.js full stack web application

(by https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D)

# Create a Vue.js / Express.js full stack web application
* install Node.js
* install NPM

1. Create a __Project-Folder__.
2. Setup our client (Vue.js) application.
3. Create our server (Express.js) application.

See below for the details.

# 1. Setup our client (Vue.js) application
Create our Vue.js application using vue-cli (https://github.com/vuejs/vue-cli, https://cli.vuejs.org/).

Go to the __Project-Folder__.
### Install vue-cli
```npm i -g vue-cli```
### Init client app
```vue init <template> <proj-name>```
### Example
```vue init webpack client```

##### Then we fill all fields with default values.

### Install dependencies
Go to the generated client app folder (hereinafter the __Client-Folder__) and run

```npm install```

This command will install all dependencies written in the generated package.json file to the node_modules folder.

##### Make sure the folder node_moldules is listed in your gitignore file or download a gitignore file for Node.js projects.

Then run following command to start the client app and see default Vue.js page in web browser (by default on http://localhost:8080).

``` npm run dev```

You can see all scripts in the package.json file.
### So, we init the Vue.js apllication using vue-cli.

# 2. Setup our server application
Go to the __Project-Folder__.

Create a folder for your server (hereinafter the __Server-Folder__).

### Init server app
Go to the __Server-Folder__ and run following comand to force create (create with default values) a __package.json__.

```npm init -f ```

### Install nodemon
__Nodemon__ is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

To install nodemon run

```npm install nodemon --save-dev```

### Install eslint
__ESLint__ is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

To install eslint run

```npm install eslint --save-dev```

Add following script to the __package.json__

```"eslint-init": "./node_modules/.bin/eslint --init"```

And run

```npm run eslint-init```

Setup Eslint Example
``` 
Use a popular style guide
Standard
JavaScript
```

And update the __.eslintrc.js__ file to to always require semicolons (require ';' at the end of statements) and allow 4 spaces for indent.
We add two rules ("semi" and "indent") to __.eslintrc.js__ in __server and client__ projects.

```js
module.exports = {
    "extends": "standard",
    "rules": {
        "semi": [2, "always"],
        "indent": ["error", 4]
    }
};
```

### Add new scripts to the package.json file
Add following scripts to the __package.json__ file in the __Server-Folder__.

```"start": "nodemon src/app.js --exec  \"npm run lint && node\"",```

```"lint": "eslint **/*.js"```

### Create app.js
Create src folder in the __Server-Folder__.

Go to the __src__ and create __app.js__ file (Project-Folder/Server-Folder/src/app.js).

Write following code in the __app.js__ file.
```js
// eslint-disable-next-line no-console
console.log('Hello');
```

And do a test run

```npm start```

### So, we setup the server apllication.

# 3. Init our Express server application
Go to the __Server-Folder__

### Install Express.js

__Express.js__  is a web application framework for Node.js designed for building web applications and APIs.

```npm install -save express ```

### Install other dependencies
__Body-parser__ parses incoming request bodies in a middleware before your handlers, available under the req.body property.

__Cors__ - cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.

__Morgan__ - HTTP request logger middleware for node.js

```npm install -save body-parser cors morgan```

### Getting started with Express
Write following code into the __app.js__ file

```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('hello');
});

app.listen(process.env.PORT || 8081);

```

Run

```npm start```

And check the http://localhost:8081/ping

# 4. Connect the client application to the server
Go to the __Client-Folder__.

### Install axios
__Axios__ is promise based HTTP client for the browser and node.js.

We add it to make HTTP requests to the server

```npm install --save axios ```

Create __services__ folder in __Client-Folder/src__ folder. 

In this folder create __Api.js__ file with following code

```js
import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'hhtp://localhost:8081/'
    });
};
```
