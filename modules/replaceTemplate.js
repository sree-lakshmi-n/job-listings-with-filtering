// exporting function to replace template
const path = require("path");

module.exports = (temp, item) => {
  let output = temp.replace(/{%COMPANY_NAME%}/g, item.company);
  output = output.replace(
    /{%COMPANY_LOGO%}/g,
    `${path.join(__dirname, "../", item.logo)}`
  );
  output = output.replace(/{%POSITION%}/g, item.position);
  output = output.replace(/{%POSTED_AT%}/g, item.postedAt);
  output = output.replace(/{%CONTRACT%}/g, item.contract);
  output = output.replace(/{%LOCATION%}/g, item.location);
  output = output.replace(/{%SKILLS%}/g, [...item.languages, ...item.tools]);
  return output;
};
