import { dd } from './Helper.js'

export default class Tool {
    constructor(elementName) {
        this.element = document.querySelector(elementName)
    }
}