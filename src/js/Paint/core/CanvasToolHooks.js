export default class ToolHooks {
    constructor() {
       
    }
    _init(canvas, tools) {
        for (let name in tools) {
            let tool = tools[name]

            tool._name = name

            tool.dom.addEventListener('click', this.initDoing.bind(this, canvas, tool))
        }
    }

    initDoing(canvas, tool, event) {
        canvas.tooler = tool

        canvas.tooler.init(canvas, event)

        canvas.changeCursor(tool.mouseStyle)
    }
}