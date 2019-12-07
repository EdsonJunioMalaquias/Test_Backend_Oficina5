const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            street: DataTypes.STRING,
            suite: DataTypes.STRING,
            city: DataTypes.STRING,
            zipcode: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user'});
    }
}
module.exports = Address;