const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello mundo');
});

app.listen(8000, () => console.log('Server started at http://localhost:8000'));
