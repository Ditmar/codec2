var msn = "Hola mundo esto es una prueba"
console.log(code(msn));
function code (msn) {
  var data = []
  for (var i = 0; i < msn.length; i++) {
    data.push(msn.charCodeAt(i).toString(16));
  }
  return data.toString().replace(/,/g, "");
}
