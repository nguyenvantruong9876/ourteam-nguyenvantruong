
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    
    if (scroll >280) {
        $("#ourtean").addClass("nav-fixed");
    } else {
        $("#ourtean").removeClass("nav-fixed");
    }
});