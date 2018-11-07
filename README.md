# Web_app_Vue_and_Express
A Vue.js / Express.js full stack web application

(by https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D)

# Create a Vue.js / Express.js full stack web application
* install Node.js
* install NPM

1. Create a Project-Folder.
2. Setup our client (Vue.js) application.
3. Create our server (Express.js) application.

See below for the details.

# 1. Setup our client (Vue.js) application
Create our Vue.js application using vue-cli (https://github.com/vuejs/vue-cli, https://cli.vuejs.org/).

Go to the Project-Folder.
### Install vue-cli
```npm i -g vue-cli```
### Init client app
```vue init <template> <proj-name>```
### Example
```vue init webpack client```

##### Then we fill all fields with default values.

### Install dependencies
Go to the generated client app folder (hereinafter the Client-Folder) and run

```npm install```

This command will install all dependencies written in the generated package.json file to the node_modules folder.

##### Make sure the folder node_moldules is listed in your gitignore file or download a gitignore file for Node.js projects.

Then run following command to start the client app and see default Vue.js page in web browser (by default on http://localhost:8080).

``` npm run dev```

You can see all scripts in the package.json file.
### So, we init the Vue.js apllication using vue-cli.

# 2. Setup our server (Express.js) application
Go to the Project-Folder.

Create a folder for your server (hereinafter the Server-Folder).

Go to the Server-Folder and run following comand to force create (create with default values) a package.json.

```npm init -f ```




