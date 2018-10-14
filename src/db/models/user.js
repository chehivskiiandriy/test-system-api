'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ['banned', 'user', 'teacher', 'admin']
    }
  }, {});
  User.associate = function(models) {
  };
  return User;
};