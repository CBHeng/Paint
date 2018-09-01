export default class Canvas {
    constructor(elementName) {
        this.element = document.querySelector(elementName)

        this.ctx =  this.element.getContext('2d')

        this.draw = false

        this.width = 0

        this.height = 0

        this.moveSpace = {
            x: 0,
            y: 0
        }

        this.stores = [];

        this.select = {
            obj: null,
            x: 0,
            y: 0
        }

        this.tool = null

        this.tmp = {}
    }

    init(CustomizedTools) {

        this.element.width = window.innerWidth

        this.element.height = window.innerHeight

        this.width = window.innerWidth

        this.height = window.innerHeight

        this.initToolsEvent(CustomizedTools)

        requestAnimationFrame(this.core.bind(this))
    }

    core() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

        this.stores.map((store) => {
            store.draw ? store.draw(this) : false
        })

        requestAnimationFrame(this.core.bind(this))
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

        let select = (event) => {
            if (Tool.canSelectOtherObject) {
                let selectObject = this.selectRules(event)

                if (!selectObject) return

                selectObject.select(this, event)
            }else {
                Tool.start()
            }

            this.select.x = event.offsetX
            this.select.y = event.offsetY
        }

        let move = (event) => {
            this.moveSpace = {
                x: event.offsetX - this.select.x,
                y: event.offsetY - this.select.y
            }

            if (Tool.move) Tool.move(this, event)

            this.select.x = event.offsetX
            this.select.y = event.offsetY
        }

        let stop = (event) => {
            if (Tool.stop) Tool.stop(this, event)
        }

        this.element.addEventListener('mousedown', select)

        this.element.addEventListener('mousemove', move)

        this.element.addEventListener('mouseup', stop)

        if(this.tool) {
            this.element.removeEventListener('mousedown', this.tool.select)
            this.element.removeEventListener('mousemove', this.tool.move)
            this.element.removeEventListener('mouseup', this.tool.stop)
        }

        this.tool = {
            class: Tool,
            select: select,
            move: move,
            stop: stop
        }        
    }

    selectRules(event) {
        let tool = this.stores.find((store) => {
            return store.selectRule ? store.selectRule(this, event) : false
        })
        
        this.select = {
            obj: tool,
            x: event.offsetX,
            y: event.offsetY
        }

        return tool
    }
}