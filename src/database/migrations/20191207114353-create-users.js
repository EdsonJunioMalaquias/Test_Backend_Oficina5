'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        isEmail: true,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      website: {
        allowNull: false,
        type: Sequelize.STRING,
        isUrl: true,
      },
      createdAt :{
        type: Sequelize.DATE,
        allowNull :false,
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
