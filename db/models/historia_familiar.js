module.exports = (sequelize, DataTypes) => {
    const historia_familiar = sequelize.define('historia_familiar', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      doenca_familiar: {
        type: DataTypes.JSON
      },
      pais_vivos: {
        type: DataTypes.JSON
      },
      irmaos: {
        type: DataTypes.JSON
      },
      filhos: {
        type: DataTypes.JSON
      }
    });
    return historia_familiar;
  };