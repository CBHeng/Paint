export default class Eventer {
    constructor() {
        this.eventsOnCanvas = ['mousedown', 'mousemove', 'mouseup']
    }

    _bind(dom, drawer, objecter, hooks) {
        this.eventsOnCanvas.forEach(event => {
            dom.addEventListener(event, hooks.eventer[`${event}DoingOnCanvas`].bind(hooks, drawer, objecter))
        })
    }
}