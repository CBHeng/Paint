import Canvas from './Canvas.js'
import Pen from './Pen.js';
import Circle from './Circle.js';

export default class Paint {
    constructor(config){

        this.canvas = new Canvas(config.canvas)
        
        this.pen = new Pen( config.pen.el )

        this.circle = new Circle( config.circle.el )

        this.initToolEvent()
    }

    initToolEvent() {
        this.pen.element.addEventListener('click',function(event){
           console.log('change to pen')

           this.canvas.element.addEventListener('click',function(){
               console.log('pen @@down')
           })
        }.bind(this))
        
        this.circle.element.addEventListener('click', function (event) {
            console.log('change to circle')

            this.canvas.element.addEventListener('click', function () {
                console.log('circle @@down')
            })
        }.bind(this))
    }
}
