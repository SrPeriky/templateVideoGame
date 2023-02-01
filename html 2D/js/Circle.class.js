export default class Circle {
    /**
     * @param {Number} x - Posición inicial x del círculo en el canvas
     * @param {Number} y - Posición inicial y del círculo en el canvas
     * @param {Number} r - Radio del círculo
     * @param {string} [baseColor = 'gray'] - Color de la base del Circulo
     * @param {Number} [speed = 5] - Velocidad a la que se mueve el Circulo
     */
    constructor(x, y, r, baseColor, speed) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.baseColor = baseColor || 'gray';
        this.speed = speed || 5;
    }

    /**
     * Dibuja el círculo en el canvas
     * @param {CanvasRenderingContext2D} ctx - Contexto del canvas
     */
    draw(ctx) {
        ctx.fillStyle = this.baseColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }

    /**
     * Mueve el objeto Circle en la dirección apuntada por el joystick
     * @method
     * 
     * @memberof Circle
     * @param {Joystick} joystick - El objeto Joystick que controla el movimiento
     * @param {string} direction - La dirección en la que el objeto se moverá. Puede ser "horizontal", "vertical" o false (para ambas direcciones).
     */
    move(joystick, direction = false) {
        if (joystick.isPressed) {
            if (direction != "vertical") this.x += Math.cos(joystick.angle) * this.speed;
            if (direction != "horizontal") this.y += Math.sin(joystick.angle) * this.speed;
        }
    }
}
