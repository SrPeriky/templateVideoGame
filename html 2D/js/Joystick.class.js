/**
 * Clase que permite crear y controlar un joystick virtual en un canvas para su uso en juegos móviles.
 * @class Joystick
 *  
 * @property {number} x - Posición en el eje x del centro del joystick.
 * @property {number} y - Posición en el eje y del centro del joystick.
 * @property {number} w - Ancho del joystick.
 * @property {number} h - Altura del joystick.
 * @property {number} r - Radio del joystick.
 * @property {boolean} isPressed - Indica si el joystick está siendo presionado.
 * @property {number} angle - Ángulo de dirección del joystick.
 * 
 * @method bindEvents - Asocia eventos en el canvas.
 * @method draw - Dibuja el joystick en el canvas.
 * @method onPress - Se ejecuta cuando el joystick es presionado.
 * @method onRelease - Se ejecuta cuando el joystick es liberado.
 * @method update - Actualiza la posición y estado del joystick.
 */
export default class Joystick {
    /**
     * Crea una nueva instancia de Joystick
     * @constructor
     * 
     * @param {HTMLCanvasElement} canvas - Elemento canvas en el que se dibujará el Joystick
     * @param {Object} options - Opciones para personalizar el Joystick
     * @param {number} [options.x = canvas.width / 2] - Coordenada x donde se ubicará el centro del Joystick
     * @param {number} [options.y = canvas.height - 100] - Coordenada y donde se ubicará el centro del Joystick
     * @param {number} [options.radius = 50] - Radio del Joystick
     * @param {string} [options.stickColor = 'white'] - Color del stick del Joystick
     * @param {string} [options.baseColor = 'gray'] - Color de la base del Joystick
     * @param {boolean} [options.draggable = true] - Determina si el Joystick es arrastrable o no
     */
    constructor(canvas, options = {}) {
        this.x = options.x || canvas.width / 2;
        this.y = options.y || canvas.height - 100;
        this.r = options.radius || 50;
        this.stickColor = options.stickColor || 'white';
        this.baseColor = options.baseColor || 'gray';
        this.draggable = options.draggable !== undefined ? options.draggable : true;
        this.isPressed = false;
        this.angle = 0;
        this.w = this.h = this.r * 2;
        this.bindEvents(canvas)
    }

    /**
     * Asocia eventos de presión y liberación de dedo al canvas.
     * @method
     * 
     * @memberof Joystick
     * @param {HTMLCanvasElement} canvas - El elemento canvas al que se asociarán los eventos.
     * @listens touchstart - Ejecuta el método onPress al presionar en el canvas.
     * @listens touchend - Ejecuta el método onRelease al liberar el dedo en el canvas.
     * @listens touchmove - Ejecuta el método update al mover el dedo en el canvas.
     */
    bindEvents(canvas) {
        canvas.addEventListener('touchstart', (e) => this.onPress(e));
        canvas.addEventListener('touchend', (e) => this.onRelease(e));
        canvas.addEventListener('touchmove', (e) => this.onPress(e));
    }

    /**
     * Método que maneja el evento de presionar el joystick en el canvas.
     * @method 
     * 
     * @memberof Joystick
     * @param {TouchEvent} e - Evento Touch que representa el evento de presionar en el canvas.
     * @returns {void}
     */
    onPress(e) {
        for (let i = 0; i < e.touches.length; i++) {
            const touch = e.touches[i];
            const x = touch.clientX;
            const y = touch.clientY;

            const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2)

            if (distance < this.r) {
                this.isPressed = true;
        this.update(x,y)
        break;
            } 

        }
    }

    /**
     * Método que maneja el evento de liberación del Joystick.
     * Se ejecuta cuando el usuario deja de presionar el Joystick en el canvas.
     * @method
     * 
     * @memberof Joystick
     * @param {Event} e - Evento de touchend
     */
    onRelease(e) {
        this.isPressed = false;
    }

    /**
     * Actualiza el ángulo de dirección del Joystick
     * @method
     * 
     * @memberof Joystick
     * @param {TouchEvent} e - Evento de toque generado por el usuario
     */
    update(x,y) {
        if (!this.isPressed) return;
        /*const touch = e.touches[this.i];
        const x = touch.clientX;
        const y = touch.clientY;*/
        const deltaX = x - this.x;
        const deltaY = y - this.y;
        this.angle = Math.atan2(deltaY, deltaX);
    }

    /**
     * Dibuja el Joystick en el canvas de juego
     * @method
     * 
     * @memberof Joystick
     * @param {CanvasRenderingContext2D} ctx - El contexto de renderizado del canvas
     */
    draw(ctx) {
        ctx.fillStyle = this.baseColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
        if (this.isPressed) {
            ctx.fillStyle = this.stickColor;
            const stickX = this.x + Math.cos(this.angle) * (this.r / 2);
            const stickY = this.y + Math.sin(this.angle) * (this.r / 2);
            ctx.beginPath();
            ctx.arc(stickX, stickY, this.r / 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}