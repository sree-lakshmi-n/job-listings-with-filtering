const skillFilter = new Set([]);
$(document).ready(function () {
  $(".skill").click(function () {
    skillFilter.add($(this).text());
  });
});
