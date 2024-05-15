var urlParams;
(function () {
	var match,
		pl = /\+/g,  // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		query = window.location.search.substring(1);
	urlParams = {};
	while (match = search.exec(query))
		urlParams[decode(match[1])] = decode(match[2]);
})();
var time = document.getElementById("time");
if (urlParams["style"]) time.setAttribute("style", urlParams["style"]);
if (urlParams["bodyStyle"]) document.body.setAttribute("style", urlParams["bodyStyle"]);
var c;
setInterval(
	c = function () {
		var date = document.getElementById("date");
		const p = moment().format(urlParams["format"] || 'HH:mm<br>DD/MM/YYYY');
		date.innerHTML = p;
	}, 1000);
c();