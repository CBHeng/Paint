export default {
    dom: document.querySelector('#circle'),
    mouseStyle: "src/image/mouse/circle.png",
    data() {
        return {
            initialPoint: {
                x: event.offsetX,
                y: event.offsetY
            },
            width: 0,
            height: 0,
            lastX: 0,
            lastY: 0
        }
    },
    init(canvas,event) {

    },
    start(canvas, event) {
        this.initialPoint = {
            x: event.offsetX,
            y: event.offsetY
        }
    },
    move(canvas, event) {
        this.width = Math.abs(this.initialPoint.x - event.offsetX)
        this.height = Math.abs(this.initialPoint.y - event.offsetY)
    },
    stop(canvas, event) {

    },
    drawSelectStyle(canvas) {
        canvas.ctx.beginPath();

        canvas.ctx.strokeStyle = "#888888"

        canvas.ctx.rect(this.initialPoint.x, this.initialPoint.y, this.width, this.height)

        canvas.ctx.stroke()
    },
    draw(canvas) {
        canvas.ctx.beginPath();

        canvas.ctx.strokeStyle = "#000000"
        
        let startX = this.initialPoint.x + (this.width/2)
        let startY = this.initialPoint.y + (this.height/2)
        let r = startX > startY ? this.height/2 : this.width/2

        canvas.ctx.arc(startX, startY, r, 0, 2 * Math.PI);

        canvas.ctx.stroke();
    }

}