module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
  	id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    profile: {
      type: DataTypes.STRING,
    },
  });
  // profile.associate = (models) => {
    // profile.hasMany(models.profileItem, {
    //   foreignKey: 'profileId',
    //   as: 'profileItems',
    // });
  // };

  return profile;
};