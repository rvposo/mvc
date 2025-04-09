const express = require('express');
const router = express.Router();
const model = require('../model/cadastroModel');

router.get('/', (req, res) => {
  model.listar((err, nomes) => {
    if (err) return res.send('Erro ao listar');
    res.render('index', { nomes });
  });
});

router.post('/cadastrar', (req, res) => {
  model.inserir(req.body.nome, (err) => {
    if (err) return res.send('Erro ao cadastrar');
    res.redirect('/');
  });
});

router.post('/deletar/:id', (req, res) => {
  model.deletar(req.params.id, (err) => {
    if (err) return res.send('Erro ao deletar');
    res.redirect('/');
  });
});

router.post('/editar/:id', (req, res) => {
  model.atualizar(req.params.id, req.body.nome, (err) => {
    if (err) return res.send('Erro ao editar');
    res.redirect('/');
  });
});

module.exports = router;
