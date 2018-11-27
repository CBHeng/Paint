import { Paint, Pen, Circle, Color } from './Paint/Paint.js'

let paint = new Paint({
    el: '#Paint',
    tools: {
        pen: Pen,
        circle: Circle
    },
    attributes: {
        color: Color
    }
})

