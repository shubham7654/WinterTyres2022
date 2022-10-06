$td = $("td:not([class])");
$redCell = $(".red-cell");

$redCell.attr({ "data-bs-toggle": "modal", "data-bs-target": "#exampleModal" });

$td.on("click", function () {
  $td.css("backgroundColor", "#92d050")
  $(this).css("backgroundColor", "rgb(255,219,0)");
});
