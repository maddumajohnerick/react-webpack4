const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

if(process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, err => {
  if (err) {
    console.log(err)
    throw err
  }
  console.log('> ENV:', process.env.NODE_ENV)
  console.log(`> Ready on http://localhost:${port}`)
});