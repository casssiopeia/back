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

router.patch("/:id", (request, response) => {
  const todoId = request.params.id;
  // TODO: апдейтнуть тудуху
  Todo.update({ where: { id: todoId } }).then((data) => {
    console.log(data);
  });
});

module.exports = router;
