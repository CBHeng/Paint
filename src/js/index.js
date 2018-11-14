import { Canvas, Pen, Circle } from './Paint/Paint.js'

let canvas = new Canvas({
    el: '#Paint',
    tools: {
        pen: Pen,
        circle: Circle
    }
})

