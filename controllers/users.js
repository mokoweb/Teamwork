// import users from '../models/users';// import pool from    '../database/dbconnect';
const { Pool } = require('pg');
const dotenv = require('dotenv');
const moment = require('moment');
const uuidv1 = require('uuid/v1');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

exports.createUser = (req, res) => {
  const {
    firstName, lastName, email, gender, password, jobRole, department, address,
  } = req.body;

  const createdOn = moment();
  const userId = uuidv1();

  pool.connect((err, client) => {
    const query = 'INSERT INTO users(userId, firstName,lastName,email, gender,password,jobRole, department,address,createdOn) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *';
    // eslint-disable-next-line max-len
    const values = [userId, firstName, lastName, email, gender, password, jobRole, department, address, createdOn];

    client.query(query, values, (error, result) => {
      // done();
      if (error) {
        console.log(error.stack);
        res.status(400).json({ error });
      } else {
        res.status(202).send({
          status: 'sUccess',
          data: {
            message: 'User account succesfully created',
            token: '',
            userId: result.rows[0].userId,
          },
        });
      }
    });
  });
};


exports.getAllUsers = (req, res) => {
  pool.connect((err, client, done) => {
    const query = 'SELECT * FROM users';
    client.query(query, (error, result) => {
      done();
      if (error) {
        res.status(400).json({ error });
      }

      res.status(200).send({
        status: 'success',
        message: 'users Information retrieved',
        students: result.rows,
      });
    });
  });
};
