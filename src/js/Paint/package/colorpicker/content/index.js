import { build } from "./dom.js"
import Color from "./color/index.js"

export default class Content {
    constructor(CustOnChange) {
        this.dom = build()

        this.red = new Color("red", CustOnChange)
        this.green = new Color("green", CustOnChange)
        this.blue = new Color("blue", CustOnChange)

        this.dom.appendChild(this.red.dom)
        this.dom.appendChild(this.green.dom)
        this.dom.appendChild(this.blue.dom)
    }
}