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

})