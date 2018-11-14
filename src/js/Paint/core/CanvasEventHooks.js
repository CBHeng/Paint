export default class CanvasEventHooks {
    constructor() {
        this.isDraw = false

        this.mouse = {
            last: {
                x: 0,
                y: 0
            },
            now: {
                x: 0,
                y: 0
            }
        }

        this.moveSpace = {
            x: 0,
            y: 0
        }
    }
    _init(canvas) {
        canvas.element.addEventListener('mousedown', this.mousedownDoing.bind(this,canvas))
        canvas.element.addEventListener('mousemove', this.mousemoveDoing.bind(this, canvas))
        canvas.element.addEventListener('mouseup', this.mouseupDoing.bind(this, canvas))
    }

    mousedownDoing(canvas, event) {
        if (!canvas.tooler || this.isDraw) return

        this.mouse.now.x = event.offsetX
        this.mouse.now.y = event.offsetY

        //新增 (當前工具)的全新數據
        let newData = canvas.tooler.data()
        let tooler = canvas.tooler

        canvas.tooler = canvas.objecter.addObj(tooler, newData)

        canvas.tooler.start(canvas, event)

        this.isDraw = true
    }

    mousemoveDoing(canvas, event) {
        if (!canvas.tooler || !this.isDraw) return

        this.mouse.now.x = event.offsetX
        this.mouse.now.y = event.offsetY

        this.moveSpace.x = this.mouse.now.x - this.mouse.last.x
        this.moveSpace.y = this.mouse.now.y - this.mouse.last.y

        canvas.tooler.move(canvas, event)

        this.mouse.last.x = event.offsetX
        this.mouse.last.y = event.offsetY
    }

    mouseupDoing(canvas, event) {
        if (!canvas.tooler || !this.isDraw) return

        this.mouse.now.x = event.offsetX
        this.mouse.now.y = event.offsetY

        canvas.tooler.stop(canvas, event)

        this.mouse.last.x = event.offsetX
        this.mouse.last.y = event.offsetY

        this.isDraw = false
    }
}