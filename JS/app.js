/*                                           Navbar                                  */

$(window).scroll(function () {
  var scrollDistance = $(window).scrollTop() + 50;
  $(".section").each(function (i) {
    if ($(this).position().top <= scrollDistance) {
      $(".collapse a.active").removeClass("active");
      $(".collapse a").eq(i).addClass("active");
    }
  });
  //
  if ($(window).scrollTop() > 100) {
    $(".navbar").css("background-color", "rgb(33, 37, 41)");
    $(".dropdown-menu").css("background-color", "rgb(33, 37, 41)");
    $(".navbar-toggler").css("background-color", "rgb(33, 37, 41)");
  } else {
    $(".navbar").css("background-color", "rgba(33, 37, 41,0.5)");
    $(".dropdown-menu").css("background-color", "rgba(33, 37, 41,0.5)");
    $(".navbar-toggler").css("background-color", "rgba(33, 37, 41,0.5)");
  }
}).scroll();
$(function () {
  $(".navbar-toggler").blur(function () {
    $(".navbar-collapse").collapse("hide");
  });
});
/*                                       Scroll to the top                           */

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".scroll-to-top").fadeIn();

    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
});

/*                                         Validation-form                                   */

function acceptOK() {
  if (document.getElementById("accept").checked) {
    document.getElementById("button-ok").classList.remove("disabled");
  } else {
    document.getElementById("button-ok").classList.add("disabled");
  }
}

/*                                         Smooth Scrolling                                    */

$("a").on("click", function (e) {
  if (this.hash != "#") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
