'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
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
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        isEmail: true,
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'posts', key: 'id' },
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
      return queryInterface.dropTable('comments');
  }
};
