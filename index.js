const fs = require("fs");
const express = require("express");
const app = express();
const replaceTemplate = require("./modules/replaceTemplate");
const path = require("path");

app.use(express.static("public"));

// Read templates
const tempOverview = fs.readFileSync(
  `${__dirname}/views/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/views/template-item-card.html`,
  "utf-8"
);
const tempTags = fs.readFileSync(
  `${__dirname}/views/template-tags.html`,
  "utf-8"
);

// Read data
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/public/assets/data.json`)
);
console.log(data[0].logo);
app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-type": "text/html",
  });
  const itemCards = data.map((item) => {
    return replaceTemplate(tempCard, tempTags, item);
  });

  const output = tempOverview.replace(/{%ITEM_CARDS%}/g, itemCards);
  res.end(output.split(",").join(" "));
});

const port = 3000;
app.listen(port, () => console.log("listening to port", port));
