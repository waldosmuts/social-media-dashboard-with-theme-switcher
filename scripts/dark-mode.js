$(document).ready(function () {
    $(".theme-switch").click(function (e) {
        if ($("#dark-mode").is(":checked")) {
            $("body").addClass("dark-mode");
        } else {
            $("body").removeClass("dark-mode");
        }
    });
});