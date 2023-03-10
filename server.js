const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routing/api')(app);
require('./routing/html')(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
