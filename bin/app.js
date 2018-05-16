import ExpressReactIsomorphic from './middleware';
const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.resolve(path.join('isomorphic', 'build'));
const expressPath = path.resolve(path.join('app', 'config', 'express.js'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use(ExpressReactIsomorphic);
require(expressPath)(express, app, publicPath);

app.set('port', (process.env.PORT || 3001));

app.get('/api/healthcheck', (req, res) => {
    res.send({
        id: 1000,
        message: 'Rocks!',
        email: 'cmilfont@gmail.com'
    });
});

app.listen(app.get('port'), () => {
    console.log(`ind the server at: http://localhost:${app.get('port')}`);
})

module.exports = app;