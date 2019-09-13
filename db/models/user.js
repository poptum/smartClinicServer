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
      type: DataTypes.STRING
    }
  });

  // user.associate = (models) => {
    // user.hasMany(models.userItem, {
    //   foreignKey: 'userId',
    //   as: 'userItems',
    // });
  // };

  return user;
};