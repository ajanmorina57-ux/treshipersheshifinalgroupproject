$(document).ready(function(){
    var currentPage = window.location.pathname.split('/').pop();
    if(currentPage === ''){
        currentPage = 'index.html';
    }

    $('.nav .link').each(function(){
        var linkHref = $(this).attr('href');
        if (linkHref === currentPage){
            $(this).css({
                'color' : '#D4AF37',
                'border-bottom' : '2px solid #D4AF37',
                'padding-bottom' : '2px'
            });
        }
    });

    $('.box').hide().fadeIn(500);

    $('.courses .course ul').hide();
    $('.courses .course').css('cursor', 'pointer');

    $('.courses .course').on('click', function(event) {
        // Ignore clicks directly on links or payment buttons
        if (!$(event.target).is('a, button')) {
            $(this).find('ul').slideToggle(250);
        }
    });

    $('.market-snapshot li, .box .list li').hover(
        function() {
            $(this).stop().animate({ opacity: 0.7 }, 150).animate({ opacity: 1.0 }, 150);
        }
    );

});