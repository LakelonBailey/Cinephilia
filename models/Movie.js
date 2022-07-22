const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Movie extends Model {}

Movie.init(
   {
        id: {
         type: DataTypes.INTEGER,
         allowNull:false,
         primaryKey: true,
         autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
      
        },
        image: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true,
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movie',
    }
);


module.exports = Movie;
