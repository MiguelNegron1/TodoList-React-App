const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const app = express();
require('dotenv').config();
const todosRoutes = require('./routes/todosRoutes')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});

app.use(cors());
app.use(express.json()); 
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(limiter);
app.use('/todos', todosRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;  