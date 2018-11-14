export default class CanvasDrawer {
    constructor() {
       
    }

    _init(canvas) {
        requestAnimationFrame(this.drawing.bind(this,canvas))
    }

    drawing(canvas) {
        canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    
        canvas.objs.forEach((obj) => {
            if (canvas.tooler === obj) {
                obj.drawSelectStyle ? obj.drawSelectStyle(canvas): null
            }

            obj.draw(canvas)
        })

        requestAnimationFrame(this.drawing.bind(this, canvas))
    }
}