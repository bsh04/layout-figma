import $ from 'jquery'

let counter = 1
function counterCarousel() {
    $('#next').on("click", () => {
        if (counter > 4) counter = 0
        counter ++
        $('#counter')[0].innerHTML = `0${counter}`
    })
    $('#pred').on("click", () => {
        if (counter < 2) counter = 6
        counter --
        $('#counter')[0].innerHTML = `0${counter}`
    })
}
export default counterCarousel()