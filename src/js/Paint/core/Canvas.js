export default class Canvas {
    constructor(dom, width, height) {
        this.name ="canvase"
        this.dom = dom
        this.width = width
        this.height = height
    }

    _init(drawer, objecter, eventer, hooks) {
        let dom = this.dom

        dom.width = this.width
        dom.height = this.height
        hooks = hooks.canvas
        
        let events = Object.keys(hooks)

        //events bind
        events.forEach(event => {
            let eventthing = hooks[event].bind(this, drawer, objecter)

            eventer._bind(dom, event, eventthing)
        })
    }
}