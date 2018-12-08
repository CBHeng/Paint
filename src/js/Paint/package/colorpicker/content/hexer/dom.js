import { makeDom, makeIcon } from "../../helper.js"
import { config } from "./config.js"

export function build() {
    let hexer = makeDom("class", "colorpicker-content-hexer", config.hexer.css, config.hexer.attribute)

    let icon = makeDom("class", "colorpicker-content-hexer-icon", config.icon.css, config.icon.attribute)
    
    let seter = makeDom("input", "colorpicker-content-hexer-seter", config.seter.css, config.seter.attribute)

    icon.appendChild(makeIcon("palette"))

    hexer.appendChild(icon)
    
    hexer.appendChild(seter)

    return hexer
}