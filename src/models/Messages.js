'use strict';
const model = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Messages.associate = (models) => {
  	Messages.belongsTo(models.Users, {
      foreignKey: 'senderId',
      soureKey: 'id',
      onDelete: 'CASCADE'
    })
  };
  return Messages;
};

export default model