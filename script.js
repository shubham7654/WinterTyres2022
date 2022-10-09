$td = $("td:not([class])");
$redCell = $(".red-cell");

$redCell.attr({ "data-bs-toggle": "modal", "data-bs-target": "#exampleModal" });

$td.on("click", function () {
  $td.css("backgroundColor", "#92d050");
  $(this).css("backgroundColor", "rgb(255,219,0)");
});

$dragArea = $("#drag-area");
$dropArea = $("#drop-area");
$eventVideo = $("#event-video");

$dragArea.attr("draggable", true);
$dropArea.attr("draggable", true);
$eventVideo.attr("draggable", true);

$eventVideo.on("dragstart", function (event) {
  console.log(event);
});

// $eventVideo.on("drag", function () {
//   console.log("Element is being dragged")
// });

// $eventVideo.on("dragleave", function () {
//   console.log("Element has left the draggable area")
// });

// $eventVideo.on("dragenter", function () {
//   console.log("Element has entered the draggable area")
// });

// $eventVideo.on("dragover", function () {
//   console.log("Element has been dragged back into the draggable area")
// });

// $eventVideo.on("dragend", function () {
//   console.log("Element has been dragged");
// });

// $eventVideo.on("drop", function () {
//   console.log("Element has been dropped");
// });
