import Tool from './Tool.js'

export default class Pen extends Tool{
    constructor(elementName) {
        super(elementName)

        this.name = 'pen'
    }

    click() {
        
    }

    beforeDraw(canvas,event) {
        canvas.draw = true
        canvas.axis.x = event.offsetX
        canvas.axis.y = event.offsetY

    }

    draw(canvas, event) {
        if( !canvas.draw ) return

        canvas.ctx.beginPath();
        canvas.ctx.moveTo(canvas.axis.x, canvas.axis.y);
        canvas.ctx.lineTo(event.offsetX, event.offsetY);
        canvas.ctx.stroke(); 

        canvas.axis.x = event.offsetX
        canvas.axis.y = event.offsetY
    }

    endDraw(canvas, event) {
        canvas.draw = false
    }
}