
$(document).ready(function(){

    const elements = [];
    const tags = [];
    const $container = $(".container");
    const $tagCloud = $(".tag-cloud");
    const tagElements = [];

    for(let d of DATA){
        // get tag data for tag cloud
        // for(let tag of d.tags){
        //     if(tags.indexOf(tag) === -1){
        //         tags.push(tag);
        //     }
        // }
        // project display
        const $newFigure = $container.find(".template").clone().removeClass("template");

        $newFigure.find("img").attr({
            src: d.imgURL,
            alt: d.name
        });

        $newFigure.find(".img-label").text(d.name);
        elements.push($newFigure);
    }

    // let count = 1;
    // for (let tag of tags){
    //     const li = $tagCloud.find(".tag-item.template").clone().removeClass("template");
    //     li.find("a").addClass("size"+count).text(tag);
    //     tagElements.push(li);
    //     count++;
    //     if(count > 6){
    //         count = 1;
    //     }
    // }
    //clear the containers
    $container.empty();
    // $tagCloud.empty();

    //add elements to appropriate containers
    // $tagCloud.append(tagElements);
    $container.append(elements);
});
