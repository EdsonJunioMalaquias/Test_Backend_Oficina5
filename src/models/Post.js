const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            boody: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Users, { foreignKey: 'userId', as: 'user'});
    }
}
module.exports = Address;