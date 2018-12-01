
import { build } from "./dom.js"
import { initEvent } from "./event.js"

export default class Navbar {
    constructor() {
        this.dom = build()

        initEvent(this.dom)
    }
}