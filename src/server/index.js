const express = require('express');
const app = express();
app.use(express.static('static'));

app.set('view engine', 'ejs');

// const App = require('../app/App').default;
import App from '../app/App'

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const initialMarkup = ReactDOMServer.renderToString(
  <App />
);

app.get('/', (req, res) => {
  res.render('index', { initialMarkup });
});

app.listen(3000, () => {
  console.log('Server is running.');
});
