const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const restFull = require('express-method-override')('_method');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.use(restFull);
app.use(routes);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));