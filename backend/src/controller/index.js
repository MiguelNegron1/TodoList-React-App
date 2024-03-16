const pool = require('../db/models/index')

const getAllTodos = async(req, res) => {
    try {
        const {rows} = await pool.query(`SELECT * FROM todos`);
        console.log(rows);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const getOneTodo = async(req, res) => {
    try {
        const {id} = req.params
        const {rows} = await pool.query(`SELECT * FROM todos WHERE id = $1`,[id]);
        console.log(rows);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const createTodo = async(req, res) => {
    try {
        const {title, is_completed} = req.body
        const {rows} = await pool.query(`INSERT INTO todos(title, is_completed) VALUES ($1, $2) RETURNING *`, [title, is_completed]);
        res.status(201).json(rows[0])
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateTodoById = async(req, res) => {
    try {
        const {id} = req.params;
        const {title, is_completed} = req.body;
        const {rows} = await pool.query(`UPDATE todos SET title = $1, is_completed = $2 WHERE id = $3 RETURNING *`, [title, is_completed, id]);
        // res.status(200).json({message: 'Todo updated successfully', rows})
        if (rows.length > 0) {
            res.json(rows[0])
        } else {
            res.status(404).json({error: 'Todo Not found'})
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
const deleteTodoById = async(req, res) => {
    try {
        const {id} = req.params;
        const {rowCount} = await pool.query(`DELETE FROM todos WHERE id = $1`, [id]);
        // res.status(200).json({message: 'Todo deleted successfully', rowCount});
        if (rowCount > 0) {
            res.status(200).json({message: 'Todo deleted successfully', deletedCount: rowCount})
        } else {
            return res.status(404).json({error: 'Todo Not found'})
        }                       
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllTodos,
    getOneTodo,
    createTodo,
    updateTodoById,
    deleteTodoById
}
