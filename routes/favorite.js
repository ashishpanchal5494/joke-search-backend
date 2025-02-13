const express = require("express");
const db = require("../config/db");

const route = express.Router();

// Route to add a favorite joke
route.post("/favorites", (req, res) => {
  console.log("Received request body:", req.body); // Debug log

  const { id, joke } = req.body;
  if (!id || !joke) {
    return res.status(400).json({ error: "ID and joke are required" });
  }

  const sql = "INSERT INTO favorites (id, joke) VALUES (?, ?)";
  db.query(sql, [id, joke], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Failed to add favorite" });
    }
    res.status(201).json({ message: "Joke added to favorites", joke });
  });
});

// Route to get all favorite jokes
route.get("/favorites", (req, res) => {
  db.query("SELECT * FROM favorites", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch favorites" });
    }
    res.json(results);
  });
});

// Route to remove a favorite joke
route.delete("/favorites/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM favorites WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Failed to remove favorite" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Joke not found in favorites" });
    }

    res.status(200).json({ message: "Joke removed from favorites" });
  });
});

module.exports = route;
