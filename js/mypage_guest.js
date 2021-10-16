$(document).ready(function(){

	$('ul.tabs li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

if (window.location.hash == "#awaiting") {
    let tab_id = "tab-2"

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $('#tab-awaiting').addClass('current');
    $("#" + tab_id).addClass('current');
}

if (window.location.hash == "#done") {
    let tab_id = "tab-3"

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $('#tab-done').addClass('current');
    $("#" + tab_id).addClass('current');
}

function todetail(){
    location.href = "../html/board_detailed.html"
}