// import mysql from "mysql"

// export const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '12345678',
//     database: 'workfinder'
// });

// require('dotenv').config();
// const mysql = require('mysql2');

import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const urlDB = `mysql://${process.env.MYSQLUSER }:${process.env.MYSQL_ROOT_PASSWORD }@${process.env.RAILWAY_TCP_PROXY_DOMAIN }:${process.env.RAILWAY_TCP_PROXY_PORT }/${process.env.MYSQL_DATABASE }`

export const db = mysql.createConnection(urlDB);