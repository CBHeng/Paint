export default class Eventer {
    constructor() {
        
    }
    
    _bind(dom, event, eventthing) {
        dom.addEventListener(event, eventthing)
    }
}