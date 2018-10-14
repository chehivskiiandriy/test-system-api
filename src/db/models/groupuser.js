'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupUser = sequelize.define('groupUser', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {});
  GroupUser.associate = function(models) {
    models.group.belongsToMany(models.user, { through: 'groupUser' })
    models.user.belongsToMany(models.group, { through: 'groupUser' })
  };
  return GroupUser;
};