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

// smooth scroll
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });