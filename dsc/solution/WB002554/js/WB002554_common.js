// JavaScript Document
$(function () {
    //如果a的連結是#contact，滑到下方諮詢單
    $('a[href*="#contact"]').click(function () {
        $htmlBody.stop().animate({ scrollTop: Math.ceil($('#contact').offset().top - _navLinkOuterHeight) });
        return false;
    });

    $('.jobProblem .txt').hover(function () {
        var $this = $(this);
        $this.find('.txtLayer').stop().fadeOut();
        $this.find('.mask').stop().animate({ top: 0 }, function () {
            $this.find('.txtLayer').css({ 'z-index': 5, 'color': '#fff' }).stop().fadeIn();
        });
    }, function () {
        var $this = $(this);
        $this.find('.mask').stop().animate({ top: 100 + '%' });
        $this.find('.txtLayer').removeAttr('style');
    });



    //案例超過字數顯示省略號
    $('.caseGroup .desc').each(function () {
        var maxWordNum = 60;
        if ($(this).text().length > maxWordNum) {
            $(this).text($(this).text().substring(0, maxWordNum));
            $(this).html($(this).html() + '...');
        }
    });

    $('.fa-chevron-down').click(function () {
        $('html, body').animate({ scrollTop: ($('.issueGroup').offset().top - 50) + 'px' });

    });

    var changeNum = 0;
    $('#jobProblem .outline').click(function () {
        var $this = $(this).index();
        if (changeNum == $this) {
            return;
        } else {
            $('#jobProblem .outline').removeClass('active').eq($this).addClass('active');
            $('#jobProblem .jobProblem').eq($this).stop(true, true).fadeIn();
            $('#jobProblem .jobProblem').eq(changeNum).stop(true, true).fadeOut();
            changeNum = $this;
        }
    });

    $('#mainContent .group .list').click(function () {
        var $this = $(this).index();
        var _scrollTop = $('.issueGroup .issue').eq($this).offset().top;
        $('html, body').animate({ scrollTop: _scrollTop - 50 });
    });
});