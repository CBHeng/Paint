export default class Canvas {
    constructor(elementName) {
        this.element = document.querySelector(elementName)

        this.ctx =  this.element.getContext('2d')

        this.draw = false

        this.width = 0

        this.height = 0

        this.axis = {
            x: 0,
            y: 0
        }

        this.stores = [];

        this.tool = null

        this.tmp = {}
    }

    init(CustomizedTools) {

        this.element.width = window.innerWidth

        this.element.height = window.innerHeight

        this.width = window.innerWidth

        this.height = window.innerHeight

        this.initToolsEvent(CustomizedTools)
    }

    initToolsEvent(CustomizedTools) {

        for (let name in CustomizedTools ) {
            
            let CustomizedTool = CustomizedTools[name]

            let CustomizedToolDom = document.querySelector(CustomizedTool.el)
            
            if (!CustomizedToolDom) return

            CustomizedToolDom.addEventListener('click', (event) => {

                CustomizedTool = new CustomizedTool.class()

                if (CustomizedTool.click) CustomizedTool.click(this, event)

                this.resetCanvasEvent(CustomizedTool)
            })
        }
    }

    resetCanvasEvent(CustomizedTool) {

        let beforeDraw = (event) => {
            if (CustomizedTool.beforeDraw) CustomizedTool.beforeDraw(this, event)
        }

        let draw = (event) => {
            if (CustomizedTool.beforeDraw) CustomizedTool.draw(this, event)
        }

        let endDraw = (event) => {
            if (CustomizedTool.beforeDraw) CustomizedTool.endDraw(this, event)
        }

        this.element.addEventListener('mousedown', beforeDraw)

        this.element.addEventListener('mousemove', draw)

        this.element.addEventListener('mouseup', endDraw)

        if(this.tool) {
            this.element.removeEventListener('mousedown', this.tool.beforeDraw)
            this.element.removeEventListener('mousemove', this.tool.draw)
            this.element.removeEventListener('mouseup', this.tool.endDraw)
        }

        this.tool = {
            class: CustomizedTool,
            beforeDraw: beforeDraw,
            draw: draw,
            endDraw: endDraw
        }        
    }
}