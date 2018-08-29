import Tool from "./Tool.js"

export default class Circle extends Tool {
    constructor(elementName) {
        super(elementName)

        this.lastX = 0
        this.lastY = 0
    }

    click(canvas,event) {
        canvas.ctx.beginPath();
        canvas.ctx.arc(window.innerWidth / 2, window.innerHeight / 2, 50, 0, 2 * Math.PI);
        canvas.ctx.stroke();

        this.lastX = window.innerWidth / 2
        this.lastY = window.innerHeight / 2
        console.log(this);
    }

    beforeDraw(canvas, event) {
        canvas.isDraw = true

        canvas.axis.x = event.offsetX
        canvas.axis.y = event.offsetY
    }

    draw(canvas, event) {
        if (!canvas.isDraw) return 

        let spaceX = 0

        let spaceY = 0

        canvas.ctx.clearRect(0,0,window.innerWidth,window.innerHeight)

        canvas.ctx.beginPath();

        canvas.ctx.arc(this.lastX , this.lastY, 50, 0, 2 * Math.PI);

        canvas.ctx.stroke();

        this.lastX = this.lastX + (event.offsetX - canvas.axis.x)
        this.lastY = this.lastY + (event.offsetY - canvas.axis.y)

        canvas.axis.x = event.offsetX
        canvas.axis.y = event.offsetY
    }

    endDraw(canvas, event) {
        canvas.isDraw = false

        this.lastX = event.offsetX

        this.lastY = event.offsetY
    }
}