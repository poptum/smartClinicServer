module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // user.associate = (models) => {
    // user.hasMany(models.userItem, {
    //   foreignKey: 'userId',
    //   as: 'userItems',
    // });
  // };

  return user;
};