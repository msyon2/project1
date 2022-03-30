const gnb_nav = $("#gnb_nav");
const gnb = gnb_nav.find('.gnb');
const gnb_btn = gnb_nav.find("button.open_menu");
const width100 = gnb_nav.find(".width100");
gnb.hover(
	function () {
		width100.addClass("open");
	},
	function () {
		width100.removeClass("open");
	},
);

/* 햄버거토글클릭 */
gnb_btn.click(function () {
  width100.toggleClass("open")
  return false;
});
