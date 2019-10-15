module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
    return queryInterface.createTable('Users', {
    	id: {
    		allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
    	},
    	username: {
    		type: Sequelize.STRING,
    		allowNull: false
    	},
    	email: {
    		type: Sequelize.STRING,
    		allowNull: false
    	},
    	password: {
    		type: Sequelize.STRING,
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
    return queryInterface.dropTable('Users');
  }
}