export default class Drawer {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.status = "select"
    }

    _redraw(objs) {
        this.ctx.clearRect(0, 0, this.width, this.height)

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