export default {
    el: '#pen',
    mouseStyle: "src/image/mouse/pen.png",
    attritubes: {
        color: true
    },
    data(canvas) {
        return {
            initialPoint: {
                x: 0,
                y: 0
            },
            path:[],
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

    move() {
        this.path.push({
            x: event.offsetX,
            y: event.offsetY
        })
    },

    stop(event) {

    },

    draw(ctx, event) {
        ctx.beginPath();

        ctx.moveTo(this.initialPoint.x, this.initialPoint.y);
        
        this.path.forEach( point => {
            ctx.lineTo(point.x, point.y);
        })
        
        ctx.stroke();
    }
}