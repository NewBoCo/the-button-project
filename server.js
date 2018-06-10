'use strict';

const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app:server');

require('dotenv').load();

const app = express();
app.use(morgan('dev'));

if (!module.parent) {
  const PORT = process.env.PORT|0;
  if (!PORT) {
    throw new Error("PORT is missing! Did you forgot your .env?");
  }

  app.listen(PORT, () => {
    debug(`Listening on ${PORT}`);
  });
}

module.exports = app;
