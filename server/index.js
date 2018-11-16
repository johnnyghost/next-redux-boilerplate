const express = require('./config/express');
const app = require('./config/next');

const handler = app.getRequestHandler();

app.prepare().then(express(handler));
