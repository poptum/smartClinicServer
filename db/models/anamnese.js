module.exports = (sequelize, DataTypes) => {
    const anamnese = sequelize.define('anamnese', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      queixa_principal: {
        type: DataTypes.STRING
      },
      historia_doenca_atual: {
        type: DataTypes.STRING
      },
      hitoria_medica_atual: {
        type: DataTypes.STRING
      }
    });
    return anamnese;
  };