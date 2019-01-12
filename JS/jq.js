/*
$(document).ready(function() {
  $(".scrl").on("click", function() {
    alert(window.pageYOffset);
  });
});
*/
$(document).ready(function() {
  $(window).on("load", function() {
    $("header").addClass("dropd");
  });
});
$(document).ready(function() {
  $(window).on("load", function() {
    $("section#section-a").addClass("visible");
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    var sc = window.pageYOffset;
    if (sc > 300) {
      $("section#section-b").addClass("visible");
    }
  });
});
$(document).ready(function() {
  $(window).scroll(function() {
    var sc = window.pageYOffset;
    if (sc > 1200) {
      $("section#section-c").addClass("visible");
    }
  });
});
$(document).ready(function() {
  $(window).scroll(function() {
    var sc = window.pageYOffset;
    if (sc > 1785.5999755859375) {
      $("section#section-d").addClass("visible");
    }
  });
});

$(window).on("load", function() {
  $(".bbfore").addClass("vanish");
});
