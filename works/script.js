$(function() {
    $('.nav_btn').on('click', function(){
        $(this).toggleClass('active')
        $('.nav').toggleClass('active')
        $('.overlay').toggleClass('active')
    })
    $('.overlay').on('click', function(){
        $('.overlay').toggleClass('active')
        $('.nav').toggleClass('active')
        $('.nav_btn').toggleClass('active')
    })
})