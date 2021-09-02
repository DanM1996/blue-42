const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model { }


User.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least 7 characters long
                len: [5]
            }
        }
    },

    {
        hooks: {
            async beforeCreate(newAccount) {
                newAccount.password = await bcrypt.hash(newAccount.password, 10);
                return newAccount;
            },
            
            async beforeUpdate(updateAccount) {
                updateAccount.password = await bcrypt.hash(updateAccount.password, 10);
                return updateAccount;
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User;