
$(document).ready(function() {
    $('.service-item').click(function() {
        $(this).toggleClass('clicked');
        $(this).find('.additional-info').slideToggle();
    });

    $('#get-quote-button').click(function() {
        // Handle click event for "Get Your Quote Now" button
        window.location.href = 'contactus.html';
    });
});
