export default class CanvasEventHooks {
    constructor() {
        this.isDraw = false
    }
    _init(canvas) {
        canvas.element.addEventListener('mousedown', this.mousedownDoing.bind(this,canvas))
        canvas.element.addEventListener('mousemove', this.mousemoveDoing.bind(this, canvas))
        canvas.element.addEventListener('mouseup', this.mouseupDoing.bind(this, canvas))
    }

    mousedownDoing(canvas, event) {
        if (!canvas.tooler || this.isDraw) return

        //新增 (當前工具)的全新數據
        let newData = canvas.tooler.data()
        let tooler = canvas.tooler

        canvas.tooler = canvas.objecter.addObj(tooler, newData)

        canvas.tooler.start(canvas, event)

        this.isDraw = true
    }

    mousemoveDoing(canvas, event) {
        if (!canvas.tooler || !this.isDraw) return

        canvas.tooler.move(canvas, event)
    }

    mouseupDoing(canvas, event) {
        if (!canvas.tooler || !this.isDraw) return

        canvas.tooler.stop(canvas, event)

        this.isDraw = false
    }
}