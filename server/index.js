const express = require('express');
const app = require('./config/next');

const handler = app.getRequestHandler();

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(3000);
});
