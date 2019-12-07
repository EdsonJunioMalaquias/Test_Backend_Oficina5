const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Users = require ('../models/User');
const Address = require ('../models/Address');
const connection = new Sequelize(dbConfig);


Users.init(connection);
Address.init(connection);

module.exports =connection;