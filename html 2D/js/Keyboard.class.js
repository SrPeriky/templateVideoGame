/**
 * Una clase para manejar las entradas del teclado.
 *
 * @class Keyboard
 */
class Keyboard {
    /**
     * Crea una instancia de Keyboard.
     *
     * @memberof Keyboard
     */
    constructor() {
      /**
       * Un objeto para almacenar el estado de cada tecla.
       *
       * @private
       * @type {Object}
       * @memberof Keyboard
       */
      this.keyState = {};
  
      /**
       * Añade un oyente de eventos para el evento 'keydown'.
       *
       * @private
       * @memberof Keyboard
       */
      window.addEventListener("keydown", (e) => {
        this.keyState[e.keyCode] = true;
      });
  
      /**
       * Añade un oyente de eventos para el evento 'keyup'.
       *
       * @private
       * @memberof Keyboard
       */
      window.addEventListener("keyup", (e) => {
        this.keyState[e.keyCode] = false;
      });
    }
  
    /**
     * Comprueba si una tecla está siendo presionada actualmente.
     *
     * @param {number} keyCode El código de la tecla a comprobar.
     * @returns {boolean} Si la tecla está siendo presionada actualmente.
     * @memberof Keyboard
     */
    isKeyDown(keyCode) {
      return this.keyState[keyCode] === true;
    }
  }
  