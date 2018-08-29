import Canvas from './Module/Canvas.js'
import Pen from './Module/Tools/Pen.js';
import Circle from './Module/Tools/Circle.js';

export default class Paint {
    constructor(){

        this.canvas = new Canvas('#Paint')

        this.tools = {
            pen: {
                class: Pen,
                el: '#pen'
            },
            circle: {
                class: Circle,
                el: '#circle'
            }
        }

    }

    init() {
        this.canvas.init( this.tools )
    }
}
