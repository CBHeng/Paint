import Tool from "./Tool.js"

export default class Circle extends Tool {
    constructor(elementName) {
        super(elementName)
    }

    click(canvas,event) {
        canvas.ctx.beginPath();
        canvas.ctx.arc(window.innerWidth / 2, window.innerHeight / 2, 50, 0, 2 * Math.PI);
        canvas.ctx.stroke();
    }

    beforeDraw(canvas, event) {
        canvas.draw = true
    }

    draw(canvas, event) {
        cnavas.clearRect(0,0,window.innerWidth,window.innerHeight)

    }

    endDraw() {
        console.log('@@')
    }
}