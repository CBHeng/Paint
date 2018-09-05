export default class Canvas {
    constructor(elementName) {
        this.element = document.querySelector(elementName)

        this.ctx =  this.element.getContext('2d')

        this.draw = false

        this.width = 0

        this.height = 0

        this.perious = {
            x: 0,
            y: 0
        }

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

        this.coreEvents()

        this.coreToolsInit(CustomizedTools)

        requestAnimationFrame(this.core.bind(this))
    }

    core() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

        this.stores.forEach((store) => {
            store.draw ? store.draw(this) : false
        })

        requestAnimationFrame(this.core.bind(this))
    }

    coreEvents() {
        let mousedownDoing = (event) => {
            if(!this.tool) return 

            if (!this.tool.canSelectOtherObj) {
                this.tool.start(this, event)
            }else {
                this.tool.select(this, event)
            }
        }

        let mousemoveDoing = () => {
            if(!this.tool) return

            this.tool.move(this, event)
        }

        let mouseupDoing = () => {
            if(!this.tool) return

            this.tool.stop(this, event)
        }

        this.element.addEventListener('mousedown', mousedownDoing)

        this.element.addEventListener('mousemove', mousemoveDoing)

        this.element.addEventListener('mouseup', mouseupDoing)
    }

    coreToolsInit(tools) {
        for( let toolName in tools) {
            let canvas = this
            let tool = tools[toolName]

            
            tool.element.addEventListener('click',(event)=> {
                canvas.tool = tool

                canvas.tool.init(canvas,event)
            })
        }
    }

    resetCanvasEvent(Tool) {

        let selectOrStart = (event) => {
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

        this.element.addEventListener('mousedown', selectOrStart)

        this.element.addEventListener('mousemove', move)

        this.element.addEventListener('mouseup', stop)

        if(this.tool) {
            this.element.removeEventListener('mousedown', this.tool.selectOrStart)
            this.element.removeEventListener('mousemove', this.tool.move)
            this.element.removeEventListener('mouseup', this.tool.stop)
        }

        this.tool = {
            class: Tool,
            selectOrStart: selectOrStart,
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

    addCurrentToolToStore(currentTool) {
        if (!currentTool) return false

        let newTool = Object.create(this.tool)

        this.tool = newTool

        this.stores.push(this.tool)
    }
}