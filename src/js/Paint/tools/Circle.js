export default {
    el: '#circle',
    mouseStyle: "src/image/mouse/circle.png",
    attritubes: {
        color: false
    },
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
    init(event) {

    },
    start(event) {
        this.initialPoint = {
            x: event.offsetX,
            y: event.offsetY
        }
    },
    move(event) {
        this.width = Math.abs(this.initialPoint.x - event.offsetX)
        this.height = Math.abs(this.initialPoint.y - event.offsetY)
    },
    stop(event) {

    },
    drawSelectStyle(canvas) {
        canvas.ctx.beginPath();

        canvas.ctx.strokeStyle = "#888888"

        canvas.ctx.rect(this.initialPoint.x, this.initialPoint.y, this.width, this.height)

        canvas.ctx.stroke()
    },
    draw(ctx) {
        ctx.beginPath();
        
        ctx.strokeStyle = "#000000"
        
        let startX = this.initialPoint.x + (this.width/2)
        let startY = this.initialPoint.y + (this.height/2)
        let r = startX > startY ? this.height/2 : this.width/2

        ctx.arc(startX, startY, r, 0, 2 * Math.PI);

        ctx.stroke();
    }

}