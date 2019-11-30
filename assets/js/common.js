"use strict";
/**
 * close modal
 */
const closeModal = function(){
    $("#project-details").hide();
}
/**
 * hide all sections of main 
 */
const hideAllSections = function () {
    $("main section").hide();
};

/**
 * switch to chosen page. 
 * @param {string} toPage 
 */
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

/**
 * Generate Portfolio page by rendering PORTFOLIO_DATA. 
 */
const generatePortfolio = function () {

    const $section = $("main #portfolio-section");
    const $container = $section.find("#projects-container");
    const projects = [];

    //clean the container
    $container.empty();

    //prepare the card for user display
    // Pfor (let (index,project) of PORTFOLIO_DATA) {
    PORTFOLIO_DATA.forEach((project, index)=>{
        const {
            name,
            images,
            summary,
            mainTags: tagNames
        } = project;
        const tags = [];
        const $card = $section.find(".card.template").clone().removeClass("template");
        const $img = $card.find(".card-image img");
        const image = images[0];

        $card.data("index", index);

        $img.attr("src", image.url);
        $img.attr("alt", image.alt);

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
        $card.find(".card-body").text(summary);

        projects.push($card);
    });
    $container.append(projects);
}

const render_details = function(index){
    const $modal = $("#project-details");
    const {
        name,
        images,
        githubURL,
        deployedURL,
        description,
        mainTags,
        otherTags
    } = PORTFOLIO_DATA[index];
    const tags = [...mainTags, ...otherTags];
    const $imageContainer = $modal.find(".modal-image-container");
    const $tagCloud = $modal.find(".modal-tag-cloud");
    const imgElements = [];
    const tagElements = [];

    $modal.find(".modal-title").text(name);

    $imageContainer.empty();
    for(let image of images){
        const $container = $modal.find(".modal-image.template").clone().removeClass("template");
        const $img = $container.find("img");
        $img.attr("src", image.url);
        $img.attr("alt", image.alt);

        imgElements.push($container);
    }

    $imageContainer.append(imgElements);

    $modal.find(".modal-description").text(description);

    tags.sort();
    $tagCloud.empty();
    for(let tag of tags){
        tagElements.push(
            $("<li>", {
                text: tag,
                "data-tag-name": tag
            })
        );
    }
    $tagCloud.append(tagElements);


    $modal.find(".btn-site").attr("href", deployedURL);
    const $btnGithub = $modal.find(".btn-github");
    $btnGithub.removeClass("btn-show");
    if(githubURL){
        $btnGithub.attr("href",githubURL);
        $btnGithub.addClass("btn-show");
    }
    
    $modal.show();
}
