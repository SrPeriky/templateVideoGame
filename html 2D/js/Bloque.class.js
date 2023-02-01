/**
 * Clase que representa un bloque
 * @class
 */
export default class Bloque {
    /**
     * Constructor para inicializar las propiedades de un bloque
     * @param {number} x - Posición en x
     * @param {number} y - Posición en y
     * @param {number} w - Ancho
     * @param {number} h - Alto
     * @param {number} t - Tipo
     */
    constructor(x, y, w, h, t) {
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
         * Propiedad que almacena el tipo
         * @type {number}
         */
        this.t = t;
        /**
         * Propiedad que almacena un arreglo
         * @type {Array}
         */
        this.content = [];
    }

    /**
     * Método para determinar si un punto toca un bloque
     * @param {number} x - Posición en x del punto
     * @param {number} y - Posición en y del punto
     * @returns {boolean} - Verdadero si el punto toca el bloque, falso en caso contrario
     */
    isTouched(x, y) {
        return (x < this.x || x > this.x + this.w || y < this.y || y > this.y + this.w) ? false : true
    }
}