"use strict";

const hideAllSections = function () {
    $("main section").hide();
};

const changePage = function (toPage) {
    // First, hide all sections
    hideAllSections();

    // portfolio page is special. it must be generated from data. 
    if (toPage.localeCompare("portfolio") === 0) {
        generatePortfolio();
    }

    // display chosen section
    $("#" + toPage + "-section").show();

};

const generatePortfolio = function () {

    const $section = $("main #portfolio-section");
    const $container = $section.find("#projects-container");
    const projects = [];

    //clean the container
    $container.empty();

    //prepare the card for user display
    for (let project of PORTFOLIO_DATA) {
        const {
            name,
            imgAlt,
            imgURL,
            deployedURL: url,
            description,
            mainTags: tagNames
        } = project;
        const tags = [];
        const $card = $section.find(".card.template").clone().removeClass("template");
        const $img = $card.find(".card-image img");

        $img.attr("src", imgURL);
        $img.attr("alt", imgAlt);

        $card.find(".card-title").text(name);
        tagNames.sort();
        for (let tagName of tagNames) {
            tags.push(
                $("<li>", {
                    text: tagName,
                    "data-tag-name": tagName
                })
            );
        }
        $card.find(".card-tags").append(tags);
        $card.find(".card-body").text(description);

        projects.push($card);
    }
    $container.append(projects);
}

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
});
