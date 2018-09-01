import Tool from "./Tool.js"

export default class Circle extends Tool {
    constructor(elementName) {
        super(elementName)

        this.canSelectOtherObject = true

        this.lastX = 0
        this.lastY = 0

        this.width = 0
        this.height = 0
        
        this.isSelected = false

        this.start = {
            x: this.lastX - this.width / 2,
            y: this.lastY - this.height / 2
        }

        this.end = {
            x: this.lastX + this.width / 2,
            y: this.lastY + this.height / 2
        }
    }

    set size({ width, height }) {
        this.width = width
        this.height = height
    }

    set axis({ x, y }) {
        this.lastX = x
        this.lastY = y

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
        this.size = {
            width: 50 * 2,
            height: 50 * 2
        }

        this.axis = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
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
        canvas.ctx.beginPath();

        canvas.ctx.strokeStyle = "#888888"
        
        canvas.ctx.rect(this.start.x, this.start.y, this.width, this.height)
        
        canvas.ctx.stroke()
    }

    select(canvas, event) {
        this.isSelected = true
    }

    move(canvas, event) {
        if (!this.isSelected) return 

        this.axis = {
            x: this.lastX + canvas.moveSpace.x,
            y: this.lastY + canvas.moveSpace.y
        }
    }

    stop(canvas, event) {
        if (!this.isSelected) return 
        
        this.isSelected = false

        this.axis = {
            x: this.lastX + canvas.moveSpace.x,
            y: this.lastY + canvas.moveSpace.y
        }
    }

    draw(canvas) {
        canvas.ctx.beginPath();

        canvas.ctx.strokeStyle = "#000000"

        canvas.ctx.arc(this.lastX, this.lastY, 50, 0, 2 * Math.PI);

        canvas.ctx.stroke();
    }
}