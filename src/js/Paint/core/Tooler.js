import { isNull } from './Helper.js'

export default class Tooler {
    constructor(tools) {
        this.tools = tools
    }

    _bind(canvasDom, drawer, objecter) {
        Object.keys(this.tools).forEach( key => {
            let tool = this.tools[key]

            let dom = tool.dom = document.querySelector(tool.el)

            dom.addEventListener('click', this.clickDoing.bind(tool, canvasDom, drawer, objecter) )

            if (isNull(tool.mouseStyle)) return

            new Image().src = tool.mouseStyle
        })
    }

    clickDoing(canvasDom, drawer, objecter, event) {
        let tool = this
        
        tool.init()

        objecter.current.tooler = tool

        if (isNull(objecter.current.tooler.mouseStyle)) return

        canvasDom.style.cursor = `url(${objecter.current.tooler.mouseStyle}),auto`
    }
}