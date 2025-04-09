const db = require('../database/db');

db.run(`CREATE TABLE IF NOT EXISTS nomes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT
)`);

function inserir(nome, callback) {
  db.run('INSERT INTO nomes (nome) VALUES (?)', [nome], callback);
}

function listar(callback) {
  db.all('SELECT * FROM nomes', callback);
}

function deletar(id, callback) {
  db.run('DELETE FROM nomes WHERE id = ?', [id], callback);
}

function atualizar(id, nome, callback) {
  db.run('UPDATE nomes SET nome = ? WHERE id = ?', [nome, id], callback);
}

module.exports = { inserir, listar, deletar, atualizar };
