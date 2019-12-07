const { Model, DataTypes } = require('sequelize');

class Post extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            body: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Users, { foreignKey: 'userId', as: 'user'});
    }
}
module.exports = Post;