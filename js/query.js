function show() {
	var a = myform.study.value; //使用id来获取input输入框的值
	window.event.returnValue = false;
	let s = new Set();
	var url = "../json/keyvalue.json"
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.send(null);
	request.onload = function() {
		if (request.status == 200) {
			var json = JSON.parse(request.responseText);
			for (var key in json) {
				s.add(key);
			}
			if (s.has(a)) {
				window.location.href = a + ".html";
			} else {
				window.open('http://dict.cn/' + a);
			}
		} else {
			alert("有bug，无法加载,request.status =" + request.status);
		}
	}
};


function home() {
	try {
		window.location.href = "./1index.html";
	} catch (e) {
		alert("bad")
	}
}

function random() {
	var dic = new Array();
	var url = "../json/keyvalue.json"
	var request = new XMLHttpRequest();

	request.open("GET", url);
	request.send(null);

	request.onload = function() {
		if (request.status == 200) {
			var json = JSON.parse(request.responseText);

			var count = 0;
			for (var key in json) {
				dic[count] = key;
				count += 1;
			}
			var num = Math.floor(Math.random() * dic.length);
			window.location.href = dic[num] + ".html";

		} else {
			alert("有bug，无法加载,request.status =" + request.status);
		}
	}
}
// 小结论：window.location.href 只能使用相对路径，否则将无法运行。
