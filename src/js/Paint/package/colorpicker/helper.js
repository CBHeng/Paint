export function makeDom(type, name, css, attritubes) {
    let dom = addTagToDom({ type, name })
    dom = addCSSToDom(dom, css)
    dom = addAttributesToDom(dom, attritubes)

    return dom
}

export function makeIcon(name, css) {
    let icon = document.createElement('i');

    icon.classList.add(`fas`)
    icon.classList.add(`fa-${name}`)

    icon = addCSSToDom(icon, css)

    return icon
}

export function customColor(type) {
    let result = ""

    switch(type) {
        case "red":
            result = "rgb(255, 87, 57)"
            break
        case "green":
            result = "rgb(105, 195, 59)"
            break
        case "blue":
            result = "rgb(65, 165, 225)"
            break   
        default:
            result = type
            break
    }

    return result
}

export function rgbToHex({ red, green, blue }) {
    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function addTagToDom({type, name}) {
    let dom = null;

    if(type === "class") {
        dom = document.createElement("div")
        dom.classList.add(name)
    } else if (type === "input") {
        dom = document.createElement("input")
        dom.classList.add(name)
    } else {
        dom = document.createElement("div")
        dom.setAttribute(type, name)
    }

    return dom
}

function addCSSToDom(dom, css) {
    for (let attribute in css) {
        dom.style[attribute] = css[attribute]
    }

    return dom
}

function addAttributesToDom(dom, attributes) {
    for (let attribute in attributes) {
        let value = attributes[attribute]

        dom.setAttribute(attribute, value)
    }

    return dom
}