$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $("#receipt").show();
    event.preventDefault();
   });
});
