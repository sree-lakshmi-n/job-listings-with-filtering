const fs = require("fs");
const express = require("express");
const app = express();

// Read templates
const tempOverview = fs.readFileSync(
  `${__dirname}/views/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/views/template-item-card.html`,
  "utf-8"
);

// Read data
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/public/assets/data.json`)
);

app.get("/", (req, res) => {
  res.end(JSON.stringify(data));
});

const port = 3000;
app.listen(port, () => console.log("listening to port", port));
