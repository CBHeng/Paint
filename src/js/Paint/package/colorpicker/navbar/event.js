export function initEvent(navbar) {
    let distanceBetweenPointerAndOrignOfColopicker = {
        x: 0,
        y: 0,
    }

    navbar.addEventListener("dragstart", function (event) {
        let colorpicker = document.getElementById("colorpicker")

        let rectOfColorpikcer = colorpicker.getBoundingClientRect()

        distanceBetweenPointerAndOrignOfColopicker.x = event.pageX - rectOfColorpikcer.left
        distanceBetweenPointerAndOrignOfColopicker.y = event.pageY - rectOfColorpikcer.top

        colorpicker.style.right = 0
        colorpicker.style.left = (event.pageX - distanceBetweenPointerAndOrignOfColopicker.x) + "px"
        colorpicker.style.top = (event.pageY - distanceBetweenPointerAndOrignOfColopicker.y) + "px"
    })

    navbar.addEventListener("drag", function (event) {
        let colorpicker = document.getElementById("colorpicker")

        colorpicker.style.right = 0
        colorpicker.style.left = (event.pageX - distanceBetweenPointerAndOrignOfColopicker.x) + "px"
        colorpicker.style.top = (event.pageY - distanceBetweenPointerAndOrignOfColopicker.y) + "px"
    })

    navbar.addEventListener("dragend", function (event) {
        let colorpicker = document.getElementById("colorpicker")

        colorpicker.style.right = 0
        colorpicker.style.left = (event.pageX - distanceBetweenPointerAndOrignOfColopicker.x) + "px"
        colorpicker.style.top = (event.pageY - distanceBetweenPointerAndOrignOfColopicker.y) + "px"
    })
}