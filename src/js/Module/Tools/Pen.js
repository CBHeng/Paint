import Tool from './Tool.js'

export default class Pen extends Tool{
    constructor(elementName) {
        super(elementName)

        this.path = []

        this.disableSelect = true
    }

    click(canvas, event) {
        console.log(canvas.store)
    }

    beforeDraw(canvas,event) {
        canvas.isDraw = true
        canvas.axis.x = event.offsetX
        canvas.axis.y = event.offsetY

        canvas.ctx.beginPath();
        canvas.ctx.lineCap = "round";
    }

    draw(canvas, event) {
        if (!canvas.isDraw ) return

        canvas.ctx.moveTo(canvas.axis.x, canvas.axis.y);
        canvas.ctx.lineTo(event.offsetX, event.offsetY);
        canvas.ctx.stroke(); 

        canvas.axis.x = event.offsetX
        canvas.axis.y = event.offsetY
    }

    endDraw(canvas, event) {
        canvas.isDraw = false
    }
}