import $ from 'jquery'

function changeTypeConsultation() {
    $(".dropdown-menu li").on("click", (e) => {
        e.preventDefault()
        $(".dropdown button")[0].innerText = e.currentTarget.innerText
    })
    $("#myInput").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })
}

export default changeTypeConsultation()