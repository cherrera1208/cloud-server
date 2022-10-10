'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
});

app.listen(PORT, () => {
  console.log(":: :  app.listen :  PORT", PORT)
});
