
console.log("main.js is connected")

$(document).ready(function() {
    $('.comment-btn').click(function() {
      var target = $($(this).data('bs-target'));
      target.collapse('toggle');
      $(this).hide();
    });
  });