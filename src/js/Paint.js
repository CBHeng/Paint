import Canvas from './Module/Canvas.js'
import Pen from './Module/Tools/Pen.js';
import Circle from './Module/Tools/Circle.js';

export default class Paint {
    constructor(){

        this.canvas = new Canvas('#Paint')

        this.tools = {
            pen: new Pen('#pen'),
            circle: new Circle('#circle')
        }

    }

    init() {
        this.canvas.init( this.tools )
    }
}
