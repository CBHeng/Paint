import Eventer from "./Eventer.js";
import Objecter from "./Objecter.js";
import Drawer from "./Drawer.js";
import Tooler from "./Tooler.js";
import Hooks from "./Hooks.js";
import Canvas from "./Canvas.js";

export default class Paint {
    constructor(config) {
        let dom = document.querySelector(config.el)
        let width = window.innerWidth
        let height = window.innerHeight

        this.canvas = new Canvas(dom, width, height)
        this.drawer = new Drawer(this.canvas, width, height)
        this.objecter = new Objecter(config.tools)
        this.tooler = new Tooler(config.tools)
        this.eventer = new Eventer()
        this.hooks = Hooks

        this._init()
    }

    _init() {
        let drawer = this.drawer
        let objecter = this.objecter
        let eventer = this.eventer
        let hooks = this.hooks

        this.tooler._init(drawer, objecter, eventer, hooks)
        this.canvas._init(drawer, objecter, eventer, hooks)
    }
}