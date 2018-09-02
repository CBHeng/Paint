import Tool from './Tool.js'

export default class Pen extends Tool{
    constructor(elementName) {
        super(elementName)

        this.path = []

        this.isDraw = false
        
        this.canSelectOtherObj = false
    }

    click(canvas, event) {
        
    }

    start(canvas, event) {
        this.isDraw = true
        
        this.start ={
            x: event.offsetX,
            y: event.offsetY
        }
    }

    move() {
        if(!this.isDraw) return

        this.path.push({
            x: event.offsetX,
            y:  event.offsetY
        })
    }

    stop() {
        this.isDraw = false
    }

    draw(canvas, event) {
        if(!this.path.length) return

        canvas.ctx.beginPath()
        canvas.ctx.moveTo(this.start.x, this.start.y)
        
        this.path.forEach((item)=>{
            canvas.ctx.lineTo(item.x, item.y)
        })

        canvas.ctx.stroke();  
    }
}