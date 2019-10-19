'use strict';
export default (sequelize, DataTypes) => {
  const Channels = sequelize.define('Channels', {
    participants: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  }, {
    instanceMethods: {
      getParticipants: async () => {
        const participants = await Channels.findAll({
          where: {
            id: {
              $in: this.get('participants')
            }
          }
        })
        return participants
      },
      setParticipants: async (ids) => {
        const newParticipants = await this.setDataValue('participants', ids).save()
        return newParticipants
      }
    }
  });
  Channels.associate = (models) => {
    Channels.hasMany(models.Messages, {
      foreignKey: 'channelId',
      as: 'messages'
    })
    // associations can be defined here
  };
  return Channels;
};
