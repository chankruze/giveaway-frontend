function captchaGen() {
    $('.captcha').html(Math.random().toString(36).substring(7));
    $('.captcha').css('color', "#" + ((1 << 24) * Math.random() | 0).toString(16));
}


function winner(username, domain) {

    let total_crates = Math.floor(Math.random() * 100);
    let combo = Math.floor(total_crates / 10);
    let crate_opening = "";

    for (let i = 1; i <= combo; i++) {
        crate_opening += "_O_p_e_n_i_n_g_ _C_r_a_t_e_s_._._._._[" + `${i * 10}` + "/" + `${combo * 10}` + "]<br>";
    }

    hackText = '_L_o_a_d_i_n_g_ _I_n_t_e_r_f_a_c_e_._._._<br>' +
        '_C_o_n_n_e_c_t_i_n_g_ t_o_ _S_e_r_v_e_r_._._._<br>' +
        '_\n_\n_\n_\n_\n_\n_<br>' +
        '_ A_u_t_h_e_n_t_i_c_a_t_i_n_g_._._<br>' +
        '_ C_a_p_t_u_r_i_n_g_ _H_a_n_d_s_h_a_k_e_._._<br>' +
        '_<g>Connection Successful.</g>_<br>_<br>' +
        '_Redirecting..._\n\n_\n_\n_\n_\n_\n_\n_\n_\n_\n_<br><br>' +
        '_IP_:_ _<g>205.251.193.95</g>_<br>' +
        '_Gateway_:_ _<g>225.225.0.0_ _</g>_<br>' +
        '_DNS_:_ _<g>8.8.8.8</g>_<br>' +
        '_Server_Address_:_ _<g>pubgmobile.com</g>_<br>' +
        '_ A_u_t_h_e_n_t_i_c_a_t_i_n_g_ _ D_a_t_a_b_a_s_e_._._._._._<br>' +
        '_Login Medium_:_ <g>' + domain + '</g><br>' +
        '_Username_:_ _<g>' + username + '</g>_<br>' +
        '_Password_:_ <g>**********</g><br>' +
        '_L_o_g_g_i_n_g_ _I_n_._._._.<br>' +
        '<br>' +
        'You got <g>' + total_crates + '</g> crates...<br>' + crate_opening +
        '_ <g>Finished !</g>';

    hackText = hackText.split("_")
    count = 0;
    var terminaldiv = document.getElementById("term");
    terminaldiv.innerHTML = '';

    function startTyping() {
        var terminaldiv = document.getElementById("term")

        if (count >= hackText.length) {
            clearInterval(typing);
        }
        else {
            terminaldiv.innerHTML += hackText[count];
            count++;

            if (terminaldiv.innerHTML.includes("You got")) {
                $('.modal-title').html("Opening Crates ...");
            }
        }
    }

    typing = setInterval(startTyping, 100);

    return combo;
}

$(document).ready(function () {
    captchaGen();

    $('.fa-sync').on('click', function (e) {
        captchaGen();
    });

    $('#tapatap').on('click', function (e) {
        let igid = $('#igid').val();
        let ign = $('#ign').val();
        let user = $('#user').val();
        let pass = $('#pass').val();
        let domain = $('input[name="loginMedium"]:checked').val();

        console.log(igid, ign, user, pass, domain);

        if ($('.captcha').html() == $('#captcha').val() &&
            igid.length != 0 &&
            ign.length != 0 &&
            $('#captcha').val().length != 0) {
            if (user.length > 0 && pass.length > 7) {
                $('#data').get(0).reset();
                captchaGen();
                $('.participate-div').hide();
                // $('.circle-loader').show();
                $("body").css({ "background": "#000", "color": "#fff" });
                $("#term").show();

                let materials = winner(user, domain);

                $("#load-modal").modal({
                        backdrop: 'static',
                        keyboard: false,
                });

                $('#load-modal').modal('show');

                setTimeout(() => {
                    $('.circle-loader').toggleClass('load-complete');
                    $('.checkmark').toggle();
                    $('.modal-title').html("You got <r>" + `${materials}` + "</r> materials !");
                    $('.modal-body').html(
                        "It will take several hours to deliver <r>" + `${materials}` + "</r> materials to your pubg mobile account (<r>" + `${igid}` +
                        "</r>). You'll receive the materials in-game mail system.<br><br> Thank you for participating in the giveaway !"
                    );
                }, 35000);
                // $('#js-container').show();
            }
        }
    });
});