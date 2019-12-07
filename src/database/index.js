const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Users = require ('../models/User');
const Posts = require ('../models/Post');
const Address = require ('../models/Address');
const connection = new Sequelize(dbConfig);


Users.init(connection);
Posts.init(connection);
Address.init(connection);

Posts.associate(connection.models);
Address.associate(connection.models);
module.exports =connection;