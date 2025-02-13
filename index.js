const express = require("express");

const favoriteRoute = require("./routes/favorite");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello my name is ashish");
});

app.use("/", favoriteRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
