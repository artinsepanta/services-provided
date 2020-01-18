const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createUser = (req, res) => {
  const { firstName, lastName, gender,heaith } = req.body
  let sql = "INSERT INTO users (firstName, lastName, gender, health) VALUES (?, ?)"
  sql = mysql.format(sql, [ firstName, lastName, gender, health ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateUserByUserId = (req, res) => {
  const { firstName, lastName, gender, health } = req.body
  let sql = "UPDATE users SET firstName = ?, lastName = ?, gender=?, health =?  WHERE userId = ?"
  sql = mysql.format(sql, [ firstName, lastName, gender,health, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteUserByFirstName = (req, res) => {
  let sql = "DELETE FROM users WHERE firstName = ?"
  sql = mysql.format(sql, [ req.params.first_name ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

module.exports = {
  getAllUsers,
  getUserByUserId,
  createUser,
  updateUserByUserId,
  deleteUserByFirstName
}