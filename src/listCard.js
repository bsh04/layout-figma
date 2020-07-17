import $ from 'jquery'

$(".whyBtn").css("background-color", "crimson")
$(".whyBtn").css("color", "white")
function changeList() {
    $(".whoBtn").on("click", () => {
        $(".whoBtn").css("background-color", "midnightblue")
        $(".whoBtn").css("color", "white")
        $(".whyBtn").css("color", "black")
        $(".whyBtn").css("background-color", "")
        $(".who").css("display", "block")
        $(".why").css("display", "none")
    })
    $(".whyBtn").on("click", () => {
        $(".whyBtn").css("background-color", "crimson")
        $(".whyBtn").css("color", "white")
        $(".whoBtn").css("color", "black")
        $(".whoBtn").css("background-color", "")
        $(".why").css("display", "block")
        $(".who").css("display", "none")
    })
}

export default  changeList()
