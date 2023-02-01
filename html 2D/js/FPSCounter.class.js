/**
 * 
 * @class
 */
export default class FPSCounter {
  constructor() {
    this.fps = 0;
    this.frames = 0;
    this.frames = 0;
    this.time = performance.now();
  }

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
  * Dibuja los FPS en el canvas
  * @param {CanvasRenderingContext2D} ctx - Contexto del canvas
  */
  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText(`FPS: ${this.fps}`, 10, 20);
  }
}