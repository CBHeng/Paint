export default class Drawer {
    constructor(canvas, width, height) {
        this.target = canvas
        this.ctx = canvas.dom.getContext('2d')
        this.status = "select"
    }

    _redraw(objs) {
        this.ctx.clearRect(0, 0, this.target.width, this.target.height)

        objs.forEach((obj) => {
            obj.draw(this.ctx)
        })
    }

    startDraw(objs) {
        this.status = "draw"
        
        this._redraw(objs)
    }

    moveDraw(objs) {
        this._redraw(objs)
    }

    stopDraw(objs) {
        this._redraw(objs)

        this.status = 'select'
    }
}