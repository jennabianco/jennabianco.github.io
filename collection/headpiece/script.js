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


$(document).ready(function() {
  $(".box2").mouseenter(function() {
    $(".box2").addClass("black");
    $(".text2").addClass("show black");
  });

  $(".box2").mouseleave(function() {
    $(".box2").removeClass("red");
    $(".text2").removeClass("show black");
  });
});

$(document).ready(function() {
  $(".box3").mouseenter(function() {
    $(".box3").addClass("black");
    $(".text3").addClass("show black");
  });

  $(".box3").mouseleave(function() {
    $(".box3").removeClass("red");
    $(".text3").removeClass("show black");
  });
});
