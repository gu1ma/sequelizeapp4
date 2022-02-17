const sequelize = require('sequelize');

module.exports = [{
    nome: 'Smart tv lg',
    categoriaId: 4,
    descricao: 'Smart tv lg 29 polegadas',
    createdAt: sequelize.fn('NOW'),
    updatedAt: sequelize.fn('NOW'),
   }, {
    nome: 'Suco Seregi',
    categoriaId: 5,
    descricao: 'Sucos de variados sabores',
    createdAt: sequelize.fn('NOW'),
    updatedAt: sequelize.fn('NOW'),
}, {
    nome: 'Toddy',
    categoriaId: 5,
    descricao: 'Descricao toddy',
    createdAt: sequelize.fn('NOW'),
    updatedAt: sequelize.fn('NOW'),
}];

