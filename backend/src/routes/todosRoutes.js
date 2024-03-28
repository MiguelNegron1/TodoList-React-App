const { Router} = require('express');
const router = Router();
const {getAllTodos,getOneTodo, createTodo, updateTodoById, deleteTodoById, } = require('../controller/index');

router.get('/', getAllTodos);

router.get('/:id', getOneTodo);
router.post('/', createTodo);
router.put('/:id', updateTodoById);
router.delete('/:id', deleteTodoById);

module.exports = router;

