const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const morgan = require('morgan');
const cors = require('cors');

const logs = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
const PORT = process.env.PORT ? process.env.PORT : 3000;

const expressConfig = routes => {
  const app = express();

  // request logging. dev: console | production: file
  app.use(morgan(logs));

  // parse body params and
  // attach them to req.body
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(compress());
  app.use(cors());

  app.use(routes);
  app.listen(PORT);
};

module.exports = expressConfig;
