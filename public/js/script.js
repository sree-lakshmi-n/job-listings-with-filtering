const skillFilter = new Set([]);
$(document).ready(function () {
  // Displaying corresponding skill item cards on click
  $(".skill").click(function () {
    const skillItem = $(this).text();
    filterSkills(skillItem);
  });
});

const hideItemCards = () => {
  $(".item-card").hide();
};
const showItemCards = (classes) => {
  $(`.item-card${classes || ""}`).show();
};

const filterSkills = (skillItem) => {
  skillFilter.add(skillItem);
  hideItemCards();
  const classes = [...skillFilter].map((skill) => `.${skill}`).join("");
  showItemCards(classes);
};

const createSkillItem = (skill) => {
  console.log("hi");
  const skillItem = document.createElement("div");
  skillItem.setAttribute("class", "skill-items");
  const skillName = document.createElement("span");
  skillName.setAttribute("class", "skill-name");
  skillName.textContent = skill;
  const btnClose = document.createElement("button");
  btnClose.setAttribute("class", "btn-close");
  btnClose.textContent = "X";
  skillItem.appendChild(skillName);
  skillItem.appendChild(btnClose);

  const searchBar = document.getElementsByClassName("search-bar")[0];
  console.log(searchBar);
  searchBar.appendChild(skillItem);
};
createSkillItem("CSS");
