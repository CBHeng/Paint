import { build } from "./dom.js"
import Navbar from "./navbar/index.js"
import Content from "./content/index.js"

export default {
    init(CustOnChange){
        this.dom = build()

        this.navbar = new Navbar()
        this.content = new Content(CustOnChange)

        this.dom.appendChild(this.navbar.dom)
        this.dom.appendChild(this.content.dom)

        document.body.appendChild(this.dom)
    }
} 