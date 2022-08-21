const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crud",
  // host: dbConfig.host,
  // user: dbConfig.username,
  // database: dbConfig.database,
  // password: dbConfig.password,
  // port: Number(dbConfig.port),
  // namedPlaceholders: true,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sql = "SELECT * FROM todo_list";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const sql = "INSERT INTO todo_list (todo_name) VALUES (?)";
  // const sql = "INSERT INTO todo_list SET ?";
  db.query(sql, [req.body.name], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put("/api/update", (req, res) => {
  const { name, id } = req.body;
  const sql = "UPDATE todo_list SET todo_name = ? WHERE id = ?";

  db.query(sql, [name, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// for some reasom it actually deletes todo (yous hould realod app) but app crashes
app.delete("/api/delete/:id", (req, res) => {
  const sql = "DELETE FROM todo_list WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3001, () => console.log("Server is running..."));
