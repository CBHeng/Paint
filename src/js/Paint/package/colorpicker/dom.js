import { makeDom } from "./helper.js"
import { config } from "./config.js"

export function build() {
    let colorpicker = makeDom("id", "colorpicker", config.colorpicker.css, config.colorpicker.attritubes)

    return colorpicker
}