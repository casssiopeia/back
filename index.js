const cors = require('cors');
const express = require('express');
const todos = require('./routes/todos');

const app = express();

app.use(express.static('public'));
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded());
app.use(express.json());
// app.use((...args) => {
//     return args;
// })

app.use('/todos', todos);
// todos/all GET
// todos/post POST


const start = () => {
    app.listen(3333, () => {
        console.log('SERVER IS RUNNING ON PORT: 3333');
    });
};

start();

