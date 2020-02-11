'use strict';

$(document).ready(function () {

	changePage('home');

	// toggle menu button
	$(".btn-menu").click((event) => {
		const $btn = $('.btn-menu-burger');
		const $menu = $(".menu");

		if($btn.hasClass('open')){
			//close the menu
			$btn.removeClass('open');
			$menu.removeClass('open');
			return null;
		}
		// open the menu
		$btn.addClass('open');
		$menu.addClass('open');
	});

    // Navigation buttons onClick action
    $(".menu .menu-item").click((event) => {
		event.preventDefault();
		const $link = $(event.target);
		const $item = $link.closest(".menu-item");

		const href = $link.data("href");

		changePage(href, $item);

    });

    $("#projects-container").on("click", ".btn-more", function(event){
        event.preventDefault();
        const index = $(event.target).closest(".card-container").data("index");
        render_details(index);
    });

    $("#project-details .btn-close-modal").click(function(){
        changePage('portfolio');
    });
});