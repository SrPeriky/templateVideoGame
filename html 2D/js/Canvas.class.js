/**
 * Clase para crear un canvas y controlar su tamaño
 * @class
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
        this.sizes = { width: window.innerWidth, height: window.innerHeight };
        /**
         * Propiedad que almacena el elemento canvas
         * @type {HTMLCanvasElement}
         */
        this.canvas = document.createElement("canvas");
        this.canvas.style.display = "block";
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        document
            .querySelector("body")
            .insertAdjacentElement("afterbegin", this.canvas);
        window.addEventListener("resize", this.updateCanvasSize.bind(this));
        this.updateCanvasSize();
    }

    /**
     * Método para actualizar el tamaño del canvas cuando se redimensiona la ventana
     */
    updateCanvasSize() {
        this.sizes = { width: window.innerWidth, height: window.innerHeight };
        this.canvas.width = this.sizes.width;
        this.canvas.height = this.sizes.height;
    }
}
