$(document).ready(function() {
    $('nav ul li:eq(1)').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });
    $('.main_btna').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });
    $('.contact').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });
    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    })
});