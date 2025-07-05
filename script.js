$(function () {

  $(".hamburger-btn").on("click", function () {
    if ($("header").hasClass("open")) {
      $("header").removeClass("open");
    } else {
      $("header").addClass("open");
    }
  });
  $("nav li").on("click", function () {

    $("header").removeClass("open");

  });
  $(".mask").on("click", function () {

    $("header").removeClass("open");

  });


  let fadeIn = function () {
  let scroll = $(window).scrollTop();
  let windowHeight = $(window).height();

  $(".fadein").each(function () {
    let target = $(this).offset().top;
    if (scroll > target - windowHeight + 200) {
      $(this).css({
        opacity: 1,
        transform: "translateY(0)"
      });
    }
  });
};
$(window).on("scroll", fadeIn);
fadeIn(); // 初回呼び出しも忘れずに



  $(".slide-items").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "30%",

    responsive: [{
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "5%",
        dots: false,
      }
    }]
  });
});

//マウスストーカー
const stalker = document.getElementById('mouse-stalker');
let hovFlag = false;

document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;
        stalker.classList.add('is_active');

    });
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('is_active');
    });
}
