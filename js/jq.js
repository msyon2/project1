$(document).ready(function () {
  $("#fullpage").fullpage({
    v2compatible: false,
    autoScrolling: false,
    scrollHorizontally: false,
    anchors: ["MainPage", "HealthyPage", "NowPage"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["MAIN", "HEALTHY", "NOW"],
    showActiveTooltip: true,
    paddingBottom: "4em",
    onLeave: function (origin, destination, direction) {
      console.log(origin.index);
      //섹션이 0보다 크면 스티키 함수 실행
      let currentSec = origin.index;
      let winTop = destination.index;
      if (currentSec == 0 && direction == "down") {
        stickyFn();
      } else if (currentSec > 0 && winTop == 0) {
        $("html,body").animate({ scrollTop: 0 }, 1000);
      }
    },
  });
});

/* Header top style change on hover */
var Logo = $(".logo img");
colorLogo = "images/logo.png";
defaultLogo = "images/logo_main.png";

//Header top logo color change
function switchLogo(newLogoPath) {
  Logo.hide();
  Logo.attr("src", newLogoPath);
  Logo.show();
}
//Header top style change on .gnb hover
function switchHeaderTop() {
  if (!$("#gnb_top").hasClass("open")) {
    $("#gnb_top").addClass("open");
    switchLogo(colorLogo);
  } else {
    if ($("#gnb_top").hasClass("open")) {
      $("#gnb_top").removeClass("open");
      switchLogo(defaultLogo);
    }
  }
}

/* gnb - Full menu dropdown on hover */
const gnbNav = $("#gnb_nav");
const gnb = gnbNav.find(".gnb_wrap");
const gnbBtn = gnbNav.find("button.open_menu");
const width100 = gnbNav.find(".width100");

gnb.hover(
  function () {
    width100.addClass("open");
    switchHeaderTop();
  },
  function () {
    width100.removeClass("open");
    switchHeaderTop(); 
  }
);




/* 햄버거토글클릭 */
gnbBtn.click(function () {
  width100.toggleClass("open");
  switchHeaderTop();
  return false;
});

/* Header language btn */
$("#gnb .lang").click(function (e) {
  e.preventDefault();
  $("#gnb .lang ul").toggle();
});

/* Back to Top button */
const btt = $("#back_to_top");

btt.click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

/* SCROLL Events */
function stickyFn() {
  const gnbFixed = $("#gnb");
  const quickLink = $(".q_link_wrap");
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1030) {
      gnbFixed.addClass("fixed");
      quickLink.addClass("fixed");
      if (
        $(window).scrollTop() + window.innerHeight >
        $(document).height() - 400
      ) {
        quickLink.removeClass("fixed");
      }
    } else {
      gnbFixed.removeClass("fixed");
      quickLink.removeClass("fixed");
    }
  });
}

/* Main Visual Slider */
var visualWrap = $("#key_visual .kv_bg"),
  visual = visualWrap.find(".slider ul li"),
  visualCount = visual.length,
  pager = visualWrap.find(".pager li"),
  leftBtn = visualWrap.find(".slider_control .prev"),
  rightBtn = visualWrap.find(".slider_control .next"),
  current = 0,
  setIntervalId;

let visualPos = visual.each(function (i) {
  $(this).css("left", i * 100 + "%");
});

/* ------------------
visual slider 
------------------ */
timer();

function timer() {
  setIntervalId = setInterval(function () {
    var prev = visual.eq(current);
    var prevpager = pager.eq(current);
    move(prev, 0, "-100%");
    prevpager.removeClass("on");
    current++;
    if (current == visual.length) {
      current = 0;
    }
    var next = visual.eq(current);
    var nextpager = pager.eq(current);
    move(next, "100%", "0%");
    nextpager.addClass("on");
  }, 3000);
}

function move(tg, start, end) {
  tg.css("left", start).stop().animate({ left: end }, 500);
}
/* ------------------
hover pause
------------------ */
visualWrap.hover(
  function () {
    clearInterval(setIntervalId);
  },
  function () {
    timer();
  }
);
/* ------------------
control arrows
------------------ */
rightBtn.click(function () {
  var prev = visual.eq(current);
  var prevpager = pager.eq(current);
  prevpager.removeClass("on");
  move(prev, 0, "-100%");
  current++;
  if (current == visualCount) current = 0;
  var next = visual.eq(current);
  var nextpager = pager.eq(current);
  nextpager.addClass("on");
  move(next, "100%", "0%");
  cnt(current);
  return false;
});

leftBtn.click(function () {
  var prev = visual.eq(current); //0
  var prevpager = pager.eq(current);
  prevpager.removeClass("on");
  move(prev, 0, "100%");
  current--;
  console.log(current);
  if (current == -visualCount) current = 0;
  var next = visual.eq(current);
  var nextpager = pager.eq(current);
  nextpager.addClass("on");
  move(next, "-100%", "0%");
  cnt(current);
  console.log(current);
  return false;
});
/* ------------------
pager
------------------ */
pager.click(function () {
  var tg = $(this);
  var i = tg.index();
  pager.removeClass("on");
  tg.addClass("on");
  move1(i);
  cnt(i);
});

function move1(i) {
  if (current == i) return;
  var currentEl = visual.eq(current);
  var nextEl = visual.eq(i);
  currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
  nextEl.css("left", "100%").stop().animate({ left: "0%" }, 500);
  current = i;
}

/* Section Now img slider */
$(".slider_list1").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  infinite: true,
  speed: 1000,
  //appendArrows: $(".prev")
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
});
$(".slider_list2").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  speed: 1000,
  arrows: false,
});

/* footer accordion button */
$(function () {
  const acc = $(".btn");
  acc.mouseover(function () {
    acc.removeClass("active");
    $(this).addClass("active");
  });
  acc.mouseout(function () {
    $(this).removeClass("active");
  });
});
