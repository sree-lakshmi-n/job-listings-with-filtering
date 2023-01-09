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
