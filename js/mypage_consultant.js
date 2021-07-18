$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
})

if (window.location.hash == "#awaiting") {
    var tab_id = "tab-2"

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $('#tab-awaiting').addClass('current');
    $("#" + tab_id).addClass('current');
}