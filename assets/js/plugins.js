$(document).ready(function () {
  $(".owl-slider").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    dots: true,
    nav: false,
    navText: [
      '<i class="fa-solid fa-angles-left"></i>',
      '<i class="fa-solid fa-angles-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
// testimnial slider============
$(document).ready(function () {
  $(".testimonial-items-wraper").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1500,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    navText: [
      '<i class="fa-solid fa-angles-left"></i>',
      '<i class="fa-solid fa-angles-right"></i>',
    ],
  });
});

// client-review-slider JS
$(".client-review-slider ").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  smartSpeed: 2500,
  autoplay: false,
  autoplayTimeout: 4000,
  navText: [
    '<i class="fa-solid fa-angles-left"></i>',
    '<i class="fa-solid fa-angles-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
});
