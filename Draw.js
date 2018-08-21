import { dd } from './Helper.js'

export default class Draw{
    constructor(canvas){
        this.el = canvas
        this.ctx = canvas.getContext('2d')
    }

    init() {
        this.el.width = window.innerWidth
        this.el.height = window.innerHeight
        this.active = false
        this.el.addEventListener('mousedown', this.startDraw.bind(this) )
        this.el.addEventListener('mousemove', this.drawing.bind(this))
        this.el.addEventListener('mouseup', this.endDraw.bind(this))
    }

    startDraw(event) {
        this.active = true
        this.ctx.beginPath()
        dd('start')
    }

    drawing(event) {
        if( ! this.active ){
            return 
        }

        this.ctx.arc(event.clientX, event.clientY, 0, 20, 20, true);
        this.ctx.stroke();
        dd('move')
    }

    endDraw() {
        this.active = false

        dd('end')
    }
}