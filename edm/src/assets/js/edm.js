$(document).ready(function () {
    $(".menu_navigation").click(function () {
        debugger
        $(".admin_base").toggleClass("admin_mini_menu");
    });

    $(".mobile_search").click(function () {
        $(".mobile_search_section").show();
    });

    $(".search_section > img").click(function () {
        $(".mobile_search_section").hide();
    });

    if (window.matchMedia("(max-width: 850px)").matches) {
        $(".admin_base").addClass("admin_mini_menu");
    } else {
        $("admin_base").removeClass("admin_mini_menu");
    }
    $(".open_mobile_menu").click(function () {
        $(".mobile_menu").show();
    });
});