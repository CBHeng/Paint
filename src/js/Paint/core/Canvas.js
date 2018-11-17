import Eventer from "./Eventer.js";
import Objecter from "./Objecter.js";
import Drawer from "./Drawer.js";
import Tooler from "./Tooler.js";
import Hooks from "./Hooks.js";

export default class Canvas {
    constructor(config) {
        let dom = document.querySelector(config.el)
        let ctx = dom.getContext('2d')
        let width = window.innerWidth
        let height = window.innerHeight

        this.dom = dom
        this.dom.width = this.width = width
        this.dom.height = this.height = height

        this.drawer = new Drawer(ctx, width, height)
        this.objecter = new Objecter(config.tools)
        this.tooler = new Tooler(config.tools)
        this.eventer = new Eventer()
        this.hooks = Hooks

        this._init()
    }

    _init() {
        let dom = this.dom
        let drawer = this.drawer
        let tooler = this.tooler
        let objecter = this.objecter
        let hooks = this.hooks

        this.tooler._bind(dom, drawer, objecter)
        this.eventer._bind(dom, drawer, objecter, hooks)
    }

    get objs() {
        return this.objecter.objs
    }

    get tools() {
        return this.objecter.tools
    }
}