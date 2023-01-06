const fs = require("fs");
const express = require("express");
const app = express();
const replaceTemplate = require("./modules/replaceTemplate");

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
const tempSkills = fs.readFileSync(
  `${__dirname}/views/template-skill.html`,
  "utf-8"
);
const tempSearchBar = fs.readFileSync(
  `${__dirname}/views/template-search-bar.html`,
  "utf-8"
);
const tempSearchFilter = fs.readFileSync(
  `${__dirname}/views/template-search-filter.html`,
  "utf-8"
);

// Read data
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/public/assets/data.json`)
);

// Search bar added
tempOverview.replace(/{%SEARCH_BAR%}/g, tempSearchBar);

// Initial Page Setup
const pageSetup = (req, res) => {
  res.writeHead(200, {
    "Content-type": "text/html",
  });
  const itemCards = data.map((item) => {
    return replaceTemplate(tempCard, tempTags, tempSkills, item);
  });
  const output = tempOverview.replace(/{%ITEM_CARDS%}/g, itemCards);

  res.end(output.split(",").join(" "));
};

app.route("/").get(pageSetup);

const port = 3000;
app.listen(port, () => console.log("listening to port", port));
