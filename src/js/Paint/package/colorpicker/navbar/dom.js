import { makeDom } from "../helper.js"
import { config } from "./config.js"

export function build() {
    let dom = makeDom("class", "colorpicker-navbar", config.navbar.css, config.navbar.attribute)

    let btn = makeDom("class", "colorpicker-navbar-btn", config.navbarBtn.css, config.navbarBtn.attribute)

    dom.appendChild(btn)

    return dom
}