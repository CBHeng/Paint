import Tool from './Tool.js'

export default class Pen extends Tool{
    constructor(elementName) {
        super(elementName)

       // this.axis = { x: 0, y: 0 }

        //this.isDraw = false

        //this.initEventListener()

    }

    /*beforeDraw(event) {
        this.isDraw = true

        this.updateAxis(event.offsetX, event.offsetY)
    }

    draw(event) {
        if (!this.isDraw) return

        this.ctx.beginPath();
        this.ctx.moveTo(this.axis.x, this.axis.y);
        this.ctx.lineTo(event.offsetX, event.offsetY);
        this.ctx.stroke();

        this.updateAxis(event.offsetX, event.offsetY)
    }

    endDraw() {
        this.isDraw = false
    }

    updateAxis(x, y) {
        [this.axis.x, this.axis.y] = [x, y]
    }*/
}