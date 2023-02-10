/**
 * Clase para crear un canvas y controlar su tamaño
 * @class Canvas
 */
export default class Canvas {
    /**
     * Constructor para crear un canvas y establecer su tamaño al tamaño de la ventana
     */
    constructor() {
        /**
         * Propiedad que almacena las dimensiones del canvas
         * @type {Object}
         */
        this.sizes = { w: window.innerWidth, h: window.innerHeight };
        this.width = this.sizes.w;
        this.height = this.sizes.h;
        /**
         * Propiedad que almacena el elemento canvas
         * @type {HTMLCanvasElement}
         */
        this.element = document.createElement("canvas");
        this.element.style.display = "block";
        this.element.style.width = "100%";
        this.element.style.height = "100%";
        this.ctx = this.element.getContext("2d")
        document
            .querySelector("body")
            .insertAdjacentElement("afterbegin", this.element);
        this.updateCanvasSize();
    }

    /**
     * Método para actualizar el tamaño del canvas cuando se redimensiona la ventana
     */
    updateCanvasSize() {
        this.sizes = { w: window.innerWidth, h: window.innerHeight };
        this.element.width = this.sizes.w;
        this.width = this.sizes.w;
        this.height = this.sizes.h;
        this.element.height = this.sizes.h;
    }
}
