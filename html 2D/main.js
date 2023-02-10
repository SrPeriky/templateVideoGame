import Joystick from './js/Joystick.class.js'
import Canvas from './js/Canvas.class.js'
import Circle from './js/Circle.class.js'
import FPSCounter from './js/FPSCounter.class.js'
import Bloque from './js/Bloque.class.js'
import ClosestPoint from './js/ClosestPoint.class.js'
import Keyboard from './js/Keyboard.class.js'
import DrawLine from './js/DrawLine.class.js'
import Btn from './js/Btn.class.js'

// Crea un elemento canvas y establece sus dimensiones
let canvas = new Canvas()
// Crea una instancia de la clase Joystick
let mover = new Joystick(canvas.element, {
  x: (canvas.width * 0.15),
  y: canvas.height - (canvas.height * 0.25),
  radius: (canvas.height * 0.25),
  stickColor: 'white',
  baseColor: '#80808070',
  draggable: true
});

let pistola = new Joystick(canvas.element, {
  x: canvas.width * 0.85,
  y: canvas.height * 0.75,
  radius: (canvas.height * 0.25),
  stickColor: 'white',
  baseColor: '#80808070',
  draggable: false
});

let btn = new Btn(canvas.element, {
  x: 20,
  y: 20,
  w: 50,
  h: 50,
  font: "16px Arial",
  label: "x",
  color: "#ffffff",
  baseColor: "#000000"
})


let fps = new FPSCounter()
let bola = new Circle(canvas.width / 2, canvas.height / 2, 10, "#fff000", 4);
let keyboard = new Keyboard()
const bloques = [
  new Bloque(50, 50, 20, 60, "#ffffff"),
  new Bloque(100, 200, 20, 49, "#ffffff"),
];

let closestPoint = new ClosestPoint(bola, bloques, 100);
let line = new DrawLine(bola.x, bola.y, 100, "#ffffff", mover.angle);

// Crea un bucle de animación para dibujar y actualizar el estado del mover
(function animationLoop() {
  requestAnimationFrame(animationLoop);

  // Limpia el canvas
  canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);

  bloques.forEach(element => {
    element.move(mover, 5);
    element.draw(canvas.ctx);
    element.colorOrImage = "#ffffff"

  });

  let b = closestPoint.findClosestArea()
  if (b != false) closestPoint.collicion(bola.angle, b)
  // Dibuja y actualiza el estado del mover
  mover.draw(canvas.ctx);
  pistola.draw(canvas.ctx);

  if (pistola.isPressed) line.angle = pistola.angle
  line.draw(canvas.ctx);
  // Dibuja y actualiza el estado de la bola
  bola.draw(canvas.ctx);
  btn.draw(canvas.ctx);
  //bola.move(joystick);
  fps.calculateFPS()
  fps.draw(canvas.ctx, canvas.width / 2, 50, "#ffffff")
})();


btn.func = function ( ) {
  if (document.documentElement.requestFullScreen) {
    document.documentElement.requestFullScreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen();
  }
}

window.addEventListener("resize", (e) =>{
  canvas.updateCanvasSize()
  mover.x = (canvas.width * 0.15)
  mover.y = canvas.height - (canvas.height * 0.25)
  pistola.x = canvas.width * 0.85
  mover.radius = (canvas.height * 0.25),
  pistola.radius = (canvas.height * 0.25),
  pistola.y = canvas.height * 0.75
});