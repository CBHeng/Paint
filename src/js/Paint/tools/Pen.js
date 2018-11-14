export default {
    dom: document.querySelector('#pen'),
    mouseStyle: "src/image/mouse/pen.png",
    data(canvas) {
        return {
            initialPoint: {
                x: 0,
                y: 0
            },
            path:[],
        }
    },

    init(canvas, event) {

    },

    start(canvas, event) {
        this.initialPoint = {
            x: event.offsetX,
            y: event.offsetY
        }
    },

    move() {
        this.path.push({
            x: event.offsetX,
            y: event.offsetY
        })
    },

    stop(canvas,event) {

    },

    draw(canvas, event) {
        canvas.ctx.beginPath();

        canvas.ctx.moveTo(this.initialPoint.x, this.initialPoint.y);
        
        this.path.forEach( point => {
            canvas.ctx.lineTo(point.x, point.y);
        })
        
        canvas.ctx.stroke();
    }
}