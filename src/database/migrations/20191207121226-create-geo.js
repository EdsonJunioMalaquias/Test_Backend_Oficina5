'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('geo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lat: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lng: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references : { model: 'address', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('geo');
  }
};
