const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const routers = require('./routers.json');
const test = require('./test.json');

server.use(jsonServer.bodyParser);

server.get(`${routers.test}${test.test.url}`, (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');

  res.status(200).jsonp(test.test['200']);
});

server.use(middlewares);

server.listen(8000, () => {
  console.log('JSON Server is running');
});
