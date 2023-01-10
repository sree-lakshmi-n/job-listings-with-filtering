const skillFilter = new Set([]);
$(document).ready(function () {
  // Displaying corresponding skill item cards on click
  $(".skill").click(function () {
    const skillItem = $(this).text();
    createSkillItem(skillItem);
    filterSkills(skillItem);
  });

  // Clear button event handler
  $(".btn-clear").click(clearBtnHandler);
});

const hideItemCards = () => {
  $(".item-card").hide();
};
const showItemCards = (classes) => {
  $(`.item-card${classes || ""}`).show();
};

const filterSkills = (skillItem) => {
  if (skillItem) skillFilter.add(skillItem);
  hideItemCards();
  const classes = [...skillFilter].map((skill) => `.${skill}`).join("");
  showItemCards(classes);
};

const createSkillItem = (skill) => {
  if (skillFilter.has(skill)) return;
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
  searchBar.appendChild(skillItem);
  closeBtnHandler();
};

// Close btn functionality
const closeBtnHandler = () => {
  $(".btn-close").click(function () {
    const skill = $(this).prev().text();
    refreshFilter(skill);
    $(this).parent().remove();
  });
};

// Clear btn functionality
const clearBtnHandler = () => {
  const skillItem = $(".skill-items")[$(".skill-items").length - 1];
  refreshFilter(skillItem.children[0].textContent);
  skillItem.remove();
};

const refreshFilter = (skill) => {
  skillFilter.delete(skill);
  filterSkills();
};
