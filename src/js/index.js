import { Paint, Pen, Circle } from './Paint/Paint.js'

let paint = new Paint({
    el: '#Paint',
    tools: {
        pen: Pen,
        circle: Circle
    }
})

