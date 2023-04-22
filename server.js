require('dotenv').config();

const express = require('express');

const server = express();

/* `const { PORT } = process.env;` is destructuring the `PORT` property from the `process.env` object.
This is a common way to access environment variables in Node.js. The `process.env` object contains
all the environment variables defined in the current environment, and by destructuring the `PORT`
property, we can access its value and use it in our code. */
const PORT = process.env.PORT || 8080;

server.get('/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    })
});

server.listen (8080, () => {
    console.log(`The server is running at PORT ${PORT}.`)
});