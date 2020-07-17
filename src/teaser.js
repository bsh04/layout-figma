import $ from 'jquery'

function changeColorBtn () {
    $('#buy').on("click", () => {
        $("#buy").css("background-color", "midnightblue")
        $("#buy").css("color", "white")
        $('#buyOneClick').css("background-color", "white")
        $('#buyOneClick').css("color", "midnightblue")
    })

    $('#buyOneClick').on("click", () => {
        $("#buyOneClick").css("background-color", "midnightblue")
        $("#buyOneClick").css("color", "white")
        $('#buy').css("background-color", "white")
        $('#buy').css("color", "midnightblue")
    })
}

export default changeColorBtn()