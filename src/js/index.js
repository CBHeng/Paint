import { Paint, Pen, Circle } from './Paint/Paint.js'
import Colorpicker from "./Paint/package/colorpicker/index.js"

let paint = new Paint({
    el: '#Paint',
    tools: {
        pen: Pen,
        circle: Circle
    },
    attributes: {
        color: {
            default: "#000",
            picker: Colorpicker,
            onChange: function (drawer, objecter, color) {
                objecter.current.color = color
            }
        }
    }
})

