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

<<<<<<< HEAD
module.exports = Todo;
=======

module.exports = Todo;


>>>>>>> 7235040bd65ab14da753395bc3a542d97789441f
