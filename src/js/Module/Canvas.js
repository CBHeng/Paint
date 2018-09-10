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

        this.stores = [];

        this.select = {
            obj: null,
            x: 0,
            y: 0
        }

        this.mouse = {
            last: {
                x: 0,
                y: 0
            },
            now: {
                x: 0,
                y: 0
            }
        }

        this.moveSpace = {
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
            if(this.select.obj === store) store.drawSelectStyle(this)

            store.draw ? store.draw(this) : false
        })

        requestAnimationFrame(this.core.bind(this))
    }

    coreEvents() {
        let mousedownDoing = (event) => {
            if(!this.tool) return 

            this.mouse.now.x = event.offsetX

            this.mouse.now.y = event.offsetY
            
            if (!this.tool.canSelectOtherObj) {
                this.tool.start(this, event)
            } else {
                this.select.x = event.offsetX
                this.select.y = event.offsetY

                let selectObj = this.stores.find((store) => {
                    return store.selectRule ? store.selectRule(this, event) : false
                })

                if(!selectObj) {
                    this.select.obj = null

                    return
                }

                this.select.obj = selectObj

                this.tool = selectObj
                
                this.tool.select(this, event)
            }

            this.mouse.last.x = event.offsetX

            this.mouse.last.y = event.offsetY
        }

        let mousemoveDoing = () => {
            if(!this.tool) return

            this.mouse.now.x = event.offsetX

            this.mouse.now.y = event.offsetY

            this.moveSpace.x = this.mouse.now.x - this.mouse.last.x

            this.moveSpace.y = this.mouse.now.y - this.mouse.last.y

            this.tool.move(this, event)

            this.mouse.last.x = event.offsetX

            this.mouse.last.y = event.offsetY
        }

        let mouseupDoing = () => {
            if(!this.tool) return

            this.mouse.now.x = event.offsetX

            this.mouse.now.y = event.offsetY

            this.tool.stop(this, event)

            this.mouse.last.x = event.offsetX

            this.mouse.last.y = event.offsetY
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

    addCurrentToolToStore() {
        if (!this.tool) return false

        let newTool = Object.create(this.tool)

        this.tool = newTool

        this.stores.push(this.tool)
    }
}