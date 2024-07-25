const express = require('express');
const Todo = require('../database/models/todo');

const router = express.Router();

router.get('/all', (request, response) => {
    Todo.findAll()
    .then((todos) => {
        response.json(todos);
    });

});

router.patch('/:id', (request, response) => {
    console.log(request.params);
})

router.post('/all', (request, response) => {
    
    const {todoText} = request.body;

    Todo.create({title: todoText, completed: false}).then((data) => {
        response.json(data.dataValues);
    });

    
});

module.exports = router;