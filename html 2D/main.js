import Joystick from './js/Joystick.class.js'
import Canvas from './js/Canvas.class.js'
import Circle from './js/Circle.class.js'
import FPSCounter from './js/FPSCounter.class.js'

// Crea un elemento canvas y establece sus dimensiones
let canvas = new Canvas().canvas
// Crea una instancia de la clase Joystick
let joystick = new Joystick(canvas, {
  x: canvas.width / 2,
  y: canvas.height - 100,
  radius: 50,
  stickColor: 'white',
  baseColor: 'grey',
  draggable: true
});

let fps = new FPSCounter()
let bola = new Circle(10, 10, 5, "#fff000");

// Crea un bucle de animación para dibujar y actualizar el estado del joystick
(function animationLoop() {
  requestAnimationFrame(animationLoop);

  // Limpia el canvas
  let ctx =  canvas.getContext("2d")
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibuja y actualiza el estado del joystick
  joystick.draw(ctx);

  // Dibuja y actualiza el estado de la bola
  bola.draw(ctx);
  bola.move(joystick);
  fps.calculateFPS()
  fps.draw(ctx)
})();
