export default class Attributer {
    constructor(attritubes) {
        this.attritubes = attritubes
    }
    
    _init(drawer, objecter, eventer, hooks) {
        Object.keys(this.attritubes).forEach( key => {
            let attritube = this.attritubes[key]
            
            attritube.picker.init(attritube.onChange.bind(null, drawer, objecter))
        })
    }
}