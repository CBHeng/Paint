import CanvasEventHooks from "./CanvasEventHooks.js";
import CanvasToolHooks from "./CanvasToolHooks.js";
import CanvasDrawer from "./CanvasDrawer.js";
import CanvasObjecter from "./CanvasObjecter.js";

export default class Canvas {
    constructor(config) {
        this.element = document.querySelector(config.el)
        this.ctx = this.element.getContext('2d')

        this.element.width = window.innerWidth
        this.element.height = window.innerHeight

        this.width = window.innerWidth
        this.height = window.innerHeight
        
        this.CanvasEventHooks = new CanvasEventHooks()
        this.CanvasToolHooks = new CanvasToolHooks()
        this.CanvasDrawer = new CanvasDrawer()
        this.objecter = new CanvasObjecter(config.tools)

        this.tooler = null;

        this._init()
    }

    _init() {
        this.CanvasToolHooks._init(this, this.tools)
        this.CanvasEventHooks._init(this)
        this.CanvasDrawer._init(this)
    }

    get objs() {
        return this.objecter.objs
    }

    get tools() {
        return this.objecter.tools
    }

    changeCursor(style) {
        if(!style) return
        console.log(style)
        this.element.style.cursor = `url(${style}),auto`
    }
}