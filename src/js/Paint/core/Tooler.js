import { isNull } from './Helper.js'

export default class Tooler {
    constructor(tools) {
        this.tools = tools
    }

    _init(drawer, objecter, eventer, hooks) {
        Object.keys(this.tools).forEach(key => {
            let tool = this.tools[key]
            let $this = tool
            let dom = tool.dom = document.querySelector(tool.el)
            let event = 'click'
            let eventthing = hooks.tooler['click']

            eventer._bind($this, dom, event, eventthing, drawer, objecter)

            if (isNull(tool.mouseStyle)) return

            new Image().src = tool.mouseStyle
        })
    }
}