function makeupdate() {
var qrDiv = document.getElementById('code');
var img = document.createElement('img');
img.id = 'qrCodeIco';
img.src = '../../image/logo.svg';
	img.style.position = 'absolute';
	img.style.width = '20px';
	img.style.height = '20px';
	code.appendChild(img);
		var margin = ($("#code").height() - $("#qrCodeIco").height()) / 2; 
	$("#qrCodeIco").css("margin", margin);
}

function makeqrcode() {
$("#code").qrcode({
    render: "table",
    width: 200,
    height:200,
    text: qrtext
});
}

function toUtf8(str) {
	var out, i, len, c;
	out = "";
	len = str.length;
	for(i = 0; i < len; i++) {
		c = str.charCodeAt(i);
		if((c >= 0x0001) && (c <= 0x007F)) {
			out += str.charAt(i);
		} else if(c > 0x07FF) {
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
			out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		} else {
			out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		}
	}
	return out;
}
