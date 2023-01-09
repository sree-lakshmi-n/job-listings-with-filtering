// exporting function to replace template

module.exports = (temp, tempTags, tempSkills, item) => {
  let output = temp.replace(/{%COMPANY_NAME%}/g, item.company);
  output = output.replace(/{%COMPANY_LOGO%}/g, `${item.logo}`);
  output = output.replace(/{%POSITION%}/g, item.position);
  output = output.replace(/{%POSTED_AT%}/g, item.postedAt);
  output = output.replace(/{%CONTRACT%}/g, item.contract);
  output = output.replace(/{%LOCATION%}/g, item.location);

  let skills = [item.role, item.level, ...item.languages, ...item.tools];
  output = output.replace(/{%SKILL_LIST%}/g, skills.join(" "));

  skills = skills.map((skill) => {
    return tempSkills.replace(/{%SKILL%}/g, skill);
  });
  output = output.replace(/{%SKILLS%}/g, skills.join(""));

  // adding tags
  if (item.new && item.featured) {
    output = output.replace(
      /{%TAGS%}/g,
      tempTags.replace(/{%TAG%}/g, "new") +
        tempTags.replace(/{%TAG%}/g, "featured")
    );
  } else if (item.new) {
    output = output.replace(/{%TAGS%}/g, tempTags.replace(/{%TAG%}/g, "new"));
  } else if (item.featured) {
    output = output.replace(
      /{%TAGS%}/g,
      tempTags.replace(/{%TAG%}/g, "featured")
    );
  } else {
    output = output.replace(/{%TAGS%}/g, "");
  }

  return output;
};
