'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      suite: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      zipcode: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      user_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references : { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('address');
  }
};
