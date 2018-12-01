import { makeDom, customColor } from "../../helper.js"
import { config } from "./config.js"

export function build(type) {
    let color = makeDom("class", "colorpicker-content-color", config.color.css, config.color.attribute)

    let barForColor = getBarForColor(type)

    let numberForColor = getNumberForColor()

    color.appendChild(barForColor)
    color.appendChild(numberForColor)

    return color
}

function getBarForColor(type) {
    let bar = makeDom("class", "colorpicker-content-color-bar", config.color.bar.css, config.color.bar.attribute)

    config.color.bar.connect.css.backgroundColor = customColor(type)

    let connect = makeDom("class", "colorpicker-content-color-bar-connect", config.color.bar.connect.css, config.color.bar.connect.attribute)

    let selecter = makeDom("class", "colorpicker-content-color-bar-selecter", config.color.bar.selecter.css, config.color.bar.selecter.attribute)

    bar.appendChild(connect)
    bar.appendChild(selecter)

    return bar
}

function getNumberForColor() {
    let number = makeDom("class", "colorpicker-content-color-number", config.color.number.css, config.color.number.attribute)

    number.innerText = "255"

    return number
}