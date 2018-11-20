import { isNull, isDrawing } from './Helper.js'

export default {
    canvas: {
        mousedown(Drawer, Objecter, event) {
            if (isNull(Objecter.current.tooler)) return

            let objecter = Objecter.addCurrentObj()

            Objecter.current.tooler.start(event)

            Drawer.startDraw(Objecter.objs)
        },
        mousemove(Drawer, Objecter, event) {
            if (isNull(Objecter.current.tooler) || !isDrawing(Drawer.status)) return

            Objecter.current.tooler.move(event)

            Drawer.moveDraw(Objecter.objs)
        },
        mouseup(Drawer, Objecter, event) {
            if (isNull(Objecter.current.tooler) || !isDrawing(Drawer.status)) return

            Objecter.current.tooler.stop(event)

            Drawer.stopDraw(Objecter.objs)
        }
    },
    tooler: {
        click(Drawer, Objecter, event) {
            let tooler = this

            Objecter.current.tooler = tooler

            Objecter.current.tooler.init(event)

            if (isNull(Objecter.current.tooler.mouseStyle)) return

            Drawer.target.dom.style.cursor = `url(${Objecter.current.tooler.mouseStyle}),auto`
        }
    }
}