$(document).ready(function () {

    notification = setInterval(() => {
        let id = Math.floor(100000000 + Math.random() * 900000000);
        let mat =  Math.floor(1 + Math.random() * 8);
        let pre = ["51", "52", "54", "55", "56"]
        new simpleSnackbar(`User ${pre[Math.floor(Math.random() * 5)]}${id} got ${mat} materials !`, {
            type: 'success',
        }).show();
    }, 3000);

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('July 12, 2020 05:30:00').getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0) {
             clearInterval(x);
             $('#countdown').hide();
             $('h1.title').html("It's over ;");
             $('#btn-collect').removeAttr('href');
             clearInterval(notification);
            }

        }, second);
});