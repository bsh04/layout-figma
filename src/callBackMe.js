import $ from 'jquery'

function maskPhone() {
    $('#sendFormCall').on("click", () => {
         const x = document.getElementById('phone')
            console.log(x)
            // e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    })
        // let country = $('#country option:selected').val();
        // const number = ("#phone")[0].value
        // const phoneno = /\d{3}/
        // console.log(number.match(phoneno));


}

export default maskPhone()