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
console.log(tempCard);
