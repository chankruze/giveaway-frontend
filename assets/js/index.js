$(document).ready(function(){
    $('#tapatap').on('click', function(e){
        let user = $('#user').val();
        let pass = $('#pass').val();

        console.log(user, pass);

        if (user.length > 0 && pass.length > 7) {
            $('#data').get(0).reset();
            $('#data-div').hide();
            $('#load-modal').modal('show');
            setTimeout(() => {
                $('.circle-loader').toggleClass('load-complete');
                $('.checkmark').toggle();
            }, 1000);
            // $('#js-container').show();
        }
    });
});