const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize;
>>>>>>> 7235040bd65ab14da753395bc3a542d97789441f
