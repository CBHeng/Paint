import Tool from "./Tool.js"

export default class Circle extends Tool {
    constructor(elementName) {
        super(elementName)

        this.lastX = 0
        this.lastY = 0

        this.width = 0
        this.height = 0
        
        this.start = {
            x: this.lastX - this.width / 2,
            y: this.lastY - this.height / 2
        }

        this.end = {
            x: this.lastX + this.width / 2,
            y: this.lastY + this.height / 2
        }
    }

    click(canvas,event) {
        canvas.ctx.beginPath();
        canvas.ctx.arc(window.innerWidth / 2, window.innerHeight / 2, 50, 0, 2 * Math.PI);
        canvas.ctx.stroke();

        this.lastX = window.innerWidth / 2
        this.lastY = window.innerHeight / 2
        
        this.width = 50
        this.height = 50

        this.start = {
            x: this.lastX - this.width / 2,
            y: this.lastY - this.height / 2
        }

        this.end = {
            x: this.lastX + this.width / 2,
            y: this.lastY + this.height / 2
        }
    }

    selectRule(canvas, event) {
        let now = {
            x: event.offsetX,
            y: event.offsetY
        }

        let xMatch = (this.start.x <= now.x) && (this.end.x >= now.x)
        let yMatch = (this.start.y <= now.y) && (this.end.y >= now.y)

        let isMatch = xMatch && yMatch

        return isMatch
    }

    defaultSelect(canvas,event) {
        console.log('@@')
        canvas.ctx.rect(this.start.x, this.start.y, this.width, this.height)
        canvas.ctx.stroke()
    }

    beforeDraw(canvas, event) {
        if ( canvas.select !== this ) return 

        canvas.isDraw = true

        canvas.axis.x = event.offsetX
        canvas.axis.y = event.offsetY
    }

    draw(canvas, event) {
        if (!canvas.isDraw) return 

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