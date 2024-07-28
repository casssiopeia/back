const express = require("express");
const Todo = require("../database/models/todo");
const { where } = require("sequelize");

const router = express.Router();

router.get("/all", (request, response) => {
  Todo.findAll().then((todos) => {
    response.json(todos);
  });
});

router.post("/all", (request, response) => {
  const { todoText } = request.body;

  Todo.create({ title: todoText, completed: false }).then((data) => {
    response.json(data.dataValues);
  });
});

router.patch("/:id", async (request, response) => {
  const {id, completed} = request.body;

  const todo = await Todo.findByPk(id);

  if (!todo) {
    response.json({error: 'todo not found'})
    return;
  }

  await todo.update({completed: !completed});

  response.json(todo);
});

router.delete('/:id', async (request, response) => {
  const todoId = request.params.id;

  const todo = await Todo.findByPk(todoId);

  await todo.destroy();

  response.status(202).json({result: 'ok'});
});

module.exports = router;
