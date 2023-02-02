/**
 * Clase para dibujar un botón en un canvas.
 *
 * @class Btn
 * @param {HTMLCanvasElement} canvas - Canvas en el que se dibujará el botón
 * @param {Object} option - Opciones del botón, incluyendo posición, tamaño, etiqueta, color y baseColor
 * @param {function} func - Función a ejecutarse cuando se haga clic en el botón
 */
export default class Btn {
    /**
   * Crea una instancia de Button.
   * @constructor
   * @param {HTMLCanvasElement} canvas - Canvas en el que se dibujará el botón
   * @param {Object} option - Opciones del botón, incluyendo posición, tamaño, etiqueta, color y baseColor
   * @param {function} func - Función a ejecutarse cuando se haga clic en el botón
   */
    constructor(canvas, option, func) {
        /**
       * Posición x del botón en el canvas
       * @type {number}
       */
        this.x = option.x;

        /**
         * Posición y del botón en el canvas
         * @type {number}
         */
        this.y = option.y;

        /**
         * Ancho del botón en píxeles
         * @type {number}
         */
        this.w = option.w;

        /**
         * Fuente del texto en el botón
         * @type {string}
         */
        this.font = option.font;

        /**
         * Altura del botón en píxeles
         * @type {number}
         */
        this.h = option.h;

        /**
         * Etiqueta del botón
         * @type {string}
         */
        this.label = option.label;

        /**
         * Color de fondo del botón
         * @type {string}
         */
        this.color = option.color;

        /**
         * Color base del botón
         * @type {string}
         */
        this.baseColor = option.baseColor;

        /**
         * Función a ejecutarse cuando se haga clic en el botón
         * @type {function}
         */
        this.func = func;

        canvas.addEventListener('click', (e) => this.onClick(e));
    }

    /**
    * Dibuja un botón en el canvas.
    * 
    * @param {CanvasRenderingContext2D} ctx - Contexto del canvas
    * @memberof Block
    */
    draw(ctx) {
        ctx.fillStyle = this.baseColor;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.color;
        ctx.font = this.font;
        ctx.textAlign = "center";
        ctx.textBaseline = this.label;
        ctx.fillText(this.label, this.x + this.w / 2, this.y + this.h / 2);
    }

    onClick(e) {
        const x = e.clientX - canvas.offsetLeft;
        const y = e.clientY - canvas.offsetTop;
        if (x < this.x || x > this.x + this.w || y < this.y || y > this.y + this.w) this.func();
    }
}
