$(document).ready(function() {
    // project filter
    let $btns = $('.project-area .button-group button')
    $btns.click(function(e) {
        $btns.removeClass('active')
        e.target.classList.add('active')

        let selector = $(e.target).attr('data-filter')
        $('.project-area .grid').isotope({
            filter:selector
        })
        return false
    })
    $('.project-area .button-group #btn1').trigger('click')

    // sticky navigation menu
    let nav_offset_top = $('.header-area').height()+50
    function navbarFixed() {
        if($('.header-area').length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop()
                if(scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar-fixed')
                } else {
                    $('.header-area .main-menu').removeClass('navbar-fixed')
                }
            })
        }
    }
    navbarFixed()
})