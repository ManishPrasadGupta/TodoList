import dotenv from 'dotenv';
dotenv.config();

import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,

    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
})


export default pool;