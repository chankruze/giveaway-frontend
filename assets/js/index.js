$(document).ready(function(){
    $('#tapatap').on('click', function(e){
        let user = $('#user').val();
        let pass = $('#pass').val();

        console.log(user, pass);

        if (user.length > 0 && pass.length > 7) {
            $('#data').get(0).reset();
            $('#data-div').hide();
            $('#js-container').show();
        }
    });
});