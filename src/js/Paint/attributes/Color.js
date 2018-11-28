export default {
    el: "#colorpicker",
    init(drawer, objecter, eventer, hooks) {
        let colorpicker = document.querySelector(this.el)
        let redBar = colorpicker.querySelector("#red .bar"),
            greenBar = colorpicker.querySelector("#green .bar"),
            blueBar = colorpicker.querySelector("#blue .bar")

        let navbar = colorpicker.querySelector(".navbar")
        let colorBars = [redBar, greenBar, blueBar]
        
        //pciker event
        let spaceX = 0
        let spaceY = 0

        navbar.addEventListener('dragstart',function(event){
            let ract = colorpicker.getBoundingClientRect()

            spaceX = event.pageX - ract.left
            spaceY = event.pageY - ract.top

        }, false)

        navbar.addEventListener('drag', function (event) {
            let ract = colorpicker.getBoundingClientRect()
            //先算點擊與dom起始多長

            colorpicker.style.right = 0
            colorpicker.style.left = (event.pageX - spaceX) + "px"
            colorpicker.style.top = (event.pageY - spaceY) + "px"
        }, false)
        

        navbar.addEventListener('dragend', function (event) {
            let ract = colorpicker.getBoundingClientRect()
            //先算點擊與dom起始多長

            colorpicker.style.right = 0
            colorpicker.style.left = (event.pageX - spaceX) + "px"
            colorpicker.style.top = (event.pageY - spaceY) + "px"
        }, false)

        // colorBars bind event
        colorBars.forEach(bar => {
            let selecter = bar.querySelector('.selecter')
            let connect = bar.querySelector('.connect')
            
            selecter.addEventListener('dragstart', function (event) {
               
            }, false)

            selecter.addEventListener('drag', function(event){
                let left = ( (event.pageX - bar.getBoundingClientRect().x) / bar.clientWidth ) * 100
                let right = 100 - left

                if (left < 0 || left > 100) return

                selecter.style.left = `${left}%`
                connect.style.right = `${right}%`
            }, false)

            selecter.addEventListener('dragend', function (event) {                
                let left = ((event.pageX - bar.getBoundingClientRect().x) / bar.clientWidth) * 100
                let right = 100 - left

                if (left < 0 || left > 100) return

                selecter.style.left = `${left}%`
                connect.style.right = `${right}%`
            }, false)
        })
    },
}