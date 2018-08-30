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

        this.select = null

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

                let Tool = CustomizedTool.class

                Tool = new Tool()

                if (Tool.click) Tool.click(this, event)

                this.resetCanvasEvent(Tool)

                this.stores.push(Tool)
            })
        }
    }

    resetCanvasEvent(Tool) {

        let beforeDraw = (event) => {
            this.selectRule(event)

            if (Tool.beforeDraw) Tool.beforeDraw(this, event)
        }

        let draw = (event) => {
            if (Tool.beforeDraw) Tool.draw(this, event)
        }

        let endDraw = (event) => {
            if (Tool.beforeDraw) Tool.endDraw(this, event)
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
            class: Tool,
            beforeDraw: beforeDraw,
            draw: draw,
            endDraw: endDraw
        }        
    }

    selectRule(event) {
        this.select = this.stores.find((store) => {
            return store.selectRule ? store.selectRule(this, event) : false
        })

        if (this.select) {
            this.select.defaultSelect ? this.select.defaultSelect(this, event) : false
        }

        return this.select
    }
}