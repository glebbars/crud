const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./.env" });

const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
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
  const sql = "INSERT INTO todo_list SET todo_name = ?";

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

app.delete("/api/delete/:id", (req, res) => {
  const sql = "DELETE FROM todo_list WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// auth

// format of token
// authorization: bearer <access_token>

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (bearerHeader) {
    req.token = bearerHeader.split(" ")[1];

    next();
  } else {
    res.sendStatus(403);
  }
};

app.post("/api/login", (req, res) => {
  const { id, name, email } = req.body;

  jwt.sign(
    { user: { id, name, email } },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15s" },
    (err, token) => {
      res.send({
        token,
      });
    }
  );
});

app.post("/api/post1", verifyToken, (req, res) => {
  jwt.verify(
    req.token,
    process.env.ACCESS_TOKEN_SECRET,
    {},
    (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.send({
          message: "Nice !",
          authData,
        });
      }
    }
  );
});

app.listen(3001, () => console.log("Server is running..."));
