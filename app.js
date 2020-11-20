const express = require("express");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/stylesheets"));

app.get("/", async (req, res, next) => {
  try {
    res.send(layout());
  } catch (error) {
    console.log(error);
    next();
  }
});

const PORT = "3000";
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
