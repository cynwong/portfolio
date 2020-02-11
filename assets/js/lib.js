"use strict";
// image sizes in pixel
const imgSizes = {
	xs: 388,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200
};

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
 * @param {jQuery element} $item
 */
const changePage = function (toPage, $item) {
    // First, hide all sections
	hideAllSections();
	let state, title, url;

	// remove active class from menu item 
	$(".menu-item.active").removeClass("active");

	if(!$item) {
		$item = $(".menu").find(`.menu-item:first-child`);
	}
	
    // portfolio page is special. it must be generated from data. 
    if (toPage.localeCompare("portfolio") === 0) {
        generatePortfolio();
    }


	// add active to menu item
	$item.addClass("active");
    // display chosen section
	$("#" + toPage).show();

	// hide menu
	$(".menu").removeClass("open");
	$(".btn-menu-burger").removeClass("open");
};

/**
 * Generate Portfolio page by rendering PORTFOLIO_DATA. 
 */
const generatePortfolio = function () {

    const $section = $("#portfolio");
    const $container = $section.find("#projects-container");
    const projects = [];

    //clean the container
    $container.empty();

    //prepare the card for user display
    PORTFOLIO_DATA.forEach(
		(
			{
				name, 
				images,
				summary,
				mainTags: tagNames
			},
			index
		)=>{
			const tags = [];
			const $card = $section.find(".card-container.template").clone().removeClass("template");
			const $img = $card.find(".card-image");

			$card.data("index", index);
			const srcset = [];
			for (let [key, value] of Object.entries(images.urls)){
				srcset.push(`${value} ${imgSizes[key]}w`);
			}
			const sizes = `(max-width:${imgSizes.sm}) ${imgSizes.xs}px,
					(max-width:${imgSizes.md}) ${imgSizes.sm}px,
					(max-width:${imgSizes.lg}) ${imgSizes.md}px,
					(max-width:${imgSizes.xl}) ${imgSizes.lg}px,
					${imgSizes.xl}px`;
			$img.attr('srcset',srcset.join(','));
			$img.attr('sizes',sizes);
			$img.attr("src", images.urls.xs);
			$img.attr("alt", images.alt);

			$card.find(".card-content-title").text(name);
			tagNames.sort();
			for (let tagName of tagNames) {
				tags.push(
					$("<li>", {
						text: tagName,
						"data-tag-name": tagName
					})
				);
			}
			$card.find(".card-content-tags").append(tags);
			$card.find(".card-content-body").text(summary);

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

    // add title
    $modal.find(".modal-title").text(name);

    //append the images. 
    $imageContainer.empty();
    for(let image of images){
        const $container = $modal.find(".modal-image.template").clone().removeClass("template");
        const $img = $container.find("img");
        $img.attr("src", image.url);
        $img.attr("alt", image.alt);

        imgElements.push($container);
    }

    $imageContainer.append(imgElements);

    //add description
    $modal.find(".modal-description").text(description);

    //generate tag cloud
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

    //check if there is a site url. if not, don't show it
    const $btnSite = $modal.find(".btn-site");
    $btnSite.removeClass("btn-show");
    if(deployedURL){
        $btnSite.attr("href", deployedURL);
        $btnSite.addClass("btn-show");
    }

    //check if there is a github url. if not, don't show it. 
    const $btnGithub = $modal.find(".btn-github");
    $btnGithub.removeClass("btn-show");
    if(githubURL){
        $btnGithub.attr("href",githubURL);
        $btnGithub.addClass("btn-show");
    }
    
    $modal.show();
}
