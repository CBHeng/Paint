import { dd } from './Helper.js'

export default class Canvas {
    constructor(elementName) {
        this.element = document.querySelector(elementName)

         this.element.width = window.innerWidth

         this.element.height = window.innerHeight

        this.ctx =  this.element.getContext('2d')

        this.stores = [];
    }

    beforeDraw() {
        dd('beforeDraw')
    }
}