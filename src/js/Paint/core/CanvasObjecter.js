export default class CanvasObjects {
    constructor(tools) {
        this.tools = tools;

        this.objs= [];
    }

    addObj(tooler, data) {
        let obj = {}

        Object.keys(tooler).forEach( key => {
            CanvasObjects.bind(obj, key, tooler[key])
        })

        Object.keys(data).forEach(key => {
            CanvasObjects.bind(obj, key, data[key])
        })

        let length = this.objs.push(obj)

        let index = length -1

        return this.objs[index]
    }
    
    static bind(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            configurable: true,
            enumerable: true,
            writable: true
        })
    }
}