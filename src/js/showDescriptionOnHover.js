function showDescriptionOnHover() {

    $('.card-body').hover(function() {
        $(this).find('div.card-overlay-appear').removeClass('display-none').addClass('d-flex');
        $(this).find('div.card-overlay-appear-layer2').removeClass('display-none').addClass('d-flex');
    });

    $('.card-body').mouseleave(function() {
        $(this).find('div.card-overlay-appear').removeClass('d-flex').addClass('display-none');
        $(this).find('div.card-overlay-appear-layer2').removeClass('d-flex').addClass('display-none');
    });

};