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
        let isMoving = false

        navbar.addEventListener('mousedown',function(){
            if(isMoving) return

            isMoving = true
        })

        navbar.addEventListener('mousemove', function () {
            if (!isMoving) return

            let ract = colorpicker.getBoundingClientRect()

            colorpicker.style.right = 0
            colorpicker.style.left = ract.left + event.movementX +"px"
            colorpicker.style.top = ract.top + event.movementY + "px"
        })

        navbar.addEventListener('mouseup', function () {
            if (!isMoving) return

            isMoving = false
        })

        navbar.addEventListener('mouseover', function () {
            if (!isMoving) return

            isMoving = false
        })


        // colorBars bind event
        colorBars.forEach(bar => {
            let isSelected = false

            bar.addEventListener('mousedown',function(event){
                event.stopPropagation()

                if(isSelected) return

                isSelected = true
            }, true)

            bar.addEventListener('mousemove', function(event){
                event.stopPropagation()

                if(!isSelected) return

                let selecter = bar.querySelector('.selecter')
                let connect = bar.querySelector('.connect')
                
                let left = ( (event.pageX - bar.getBoundingClientRect().x) / bar.clientWidth ) * 100
                let right = 100 - left

                selecter.style.left = `${left}%`
                connect.style.right = `${right}%`
            }, true)

            bar.addEventListener('mouseup', function (event) {
                event.stopPropagation()

                if(!isSelected) return

                isSelected = false
            }, true)

            bar.addEventListener('mouseover', function (event) {
                event.stopPropagation()

                if (!isSelected) return

                isSelected = false
            }, true)
        })
    },
}