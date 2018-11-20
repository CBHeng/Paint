export default class Eventer {
    constructor() {
        
    }
    
    _bind($this, dom, event, eventthing, ...others) {
        dom.addEventListener(event, eventthing.bind($this, ...others))
    }
}