import Joystick from './js/Joystick.class.js'
import Canvas from './js/Canvas.class.js'
import Circle from './js/Circle.class.js'
import FPSCounter from './js/FPSCounter.class.js'
import Bloque from './js/Bloque.class.js'
import ClosestPoint from './js/ClosestPoint.class.js'
import Keyboard from './js/Keyboard.class.js'
import DrawLine from './js/DrawLine.class.js'

// Crea un elemento canvas y establece sus dimensiones
let canvas = new Canvas().canvas
// Crea una instancia de la clase Joystick
let mover = new Joystick(canvas, {
  x: (canvas.width * 0.15),
  y: canvas.height - (canvas.height * 0.25),
  radius: (canvas.height * 0.2),
  stickColor: 'white',
  baseColor: '#80808070',
  draggable: true
});

let pistola = new Joystick(canvas, {
  x: canvas.width * 0.85,
  y: canvas.height * 0.75,
  radius: (canvas.height * 0.2),
  stickColor: 'white',
  baseColor: '#80808070',
  draggable: true
});


let fps = new FPSCounter()
let bola = new Circle(canvas.width / 2, canvas.height / 2, 10, "#fff000", 4);
let keyboard = new Keyboard()
const bloques = [
  new Bloque(50, 50, 20, 60, "#ffffff"),
  new Bloque(100, 200, 20, 49, "#ffffff"),
];

let closestPoint = new ClosestPoint(bola, bloques, 100);
let line = new DrawLine(bola.x, bola.y, 100, "#ffffff", mover.angle)

console.log(bloques);
// Crea un bucle de animación para dibujar y actualizar el estado del mover
(function animationLoop() {
  requestAnimationFrame(animationLoop);

  // Limpia el canvas
  let ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bloques.forEach(element => {
    element.move(mover, 5);
    element.draw(ctx);
    element.colorOrImage = "#ffffff"

  });

  let b = closestPoint.findClosestArea()
  if (b != null) b.colorOrImage = "#fff000"
  // Dibuja y actualiza el estado del mover
  mover.draw(ctx);
  pistola.draw(ctx);

  if (pistola.isPressed) line.angle = pistola.angle
  line.draw(ctx);
  // Dibuja y actualiza el estado de la bola
  bola.draw(ctx);
  //bola.move(joystick);
  fps.calculateFPS()
  fps.draw(ctx, canvas.width / 2, 50, "#ffffff")
})();

function launchFullScreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

window.addEventListener('resize', function () {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
})