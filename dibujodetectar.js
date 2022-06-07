var teclas = {
  lEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuatrito = document.getElementById("area_de_dibujo").getContext("2d");
var papel = cuatrito; //.getContext("2d");
var x = 150;
var y = 69;
var movimiento = 10;
dibujarLinea("red", 149, 69, 151, 69, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath(); //arrancar un dibujo
  lienzo.strokeStyle = color; //linea
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal); //traza linea
  lienzo.stroke(); //cerramos linea
  lienzo.closePath(); //cierra dibujo
}
function dibujarTeclado(evento) {
  var colorcito = "blue";
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      console.log(y);
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.lEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
  }
}
