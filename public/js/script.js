const skillFilter = new Set([]);
$(document).ready(function () {
  // Displaying corresponding skill item cards on click
  $(".skill").click(function () {
    skillFilter.add($(this).text());
    $(".item-card").hide();
    skillFilter.forEach((skill) => {
      $(".item-card").find(`.${skill}`).parent().parent().parent().show();
    });
  });
});
