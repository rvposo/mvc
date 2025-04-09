const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cadastroRoutes = require('./controller/cadastroController');

app.set('view engine', 'ejs');
app.set('views', './view');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', cadastroRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
