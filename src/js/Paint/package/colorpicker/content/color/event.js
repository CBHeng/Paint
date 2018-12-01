import { config } from "./config.js"
import { rgbToHex } from "../../helper.js"

export function initEvent(color, type, CustomOnChange) {
    let bar = color.querySelector(".colorpicker-content-color-bar")

    let selecter = color.querySelector(".colorpicker-content-color-bar-selecter")

    let connect = color.querySelector(".colorpicker-content-color-bar-connect")

    selecter.addEventListener("dragstart", dragBySelecter.bind(null, type, bar, selecter, connect, CustomOnChange))

    selecter.addEventListener("drag", dragBySelecter.bind(null, type, bar, selecter, connect, CustomOnChange))

    selecter.addEventListener("dragend", dragBySelecter.bind(null, type, bar, selecter, connect, CustomOnChange))
}

function dragBySelecter(type, bar, selecter, connect, CustomOnChange, event) {
    let orignOfBar = bar.getBoundingClientRect()
    let widthOfBar = bar.clientWidth

    let distanceBetweenPointXAndOrignOfBar = event.pageX - orignOfBar.x

    let percent = (distanceBetweenPointXAndOrignOfBar / widthOfBar) * 100

    if (percent < 0 || percent > 100) return

    selecter.style.left = percent + "%"
    connect.style.right = (100 - percent) + "%"

    config.rgb[type] = Math.round( 255 * (percent / 100) )

    let hex = rgbToHex(config.rgb)

    CustomOnChange(hex)
}