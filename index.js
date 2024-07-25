const cors = require('cors');
const express = require('express');
const todos = require('./routes/todos');
const sequelize = require('./database/database');

const app = express();

app.use(express.static('public'));
<<<<<<< HEAD

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded());

app.use(express.json());

app.use('/todos', todos);

const start = async () => {

    await sequelize.sync();

    app.listen(3333, () => {
        console.log('SERVER IS RUNNING ON PORT: 3333')
    });
}

start();

// app.use((...args) => {
//     console.log(args);

//     return args;
// });
=======
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded());
app.use(express.json());

app.use('/todos', todos);
// todos/all GET
// todos/post POST


const start = async () => {
    await sequelize.sync();

    app.listen(3333, () => {
        console.log('SERVER IS RUNNING ON PORT: 3333');
    });
};

start();

>>>>>>> 7235040bd65ab14da753395bc3a542d97789441f
