/* ===============================================================
    Owl Banner Home
=============================================================== */
$(document).ready(function() {
    var owlHome = $("#owl-banner-home");
    owlHome.owlCarousel({
        autoPlay : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination: false,
        navigation : true
    });
    $(".next-owl-home").click(function(){
        owlHome.trigger('owl.next');
    })
    $(".prev-owl-home").click(function(){
        owlHome.trigger('owl.prev');
    })
});