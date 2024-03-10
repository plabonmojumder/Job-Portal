$(document).on("click", ".navbar-bar-icon", function () {
  $(".header").toggleClass("mobile-menu-visible");
});

$(document).on("click", function (event) {
  var header = $(".header");
  var navbarBarIcon = $(".navbar-bar-icon");

  if (
    !header.is(event.target) &&
    header.has(event.target).length === 0 &&
    !navbarBarIcon.is(event.target) &&
    navbarBarIcon.has(event.target).length === 0
  ) {
    header.removeClass("mobile-menu-visible");
  }
});

$(document).ready(function () {
  // Nav submenu Responsive
  if ($(window).width() <= 1200) {
    $(".drop-down-menu").addClass("collapse");
  } else {
    $(".drop-down-menu").removeClass("collapse");
  }

  $(window).resize(function () {
    if ($(window).width() <= 1200) {
      $(".drop-down-menu").addClass("collapse");
    } else {
      $(".drop-down-menu").removeClass("collapse");
    }
  });

  // Small Device Submenu Show and Hide
  // $(".nav-link").on("click", function () {
  //   $(this).closest(".sub-menu").find(".collapse").collapse("toggle");
  // });

  $(".nav-link").on("click", function () {
    var $submenu = $(this).closest(".sub-menu").find(".collapse");
    $(".sub-menu")
      .not($(this).closest(".sub-menu"))
      .find(".collapse")
      .collapse("hide");
    $submenu.collapse("toggle");
  });
});

// counter js===============
document.addEventListener("DOMContentLoaded", function () {
  const jobPostedCounts = document.querySelectorAll("[id^='jobPostedCount']");

  jobPostedCounts.forEach((jobPostedCount, index) => {
    const target = +jobPostedCount.innerText;
    let currentValue = 0;

    const incrementValue = () => {
      if (currentValue < target) {
        currentValue += Math.ceil(target / 100); // Increment by a fraction of the target value
        jobPostedCount.innerText = currentValue;
        setTimeout(incrementValue, 20); // Repeat the function with a slight delay
      } else {
        jobPostedCount.innerText = target; // Ensure final value matches target exactly
      }
    };

    incrementValue(); // Start the counter animation
  });
});

// ====================================================================
