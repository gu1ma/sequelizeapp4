'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class supermercados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      supermercados.belongsToMany(models.produtos, {
        through: 'produtos_supermercados',
        foreignKey: 'supermercadoId',
        as: 'produto',
        timestamps: false
      })
    }
  }
  supermercados.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'supermercados',
  });
  return supermercados;
};