import { build } from "./dom.js"
import { initEvent } from "./event.js"

export default class Color {
    constructor(type, CustOnChange) {
        this.dom = build(type)

        initEvent(this.dom, type, CustOnChange)
    }
}