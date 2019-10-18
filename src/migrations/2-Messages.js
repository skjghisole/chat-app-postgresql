module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
    return queryInterface.createTable('Messages', {
    	id: {
    		allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
    	},
    	content: {
    		type: Sequelize.STRING,
    		allowNull: false
    	},
      senderId: {
          type: Sequelize.STRING,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id',
            as: 'senderId',
          },
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    return queryInterface.dropTable('Messages');
  }
}