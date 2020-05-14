$(function() {
    var $win = $(window);
    var $htmlBody = $('html, body');
    var navHeight = $('#navLink').outerHeight(true);
    var contactPos = $('#contact').offset().top;
    var offset = 50;

    $('.mainTxt:nth-of-type(odd)').addClass('sectionStyle');

    $('.quickLink').click(function() {
        var anchor = $(this).attr('data-anchor');
        var anchorTop = $(anchor).offset().top;
        $htmlBody.stop().animate({ scrollTop: anchorTop - navHeight - offset });
    });

    $('.btn-changePage').click(function() {
        var parent = $(this).attr('data-direction');
        var nowParentsTop =
            $(this)
                .parents('.section')
                .offset().top - navHeight;
        var $boundary = $(this).parents('.boundary');
        var leftHeight = $boundary.children('.left').outerHeight(true);
        var rightHeight = $boundary.children('.right').outerHeight(true);

        switch (parent) {
            case 'left':
                $htmlBody
                    .stop()
                    .animate({ scrollTop: nowParentsTop - offset }, function() {
                        $boundary.children('.right').show();
                        $boundary
                            .stop()
                            .animate({ left: '-1000px', height: rightHeight });
                    });
                break;
            case 'right':
                $htmlBody
                    .stop()
                    .animate({ scrollTop: nowParentsTop - offset }, function() {
                        $boundary
                            .stop()
                            .animate({ left: 0, height: leftHeight });
                    });
                break;
            case 'contact':
                $htmlBody
                    .stop()
                    .animate({ scrollTop: $('#contact').offset().top - offset });
                break;
        }
    });

    $('.circle-group span').click(function() {
        var _thisNo = $(this).index();
        var $part01 = $(this)
            .parent()
            .siblings()
            .find('.part01');
        var $part02 = $(this)
            .parent()
            .siblings()
            .find('.part02');
        var nowParentsTop =
            $(this)
                .parents('.section')
                .offset().top - navHeight;

        $(this)
            .siblings()
            .removeClass('now');
        $(this).addClass('now');

        if (_thisNo) {
            $part01.stop().fadeOut();
            $part02.stop().fadeIn();
        } else {
            $part01.stop().fadeIn();
            $part02.stop().fadeOut();
        }
        $htmlBody.stop().animate({ scrollTop: nowParentsTop - offset });
    });
});
