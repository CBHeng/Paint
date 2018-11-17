import { isNull, isDrawing } from './Helper.js'

export default {
    eventer: {
        mousedownDoingOnCanvas(Drawer, Objecter, event) {
            if (isNull(Objecter.current.tooler)) return

            let objecter = Objecter.addCurrentObj()

            Objecter.current.tooler.start(event)

            Drawer.startDraw(Objecter.objs)
        },
        mousemoveDoingOnCanvas(Drawer, Objecter, event) {
            if (isNull(Objecter.current.tooler) || !isDrawing(Drawer.status)) return

            Objecter.current.tooler.move(event)

            Drawer.moveDraw(Objecter.objs)
        },
        mouseupDoingOnCanvas(Drawer, Objecter, event) {
            if (isNull(Objecter.current.tooler) || !isDrawing(Drawer.status)) return

            Objecter.current.tooler.stop(event)

            Drawer.stopDraw(Objecter.objs)
        },
        clickDoingOnTool(Tooler, tool) {
            Tooler.now = tool
        }
    }
}