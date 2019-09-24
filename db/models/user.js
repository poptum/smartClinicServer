module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    profile: {
      type: DataTypes.INTEGER,
      references: {
      	model: Sequelize.models.profile,
				key: 'id',
     }
    }
  });
  return user;
};