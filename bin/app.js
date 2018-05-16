import ExpressReactIsomorphic from './middleware';

const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin...');
    next();
})
app.use(ExpressReactIsomorphic);

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