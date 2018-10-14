'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {});
  Group.associate = function(models) {
  };
  return Group;
};