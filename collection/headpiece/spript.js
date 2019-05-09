$(document).ready(function() {
  $(".box1").mouseenter(function() {
    $(".box1").addClass("black");
    $(".text1").addClass("show black");
  });

  $(".box1").mouseleave(function() {
    $(".box1").removeClass("red");
    $(".text1").removeClass("show black");
  });
});
