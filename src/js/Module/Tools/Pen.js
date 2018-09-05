import Tool from './Tool.js'

export default class Pen extends Tool{
    constructor(elementName) {
        super(elementName)

        this.path = new Array()

        this.isDraw = false
        
        this.canSelectOtherObj = false

        this.initialPoint = {
            x:0,
            y:0
        }
    }

    init(canvas, event) {
        console.log("click")
        canvas.addCurrentToolToStore(this)
    }

    start(canvas, event) {
        canvas.addCurrentToolToStore(this)

        this.isDraw = true
        
        this.path = []
        
        this.initialPoint ={
            x: event.offsetX,
            y: event.offsetY
        }
    }

    move() {
        if(!this.isDraw) return

        this.path.push({
            x: event.offsetX,
            y: event.offsetY
        })
    }

    stop(canvas,event) {
        this.isDraw = false
    }

    draw(canvas, event) {
        if(!this.path.length) return

        canvas.ctx.beginPath();

        canvas.ctx.moveTo(this.initialPoint.x, this.initialPoint.y);
        
        this.path.forEach( point => {
            canvas.ctx.lineTo(point.x, point.y);
        })
        
        canvas.ctx.stroke();


    }
}