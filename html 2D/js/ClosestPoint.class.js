/**
 * Clase para calcular la area más cercana a un punto de referencia 
 * @class ClosestPoint
 */
export default class ClosestPoint {
    /**
    * Crea una instancia de ClosestPoint.
    * @param {Object} point - La definición del círculo con propiedades `x`, `y` y `r`.
    * @param {Array} areasList - La lista de definiciones de areas con propiedades `x`, `y`, `w` y `h`.
    * @param {number} [pxMin = 100] - distancia minima a buscar.
    */
    constructor(point, areasList, pxMin = 100) {
        this.point = point;
        this.areasList = areasList;
        this.pxMin = pxMin
    }

    /**
    * Calcula la distancia euclidiana entre dos puntos.
    * @param {number} x1 - Coordenada x del primer punto.
    * @param {number} y1 - Coordenada y del primer punto.
    * @param {number} x2 - Coordenada x del segundo punto.
    * @param {number} y2 - Coordenada y del segundo punto.
    * @returns {number} La distancia entre los dos puntos.
    */
    distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    /**
    * Encuentra el area más cercana al punto.
    * @returns {Object|null} La definición del area más cercana o null si la distancia es mayor a @property {pxMin}.
    */
    findClosestArea(pxmin = this.pxMin) {
        let closestArea;
        let minDistance = Infinity;

        this.areasList.forEach(area => {
            const closestX = (this.point.x < area.x) ? area.x : (this.point.x > area.x + area.w) ? area.x + area.w : this.point.x
            const closestY = (this.point.y < area.y) ? area.y : (this.point.y > area.y + area.h) ? area.y + area.h : this.point.y
            const dist = this.distance(this.point.x, this.point.y, closestX, closestY);

            if (dist < minDistance) {
                closestArea = area;
                minDistance = dist;
            }
        });

        return minDistance > pxmin ? false : closestArea;
    }

    collicion(angle, bloque) {
        // Detección de colisiones con los bordes del canvas
        if (this.point.x - this.point.r >= bloque.x || this.point.x + this.point.r <= bloque.w) {
            bloque.x -=  Math.cos(angle) * this.point.speed;;
        }
        if (this.point.y - this.point.r >= bloque.y || this.point.y + this.point.r <= bloque.h) {
            bloque.y -= Math.sin(angle) * this.point.speed;;
        }
    }
}