// disable right click

$(document).ready(function() {
    $(document)[0].oncontextmenu = function() { return false; }

    $(document).mousedown(function(e) {
        if( e.button == 2 ) {
            return false;
        } else {
            return true;
        }
    });
});