# webServices

Just testing express to create server with a simple mongodb.

to start the server:

```bash
   npm start
```

## How to create a webservice from scratch

initiate npm and install required packages:

- express: framework for node
- mongoose: for object modeling

```bash
   npm init

   npm install body-parser
   npm install eslint
   npm install express
   npm install mongoose
   npm install nodemon
```

To make eslint work and avoid to install it globally, add eslint to the scripts on the package.json:

```package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint .",
    "start": "nodemon app.js"
  },
```

Nodemon will restart the server when there is a change. At the same time you can set the port used.

```package.json
  "nodemonConfig": {
    "restartable": "rs",
    "ignore": [
      "node_modules/**/node_modules"
    ],
    "delay": "2500",
    "env": {
      "NODE_ENV": "development",
      "PORT": 4000
    }
  }
```

Create a model and the json to be imported into mondgodb:

```bash
mongo bookAPI < booksJson.js
```
