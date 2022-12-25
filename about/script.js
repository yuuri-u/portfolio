$(function() {
    $('.nav_btn').on('click', function(){
        $(this).toggleClass('active')
        $('.nav').toggleClass('active')
        $('.overlay').toggleClass('active')
    })
    $('.overlay').on('click', function(){
        $('.overlay').removeClass('active')        
        $('.nav').removeClass('active')
        $('.nav_btn').toggleClass('active')
    })
})