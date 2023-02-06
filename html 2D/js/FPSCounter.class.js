/**
 * Clase que se encarga de calcular y mostrar los FPS (fotogramas por segundo) en un juego o aplicación en tiempo real.
 * @class FPSCounter
 */
export default class FPSCounter {
  /**
   * Crea una nueva instancia de FPSCounter.
   * @constructor
   */
  constructor() {
    /**
     * Almacena el valor actual de los FPS.
     * @type {number}
     */
    this.fps = 0;

    /**
     * Almacena el número de frames renderizados durante el último segundo.
     * @type {number}
     */
    this.frames = 0;

    /**
     * Almacena el tiempo en milisegundos desde que se inició la aplicación.
     * @type {number}
     */
    this.time = performance.now();
  }

  /**
   * Calcula los FPS y actualiza el valor de "fps".
   * @method
   * @returns {number} - Los FPS actuales.
   */
  calculateFPS() {
    this.frames++;
    const currentTime = performance.now();
    if (currentTime >= this.time + 1000) {
      this.fps = Math.round((this.frames * 1000) / (currentTime - this.time));
      this.time = currentTime;
      this.frames = 0;
    }
    return this.fps;
  }

  /**
   * Dibuja los FPS en el contexto de canvas especificado.
   * @method
   * @param {CanvasRenderingContext2D} ctx - El contexto de canvas en el que se dibujarán los FPS.
   * @param {number} [x=10] - La posición horizontal en pixels desde el borde izquierdo del canvas en el que se dibujarán los FPS.
   * @param {number} [y=20] - La posición vertical en pixels desde el borde superior del canvas en el que se dibujarán los FPS.
   * @param {string} [baseColor="black"] - El color del texto que se utilizará para dibujar los FPS.
   * @param {string} [font="16px Arial"] - La fuente que se utilizará para dibujar los FPS.
   */
  draw(ctx, x = 10, y = 20, baseColor = "black", font = "16px Arial") {
    ctx.fillStyle = "black";
    ctx.font = font;
    ctx.fillText(this.getText(), x, y);
  }

  getText(){
    return `FPS: ${this.fps}`
  }
}
