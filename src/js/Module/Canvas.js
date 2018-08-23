export default class Canvas {
    constructor(elementName) {
        this.element = document.querySelector(elementName)

        this.ctx =  this.element.getContext('2d')

        this.draw = false

        this.axis = {
            x: 0,
            y: 0
        }

        this.stores = [];

        this.tools = {}

        this.feature = false

        this.tmp = {}
    }

    init(tools) {
        this.element.width = window.innerWidth

        this.element.height = window.innerHeight

        this.tools = tools

        this.initToolsEvent()
    }

    initToolsEvent() {
        let tools = this.tools

        for( let name in tools ) {
            tools[name].element.addEventListener('click', this.clickTool.bind(this, tools[name]))
        }
    }
    clickTool(tool,event) {

        if(tool.click)tool.click(this,event)

        this.resetFeatureEvent(tool)

        this.addFeatureEvent()

    }

    resetFeatureEvent(updated) {

        if (this.feature) {
            this.element.removeEventListener('mousedown', this.feature.beforeDraw)
            this.element.removeEventListener('mousemove', this.feature.draw)
            this.element.removeEventListener('mouseup', this.feature.endDraw)
        }

        this.feature = {
            class: updated,
            beforeDraw: updated.beforeDraw.bind(updated,this),
            draw: updated.draw.bind(updated,this),
            endDraw: updated.endDraw.bind(updated,this),
        }
    }

    addFeatureEvent() {
        this.element.addEventListener('mousedown', this.feature.beforeDraw)
        this.element.addEventListener('mousemove', this.feature.draw)
        this.element.addEventListener('mouseup', this.feature.endDraw)
    }
}