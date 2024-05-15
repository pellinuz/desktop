var body = document.getElementsByTagName("body");

var bodyBackground = [
	"https://w.wallha.com/ws/15/GlcjJe0V.jpg",
	"https://w.wallha.com/ws/15/ETjmaUNv.jpg",
	"https://c.wallhere.com/photos/66/9b/Shenhe_Genshin_Impact_Genshin_Impact_simple_background_dark_background-2302016.jpg!s1",
	"https://c4.wallpaperflare.com/wallpaper/573/360/994/lynette-genshin-impact-genshin-impact-simple-background-dark-background-hd-wallpaper-preview.jpg",
	"https://w.wallhaven.cc/full/m9/wallhaven-m9jpd8.jpg",
	"https://c.wallhere.com/photos/42/9e/selective_coloring_black_background_dark_background_simple_background_anime_girls_ass_Keqing_Genshin_Impact_Genshin_Impact-2145571.jpg!d",
];

window.onload = function (e) {
	function random(arr) {
		var randomer = arr[Math.floor(Math.random() * arr.length)];

		return randomer;
	};

	var randomic = random(bodyBackground);

	body.style.background = "url('" + randomic + "')";
	body.style.backgroundPosition = "fixed";
	body.style.backgroundSize = "cover";
	body.style.backgroundRepeat = "no-repeat";
};
