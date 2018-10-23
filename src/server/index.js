
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const BASE_API_URL = '/api';
const PORT = '8080';
const SUBSCRIPTIONKEY = '7d793191c14a42c6b819571a700f12df';
const BING_SEARCH_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=';

const server = express();
server.use(express.static('dist'));
server.use(bodyParser.json());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  next();
});

server.get(BASE_API_URL, (req, res, next) => {
  const { keyword, offset } = req.query;
  const params = offset === '' ? keyword : `${keyword}&offset=${offset}`;
  request({
    url: BING_SEARCH_URL + params,
    headers: { 'Ocp-Apim-Subscription-Key': SUBSCRIPTIONKEY }
  }, (error, response, body) => {
    const searchResponse = JSON.parse(body);
    res.send({ data: searchResponse.value, nextOffset: searchResponse.nextOffset });
    next();
  });
});

server.listen(PORT, () => {
  console.log(`Listen on port #: ${PORT}`);
});
