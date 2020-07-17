import $ from 'jquery'

let num = document.getElementById("inpValue")
let decr = $("#decr")
let incr = $("#incr")
let count = 1

function handlerPrice() {
    document.getElementById("inpValue").addEventListener("input", () => {
        count = Number(num.value)
        if (count > 1 && count < 20) {
            $("#oldPrice del")[0].innerText = String(12000 * count) + ' Р'
            $("#newPrice")[0].innerText = String(4000 * count) + ' Р'
        }
        else {
            if (count < 1) {
                num.value = '0'
            }
            if (count > 20) {
                num.value = '20'
            }
        }
    })
    decr.on("click", () => {
        if (count > 1) {
            count--
            num.value = String(count)
            $("#oldPrice del")[0].innerText = String(12000 * count) + ' Р'
            $("#newPrice")[0].innerText = String(4000 * count) + ' Р'
        }
    })
    incr.on("click", () => {
        if (count < 20) {
            count++
            num.value = String(count)
            $("#oldPrice del")[0].innerText = String(12000 * count) + ' Р'
            $("#newPrice")[0].innerText = String(4000 * count) + ' Р'
        }
    })
}

export default handlerPrice()