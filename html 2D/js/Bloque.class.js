/**
 * Clase que representa un bloque
 * @class Bloque
 */
export default class Bloque {
    /**
     * Constructor para inicializar las propiedades de un bloque
     * @param {number} x - Posición en x
     * @param {number} y - Posición en y
     * @param {number} w - Ancho
     * @param {number} h - Alto
     * @param {(string|HTMLImageElement)} [colorOrImage] - El color o la imagen del bloque.
     */
    constructor(x, y, w, h, colorOrImage) {
        /**
         * Propiedad que almacena la posición en x
         * @type {number}
         */
        this.x = x;
        /**
         *  Propiedad que almacena la posición en y
         * @type {number}
         */
        this.y = y;
        /**
         * Propiedad que almacena el ancho
         * @type {number}
         */
        this.w = w;
        /**
         * Propiedad que almacena el alto
         * @type {number}
         */
        this.h = h;
        /**
         * El color o la imagen del bloque.
         * @type {(string|HTMLImageElement)}}
         */
        this.colorOrImage = colorOrImage;
    }
    
    /**
     * Dibuja el bloque en el canvas.
     * 
     * @param {CanvasRenderingContext2D} ctx - Contexto del canvas
     * @memberof Block
     */
    draw(ctx) {
        if (typeof this.colorOrImage === "string") {
            ctx.fillStyle = this.colorOrImage;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        } else if (this.colorOrImage instanceof HTMLImageElement) {
            ctx.drawImage(this.colorOrImage, this.x, this.y, this.w, this.h);
        }
    }

    /**
     * Método para determinar si un objeto coliciona con un bloque
     * @param {number} x - Posición en x del punto
     * @param {number} y - Posición en y del punto
     * @returns {boolean} - Verdadero si el objeto coliciona con el bloque, falso en caso contrario
     */
    isCollidingWith(x, y) {
        return (x < this.x || x > this.x + this.w || y < this.y || y > this.y + this.w) ? false : true
    }
}