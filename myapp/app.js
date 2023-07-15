const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send('Hello World i am sTANISLAV!');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact page</h1>');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.use((req, res, next) => {
  console.log('Наше проміжне ПЗ');
  next();
});