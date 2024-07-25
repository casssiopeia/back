const sequelize = require('../database');
const {DataTypes} = require('sequelize');
const {Sequelize} = require('sequelize');

const Todo = sequelize.define('todo', {
    completed: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});

module.exports = Todo;