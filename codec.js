var msn = "Hola mundo esto es una prueba"
console.log(code(msn));
function code (msn) {
  var data = []
  for (var i = 0; i < msn.length; i++) {
    data.push(msn.charCodeAt(i).toString(16));
  }
  return data.toString().replace(/,/g, "");
}
var msncode = "486f6c61206d756e646f206573746f20657320756e6120707275656261";
console.log(decode(msncode));
function decode (msncode) {
	var data = []
	for (var i = 0; i < msncode.length; i += 2) {
		data.push(msncode.substr(i, 2));
	}
	var cad = "";
	for (var i = 0; i < data.length; i ++) {
		var decimal = parseInt(data[i], 16);
		cad += String.fromCharCode(decimal);
	}

	return cad;
}
