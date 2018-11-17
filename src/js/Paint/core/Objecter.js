export default class Objecter {
    constructor(tools) {
        this.objs= [];

        this.current = {
            tooler: null
        }
    }

    addCurrentObj() {
        let obj = {}
        let currentTooler = this.current.tooler
        let dataOfCurrentTooler = this.current.tooler.data()

        Object.keys(currentTooler).forEach( key => {
            Objecter.bind(obj, key, currentTooler[key])
        })

        Object.keys(dataOfCurrentTooler).forEach(key => {
            Objecter.bind(obj, key, dataOfCurrentTooler[key])
        })

        let length = this.objs.push(obj)

        let index = length -1

        this.current.tooler = this.objs[index]

        return this.current.tooler
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