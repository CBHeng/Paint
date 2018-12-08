import { config } from "./config.js"
import { rgbToHex } from "../../helper.js"

export function initEvent(color, type, CustomOnChange) {
    let selecter = color.querySelector(".colorpicker-content-color-bar-selecter")

    selecter.addEventListener("dragstart", dragBySelecter.bind(null, type, color, CustomOnChange))

    selecter.addEventListener("drag", dragBySelecter.bind(null, type, color, CustomOnChange))

    selecter.addEventListener("dragend", dragBySelecter.bind(null, type, color, CustomOnChange))
}

function dragBySelecter(type, color, CustomOnChange, event) {
    let bar = color.querySelector(".colorpicker-content-color-bar")
    let number = color.querySelector(".colorpicker-content-color-number")
    let connect = color.querySelector(".colorpicker-content-color-bar-connect")
    let selecter = color.querySelector(".colorpicker-content-color-bar-selecter")

    let orignOfBar = bar.getBoundingClientRect()
    let widthOfBar = bar.clientWidth

    let distanceBetweenPointXAndOrignOfBar = event.pageX - orignOfBar.x

    let percent = (distanceBetweenPointXAndOrignOfBar / widthOfBar) * 100

    if (percent < 0 || percent > 100) return
    let colorpicker = document.getElementById("colorpicker")
    let value = Math.round(255 * (percent / 100))

    config.rgb[type] = value

    let hex = rgbToHex(config.rgb)

    number.innerText = value
    selecter.style.left = percent + "%"
    connect.style.right = (100 - percent) + "%"
    colorpicker.style.backgroundColor = `rgba(${config.rgb.red},${config.rgb.green},${config.rgb.blue},0.7)`

    CustomOnChange(hex)
}