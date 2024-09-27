const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Evento = sequelize.define("eventos", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_evento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Evento;
