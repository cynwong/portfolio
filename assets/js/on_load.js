"use strict";

$(document).ready(function () {

    // Navigation buttons onClick action
    $(".page-navs button.btn-nav").click((event) => {
        const $target = $(event.target);
        const className = "current";
        if (!$target.hasClass(className)) {
            //if button does not have current class, 
            // change page. 
            $(".btn-nav.current").removeClass(className);
            $target.addClass(className);
            changePage($target.attr("id").split("-")[1]);
        }
    });

    $("#projects-container").on("click", ".btn-more", function(event){
        event.preventDefault();
        const index = $(event.target).closest(".card-container").data("index");
        render_details(index);
    });

    $("#project-details  .btn-close").click(function(){
        closeModal();
    });
    $("#project-details").click(function(event){
        const $target = $(event.target);
        if($target.hasClass("modal")){
            //if click on empty space, 
            //close the modal. 
            closeModal();
        }
    });

});
