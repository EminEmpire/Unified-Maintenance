
$(document).ready(function() {
    $('.service-item').click(function() {
        $(this).toggleClass('clicked');
        $(this).find('.additional-info').slideToggle();
    });

    $('#get-quote-button').click(function() {
        // Handle click event for "Get Your Quote Now" button
        window.location.href = '#contact-us';
    });
});

$(document).ready(function() {
    // Listen for the 'show.bs.collapse' event
    $('#navbarNavDropdown').on('show.bs.collapse', function () {
        // Navbar is about to be shown, change the logo
        $(".header-top .navbar-brand img").attr("src", "assets/media/img/collapsedlogo.png");
    });

    // Listen for the 'hide.bs.collapse' event
    $('#navbarNavDropdown').on('hide.bs.collapse', function () {
        // Navbar is about to be hidden, revert back to the original logo
        $(".header-top .navbar-brand img").attr("src", "assets/media/img/logo.png");
    });
});
