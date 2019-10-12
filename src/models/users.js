'use strict';
const model = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Users.associate = (models) => {
  	Users.hasMany(models.Messages, {
  		foreignKey: 'senderId',
  		as: 'messages'
  	})
    // associations can be defined here
  };
  return Users;
};

export default model