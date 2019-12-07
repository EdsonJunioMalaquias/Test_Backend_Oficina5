'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
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
    return queryInterface.dropTable('posts');
  }
};
