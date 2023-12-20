const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs").promises;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/api/todos", async (req, res) => {
  try {
    const data = await fs.readFile("./server/todos.json", "utf8");
    const todos = JSON.parse(data);
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
