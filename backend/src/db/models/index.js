
require('dotenv').config()

const {Pool} = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


// async function createTables() {
//   const client = await pool.connect();
//   try {
//     const res = await client.query(`CREATE TABLE todos (
//       id SERIAL PRIMARY KEY,
//       title VARCHAR(255) NOT NULL,
//       description TEXT,
//       is_completed BOOLEAN NOT NULL DEFAULT FALSE,
//       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );`);
//     console.log(res);
//   } finally {
//     client.release();
//   }
// }
async function createTables() {
  const client = await pool.connect();
  try {
    // Check if the "todos" table already exists
    const tableCheckQuery = `
      SELECT EXISTS (
        SELECT FROM 
        pg_tables
        WHERE 
        schemaname = 'public' AND 
        tablename  = 'todos'
      );
    `;
    const tableExists = await client.query(tableCheckQuery);

    if (!tableExists.rows[0].exists) {
      // If the table doesn't exist, create it
      const createTableQuery = `
        CREATE TABLE todos (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT,
          is_completed BOOLEAN NOT NULL DEFAULT FALSE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;
      const res = await client.query(createTableQuery);
      console.log("Table 'todos' created successfully.", res.command);
    } else {
      // If the table exists, you might want to log that information or take other actions
      console.log("Table 'todos' already exists.");
    }
  } catch (error) {
    console.error('Error executing table check/create:', error.stack);
  } finally {
    client.release();
  }
}
createTables().catch(err => console.log(err.stack));

module.exports = pool;