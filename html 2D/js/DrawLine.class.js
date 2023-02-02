/**
 * Clase para dibujar una línea en un canvas.
 */
export default class DrawLine {
    /**
     * Crea una instancia de DrawLine.
     * @param {CanvasRenderingContext2D} context - El contexto de renderizado del canvas.
     */
    constructor(x, y, px = 100, baseColor="#ffffff", angle = 90) {
      this.x = x;
      this.y = y;
      this.px = px;
      this.baseColor = baseColor;
      this.angle = angle;
    }
  
    /**
     * Dibuja una línea en el canvas.
     * @param {number} x - La coordenada x inicial de la línea.
     * @param {number} y - La coordenada y inicial de la línea.
     * @param {number} angle - El ángulo en radianes de la línea.
     */
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.strokeStyle  = this.baseColor;
      ctx.rotate(this.angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(this.px, 0);
      ctx.stroke();
      ctx.restore();
    }
  }
  