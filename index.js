const cors = require('cors');
const express = require('express');
const todos = require('./routes/todos');
const sequelize = require('./database/database');

const app = express();

app.use(express.static('public'));
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

