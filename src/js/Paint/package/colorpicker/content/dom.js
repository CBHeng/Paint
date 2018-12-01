import { makeDom } from "../helper.js"
import { config } from "./config.js"

export function build() {
    let content = makeDom("class", "colorpicker-content", config.content.css, config.content.attribute)

    return content
}