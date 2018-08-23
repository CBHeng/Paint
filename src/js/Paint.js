import Canvas from './Module/Canvas.js'
import Pen from './Module/Tools/Pen.js';
import Circle from './Module/Tools/Circle.js';

export default class Paint {
    constructor(config){

        this.canvas = new Canvas(config.canvas)
        
        this.tools = {
            pen: new Pen(config.pen.el),
            circle: new Circle(config.circle.el)
        }
    }

    init() {
        this.canvas.init( this.tools )
    }
}
